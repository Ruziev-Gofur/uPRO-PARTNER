"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

const services = [
  "Car hauling dispatch service 24/7",
  "Car hauling recruiting",
  "Car hauling brokerage",
  "Car hauling driver referral network system",
];

const consentText =
  "By checking this box, I consent to receive Customer Care, Marketing, Account Notifications, and Delivery Notifications SMS messages from TMD Logistics LLC (uPro Logistics). Reply STOP to opt out; Reply HELP for support; Message & data rates may apply; Messaging frequency may vary. Visit https://www.uprologistics.com/privacy-policy to see our Privacy Policy and https://www.uprologistics.com/terms-and-conditions for our Terms of Service.";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      smsConsent: formData.get("smsConsent") === "on",
      consentText,
    };

    if (!payload.name || !payload.email || !payload.phone) {
      setStatus("error");
      setError("Please enter your name, email, and phone number.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "The message could not be sent.");
      }

      form.reset();
      setStatus("success");
    } catch (submitError) {
      setStatus("error");
      setError(submitError instanceof Error ? submitError.message : "The message could not be sent.");
    }
  }

  return (
    <form className="contact-form" action="/api/contact" method="post" onSubmit={handleSubmit}>
      <label>
        Full name
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="you@example.com" required />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" placeholder="(312) 373-1282" required />
      </label>
      <label className="sms-consent full">
        <input type="checkbox" name="smsConsent" />
        <span>
          {consentText} See our {" "}
          <a href="/privacy-policy">Privacy Policy</a> and {" "}
          <a href="/sms-terms-and-conditions">SMS Terms & Conditions</a>.
        </span>
      </label>
      <label>
        Service needed
        <select name="service" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label className="full">
        Message
        <textarea name="message" rows={5} placeholder="Tell us how we can help" />
      </label>
      {status === "success" && (
        <p className="form-message success full">Your message has been sent successfully.</p>
      )}
      {status === "error" && <p className="form-message error full">{error}</p>}
      <button className="primary-button full" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"} <ArrowRight size={18} />
      </button>
    </form>
  );
}
