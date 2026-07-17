import SiteHeader from "../site-header";
import SmsTermsContent from "../sms-terms-content";

export default function SmsTermsAndConditions() {
  return (
    <main className="site legal-site">
      <SiteHeader />
      <div className="legal-page">
        <a className="back-link" href="/">
          Back to Home
        </a>
        <span className="eyebrow">uPro Logistics</span>
        <h1>SMS Terms & Conditions</h1>
        <p className="updated">Last updated: July 9, 2026</p>

      <SmsTermsContent />

      <section>
        <h2>Program description</h2>
        <p>
          By checking the SMS consent box, you consent to receive conversational and informational SMS from TMD
          Logistics LLC / uPro Logistics about customer care, dispatch services, recruiting updates, brokerage
          communications, and account notifications.
        </p>
      </section>

      <section>
        <h2>Consent</h2>
        <p>
          SMS consent is collected through a separate checkbox on our contact form. The checkbox is not preselected.
          Consent to receive SMS messages is not a condition of purchase.
        </p>
      </section>

      <section>
        <h2>Message frequency and fees</h2>
        <p>
          Message frequency may vary based on your request or active service communication. Message and data rates may
          apply depending on your mobile carrier plan.
        </p>
      </section>

      <section>
        <h2>Opt out and help</h2>
        <p>
          You can opt out of SMS messages at any time by replying STOP. You may reply HELP for assistance or contact us
          directly at info@uprologistics.com or (312) 373-1282.
        </p>
      </section>

      <section>
        <h2>Privacy</h2>
        <p>
          We do not share, sell, rent, or disclose SMS consent records or phone numbers to third parties or affiliates
          for their marketing or promotional purposes. Please review our <a href="/privacy-policy">Privacy Policy</a>{" "}
          and <a href="/terms-and-conditions">Terms & Conditions</a> for more information.
        </p>
      </section>

      <footer className="footer">
        <nav aria-label="Legal navigation">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms & Conditions</a>
          <a href="/sms-terms-and-conditions">SMS Terms & Conditions</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </footer>
      </div>
    </main>
  );
}
