import SiteHeader from "../site-header";

export default function PrivacyPolicy() {
  return (
    <main className="site legal-site">
      <SiteHeader />
      <div className="legal-page">
        <a className="back-link" href="/">
          Back to Home
        </a>
        <span className="eyebrow">uPro Logistics</span>
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: July 9, 2026</p>

        <section>
          <h2>Who we are</h2>
          <p>
            uPro Logistics is the brand name of TMD Logistics LLC. We provide car hauling dispatch, recruiting,
            brokerage, and driver referral network services. You can contact us at info@uprologistics.com or (312)
            373-1282.
          </p>
        </section>

        <section>
          <h2>Information we collect</h2>
          <p>
            We may collect your name, company information, email address, phone number, service request details, and
            messages you submit through our website or direct communications.
          </p>
        </section>

        <section>
          <h2>How we use information</h2>
          <p>
            We use submitted information to respond to inquiries, provide requested services, coordinate business
            communications, improve our operations, and comply with legal obligations.
          </p>
        </section>

        <section>
          <h2>SMS consent and phone numbers</h2>
          <p>
            If you provide your phone number and check the SMS consent box, you agree that TMD Logistics LLC / uPro
            Logistics may send SMS messages regarding customer support, dispatch services, recruiting updates, brokerage
            communications, and account notifications. SMS consent is collected separately and is not preselected.
          </p>
          <p>
            We do not share, sell, rent, or disclose SMS consent records or phone numbers to third parties or affiliates
            for their marketing or promotional purposes.
          </p>
          <p>
            Mobile Opt in, SMS Consent, and phone numbers collected for SMS communication purposes will not be shared
            with any third party or affiliates for marketing purposes.
          </p>
          <p>
            SMS consent and phone numbers are not shared with any third parties/affiliates under any circumstances.
          </p>
        </section>

        <section>
          <h2>Information sharing</h2>
          <p>
            We may share information with service providers only when necessary to operate our business, support our
            website, communicate with you, or comply with law. These providers are not permitted to use your information
            for their own marketing.
          </p>
        </section>

        <section>
          <h2>Your choices</h2>
          <p>
            You may request updates or deletion of your information by contacting us. For SMS messages, reply STOP to opt
            out or HELP for help.
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
