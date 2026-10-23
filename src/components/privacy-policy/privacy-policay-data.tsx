import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Debon Services",
  description:
    "How Debonaire Capital Asset (Debon Services) collects, uses and protects your personal information.",
  alternates: { canonical: "https://debonservices.com/privacy-policy" },
};

const icon = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export default function PrivacyPolicyData() {
  return (
    <div className="pp">
      <div className="wrap">
        <main className="doc">
          <header className="doc-head">
            <h1>Privacy Policy</h1>
            <p className="updated">Last updated: October 19, 2026</p>
          </header>

          <div className="short">
            <div>
              <svg {...icon}>
                <circle cx="12" cy="12" r="9" />
                <path d="M5.6 5.6l12.8 12.8" />
              </svg>
              <strong>We never sell your data</strong>
              <span>Your details are used to help you, not traded to anyone.</span>
            </div>
            <div>
              <svg {...icon}>
                <rect x="4" y="11" width="16" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 018 0v3" />
              </svg>
              <strong>Client data stays confidential</strong>
              <span>Files and accounts you share are used only for your project.</span>
            </div>
            <div>
              <svg {...icon}>
                <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
                <circle cx="16" cy="7" r="2" />
                <circle cx="8" cy="17" r="2" />
              </svg>
              <strong>You stay in control</strong>
              <span>Ask us to access, correct or delete your data at any time.</span>
            </div>
          </div>

          <section id="introduction">
            <h2>Introduction</h2>
            <p>
              This website, <a href="https://debonservices.com">debonservices.com</a> (the
              “Website”), is operated by <strong>Debonaire Capital Asset</strong>, doing business
              as <strong>Debon Services</strong> (“we”, “us”, “our”). We respect your privacy and
              are committed to protecting your personal information.
            </p>
            <p>
              We process personal data in line with the Information Technology Act, 2000, the
              Information Technology (Reasonable Security Practices and Procedures and Sensitive
              Personal Data or Information) Rules, 2011, the Digital Personal Data Protection Act,
              2023, and other applicable Indian laws. For our Singapore operations, we also follow
              the Personal Data Protection Act 2012 (PDPA) of Singapore.
            </p>
            <div className="note">
              <p>
                By using the Website or our services, you agree to this Privacy Policy. If you do
                not agree, please do not use the Website.
              </p>
            </div>
          </section>

          <section id="collect">
            <h2>Information we collect</h2>
            <h3>Information you give us</h3>
            <p>
              When you fill in our enquiry form, book a consultation, request a free audit, or
              call, email or message us, we may collect:
            </p>
            <ul>
              <li>Your name, work email address and phone number</li>
              <li>Your company name, designation and business details</li>
              <li>The service you are interested in and the message or requirements you share</li>
              <li>
                Information needed to deliver services such as bookkeeping, accounting, corporate
                secretarial support, registered address or workspace rental (for example, company
                registration details, KYC and billing information)
              </li>
            </ul>
            <h3>Information collected automatically</h3>
            <p>
              When you browse the Website, we may collect your IP address, browser type and
              version, device and operating system, language, pages visited, time spent on pages,
              referring website, clicks and scrolling behaviour.
            </p>
            <h3>Information from other sources</h3>
            <p>
              We may receive limited information from public sources, business directories, social
              media platforms, advertising partners or referral partners.
            </p>
            <p>
              We do not knowingly collect sensitive data such as passwords or payment card details
              through the enquiry form. If we need such information to deliver a service, we will
              request it separately and use it only for that purpose.
            </p>
          </section>

          <section id="use">
            <h2>How we use your information</h2>
            <ul>
              <li>Respond to your enquiries and schedule consultations</li>
              <li>Provide, manage and deliver the services you request</li>
              <li>Prepare proposals, audit reports, invoices and contracts</li>
              <li>Send service updates, confirmations, security and administrative messages</li>
              <li>
                Share relevant offers, insights and news about our services (you can opt out at any
                time)
              </li>
              <li>Improve the Website, our services and your experience</li>
              <li>Measure and improve our own advertising and marketing campaigns</li>
              <li>Prevent fraud, misuse and security incidents</li>
              <li>Comply with legal obligations and enforce our agreements</li>
            </ul>
          </section>

          <section id="cookies">
            <h2>Cookies and tracking technologies</h2>
            <p>
              We use cookies and similar technologies, such as analytics and advertising pixels, to
              keep the Website working, understand which pages are useful, remember your
              preferences and measure the performance of our marketing.
            </p>
            <p>
              Third parties such as analytics providers, search engines, social media platforms and
              advertising networks may also place cookies when you interact with the Website. You
              can block or delete cookies in your browser settings. Disabling cookies may affect
              some features.
            </p>
          </section>

          <section id="sharing">
            <h2>Sharing of information</h2>
            <p>We do not sell your personal information. We share it only in these situations:</p>
            <ul>
              <li>
                <strong>Service providers:</strong> trusted vendors that help us run our business,
                such as hosting, email and communication tools, CRM, analytics, payment, accounting
                and project management. They may use your data only to perform services for us.
              </li>
              <li>
                <strong>Delivery of your services:</strong> where needed to complete work you
                requested, for example with advertising platforms, domain and hosting providers, or
                regulators for corporate secretarial work.
              </li>
              <li>
                <strong>Legal and safety reasons:</strong> to comply with the law, court orders or
                government requests, to protect our rights, property or safety, or to prevent
                fraud.
              </li>
              <li>
                <strong>Business transfers:</strong> in a merger, acquisition, restructuring or
                sale of assets, where your information may pass to the new entity.
              </li>
              <li>
                <strong>With your consent:</strong> in any other case, only after we ask for and
                receive your permission.
              </li>
            </ul>
          </section>

          <section id="client-data">
            <h2>Client data and confidentiality</h2>
            <p>
              When we handle your business data, such as website access, ad account access,
              financial records, customer lists or company documents, we use it only to deliver the
              agreed services. Access is limited to team members who need it, and the data is
              treated as confidential. Specific terms on confidentiality and data handling are set
              out in your service agreement.
            </p>
          </section>

          <section id="security">
            <h2>Data security</h2>
            <p>
              We use reasonable technical, administrative and physical safeguards to protect your
              information from unauthorised access, loss, misuse or alteration. These include
              encrypted connections (HTTPS), access controls and staff awareness of
              confidentiality.
            </p>
            <p>
              No method of transmission or storage over the internet is completely secure, so we
              cannot guarantee absolute security. Please protect your own passwords and devices.
            </p>
          </section>

          <section id="retention">
            <h2>Data retention</h2>
            <p>
              We keep personal information only as long as needed for the purposes in this policy,
              to provide our services, or as required by law, for example for accounting, tax or
              compliance records. After that, we delete or anonymise it.
            </p>
          </section>

          <section id="third-party">
            <h2>Third-party links and plugins</h2>
            <p>
              The Website may link to third-party sites, including our social media pages. We are
              not responsible for their content or privacy practices, so please read their privacy
              policies before sharing information with them.
            </p>
          </section>

          <section id="rights">
            <h2>Your rights and choices</h2>
            <p>Subject to applicable law, you may:</p>
            <ul>
              <li>Request access to the personal data we hold about you</li>
              <li>Ask us to correct inaccurate or incomplete data</li>
              <li>Ask us to delete your data, where we are not required to keep it</li>
              <li>Withdraw your consent to processing or marketing at any time</li>
              <li>
                Opt out of promotional emails or WhatsApp messages using the unsubscribe option or
                by contacting us
              </li>
            </ul>
            <p>
              To exercise these rights, email us at the address below. We may need to verify your
              identity before acting on your request.
            </p>
          </section>

          <section id="children">
            <h2>Children’s privacy</h2>
            <p>
              Our Website and services are meant for businesses and adults. We do not knowingly
              collect personal information from anyone under 18. If you believe a child has given
              us personal data, contact us and we will delete it.
            </p>
          </section>

          <section id="changes">
            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The latest version will always be on
              this page with a revised “Last updated” date. Please review it periodically.
            </p>
          </section>

          <section id="contact">
            <h2>Contact and grievances</h2>
            <p>
              For questions, concerns or complaints about this policy or how your data is handled,
              contact us. We will respond within a reasonable time.
            </p>
            <div className="contact">
              <h3>Debonaire Capital Asset (Debon Services)</h3>
              <p>111 North Bridge Road, #21-01, Peninsula Plaza, Singapore 179098</p>
              <p>
                Phone: <a href="tel:+6592237396">+65 9223 7396</a>
              </p>
              <p className="mail">
                Email: <a href="mailto:contact@debonservices.com">contact@debonservices.com</a>
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}