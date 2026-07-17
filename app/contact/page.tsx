import { Mail, Phone, Send } from "lucide-react";
import ContactForm from "../contact-form";
import ThemeToggle from "../theme-toggle";

const navItems = [
  ["Home", "/#home"],
  ["About Us", "/#about"],
  ["Services", "/#services"],
  ["Contact Us", "/contact"],
  ["Privacy Policy", "/privacy-policy"],
  ["Terms & Conditions", "/terms-and-conditions"],
  ["SMS Terms & Conditions", "/sms-terms-and-conditions"],
];

export default function ContactPage() {
  return (
    <main className="site">
      <header className="topbar">
        <a className="brand" href="/#home" aria-label="uPro Logistics home">
          <span className="brand-mark">uPro</span>
          <span>
            <strong className="copy-strong">uPro Logistics</strong>
            <small>TMD Logistics LLC</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
        <a className="header-call" href="tel:+13123731282">
          <Phone size={17} />
          (312) 373-1282
        </a>
      </header>

      <section className="section contact contact-page">
        <div className="contact-copy">
          <span className="eyebrow">Contact Us</span>
          <h1 className="copy-strong">Contact uPro Logistics.</h1>
          <p>
            Use this form to contact TMD Logistics LLC / uPro Logistics about dispatch services, recruiting, brokerage,
            driver referral network support, account notifications, and customer care.
          </p>
          <div className="contact-lines">
            <a href="tel:+13123731282">
              <Phone size={18} /> (312) 373-1282
            </a>
            <a href="mailto:info@uprologistics.com">
              <Mail size={18} /> info@uprologistics.com
            </a>
            <a href="https://t.me/upro_manager" target="_blank" rel="noopener noreferrer">
              <Send size={18} /> Telegram Business
            </a>
          </div>
        </div>

        <ContactForm />
      </section>

      <footer className="footer">
        <div>
          <strong className="copy-strong">uPro Logistics</strong>
          <span>Legal name: TMD Logistics LLC</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms & Conditions</a>
          <a href="/sms-terms-and-conditions">SMS Terms & Conditions</a>
        </nav>
      </footer>
    </main>
  );
}
