import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "uPro Logistics | TMD Logistics LLC",
  description: "Car hauling dispatch, recruiting, brokerage, and driver referral network services.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
