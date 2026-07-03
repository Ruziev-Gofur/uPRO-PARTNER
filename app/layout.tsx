import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "uPro Partner — Your Cargo, Delivered",
  description: "Modern, secure, and efficient logistics services across domestic and international routes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
