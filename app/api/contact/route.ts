import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { NextResponse } from "next/server";

const consentText =
  "By checking this box, I consent to receive Customer Care, Marketing, Account Notifications, and Delivery Notifications SMS messages from TMD Logistics LLC (uPro Group). Reply STOP to opt out; Reply HELP for support; Message & data rates may apply; Messaging frequency may vary. Visit https://www.uprogroup.com/privacy-policy to see our Privacy Policy and https://www.uprogroup.com/terms-and-conditions for our Terms of Service.";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  smsConsent?: boolean;
  consentText?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const submission = {
    name: clean(payload.name),
    email: clean(payload.email),
    phone: clean(payload.phone),
    service: clean(payload.service),
    message: clean(payload.message),
    smsConsent: payload.smsConsent === true,
    consentText: clean(payload.consentText) || consentText,
    submittedAt: new Date().toISOString(),
  };

  if (!submission.name || !submission.email || !submission.phone) {
    return NextResponse.json({ error: "Name, email, and phone are required." }, { status: 400 });
  }

  const apiBaseUrl = (process.env.UPRO_API_URL || "https://api.upro.uz/api/v1").replace(/\/$/, "");
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ipAddress = forwardedFor || request.headers.get("x-real-ip") || "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";

  try {
    const response = await fetch(`${apiBaseUrl}/upro-contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        ipAddress,
        userAgent,
        service: submission.service,
        message: submission.message,
        smsConsent: submission.smsConsent,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const details = await response.text();
      throw new Error(`uPro API failed with ${response.status}: ${details}`);
    }
  } catch (error) {
    console.error("uPro contact API submission failed:", error);
    return NextResponse.json({ error: "The message could not be delivered." }, { status: 502 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with ${response.status}`);
      }
    } catch (error) {
      console.error("Contact form webhook failed:", error);
      return NextResponse.json({ error: "The message could not be delivered." }, { status: 500 });
    }
  }

  try {
    const dir = join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(join(dir, "contact-submissions.jsonl"), `${JSON.stringify(submission)}\n`, "utf8");
  } catch (error) {
    try {
      const fallbackDir = join(tmpdir(), "upro-partner");
      await mkdir(fallbackDir, { recursive: true });
      await appendFile(join(fallbackDir, "contact-submissions.jsonl"), `${JSON.stringify(submission)}\n`, "utf8");
    } catch (fallbackError) {
      console.error("Contact form storage failed:", error, fallbackError);
      return NextResponse.json({ error: "The message could not be saved." }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
