import { Mail, Phone, Send } from "lucide-react";
import ContactForm from "../contact-form";
import SiteHeader from "../site-header";

export default function ContactPage() {
  return (
    <main className="site">
      <SiteHeader />

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
