import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Debon Services",
  description:
    "The terms that govern your use of the Debonaire Capital Assets website and services.",
  alternates: { canonical: "https://debonservices.com/terms" },
};

type Item = string | [string, string];
type Block = { p: string } | { h3: string } | { ul: Item[] };
type Section = { title: string; blocks: Block[] };

const sections: Section[] = [
  {
    title: "Agreement to these terms",
    blocks: [
      { p: "Welcome to Debonaire Capital Assets (“Debonaire,” “we,” “us,” or “our”). These Terms & Conditions govern your access to and use of our website, services, and related offerings." },
      { p: "By accessing our website, contacting us, requesting a quotation, purchasing a service, or entering into an agreement with us, you agree to these Terms & Conditions and our Privacy Policy. If you do not agree, please discontinue your use of our website and services." },
      { p: "Additional terms may apply to specific services, projects, subscriptions, workspace rentals, or business arrangements. Where applicable, these terms should be read together with the relevant proposal, service agreement, quotation, or rental agreement." },
    ],
  },
  {
    title: "Definitions",
    blocks: [
      { p: "For the purposes of these Terms & Conditions:" },
      {
        ul: [
          ["Debonaire, We, Us, Our", "Refers to Debonaire Capital Assets and its authorised representatives."],
          ["You, Your, User, Client", "Refers to any individual, business, organisation, or other entity accessing our website or using our services."],
          ["Website", "Refers to the official website of Debonaire Capital Assets and its associated pages."],
          ["Services", "Refers to the digital marketing, technology, AI, business operations, corporate support, branding, and workspace rental services offered by Debonaire."],
          ["Agreement", "Refers to these Terms & Conditions together with any applicable service agreement, project proposal, quotation, or other mutually agreed terms."],
        ],
      },
    ],
  },
  {
    title: "About Debonaire Capital Assets",
    blocks: [
      { p: "Debonaire Capital Assets provides business-focused services designed to support companies at different stages of their growth. Our services may include:" },
      {
        ul: [
          ["Digital Marketing", "Search engine optimisation (SEO), AI SEO, Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), social media management, performance marketing, content creation, conversion rate optimisation, online reputation management, and related services."],
          ["Web & Technology Development", "Website design and development, e-commerce solutions, software development, SaaS platforms, mobile applications, API integration, and related technology services."],
          ["AI Solutions", "Custom AI development, chatbots, AI agents, voice assistants, machine learning, generative AI, and AI integrations."],
          ["Business Operations & Corporate Support", "Corporate administrative support, bookkeeping, accounting support, business planning, address-related services, branding, and other agreed business services."],
          ["Flexible Workspaces", "Private offices, dedicated workspaces, flexible desks, meeting rooms, commercial spaces, and factory or industrial spaces, subject to availability and separate rental terms."],
        ],
      },
      { p: "The availability, scope, and delivery of each service will depend on the specific agreement between Debonaire and the client." },
    ],
  },
  {
    title: "Acceptance and eligibility",
    blocks: [
      { p: "By using our website or engaging our services, you confirm that:" },
      {
        ul: [
          "You are legally capable of entering into a binding agreement.",
          "The information you provide is accurate and complete to the best of your knowledge.",
          "You will use our website and services for lawful purposes.",
          "You have the authority to enter into an agreement on behalf of any business or organisation you represent.",
        ],
      },
      { p: "We reserve the right to decline a request, suspend access, or refuse a service where permitted by law and where reasonable grounds exist." },
    ],
  },
  {
    title: "Use of our website",
    blocks: [
      { p: "You agree to use our website responsibly and not to:" },
      {
        ul: [
          "Use the website for unlawful, fraudulent, or misleading activities.",
          "Attempt to gain unauthorised access to our systems, accounts, or data.",
          "Introduce malicious software, viruses, or harmful code.",
          "Copy, scrape, or collect information from our website without permission.",
          "Interfere with website functionality, security, or availability.",
          "Infringe the intellectual property, privacy, or legal rights of Debonaire or any third party.",
          "Upload or transmit unlawful, defamatory, abusive, or otherwise prohibited material.",
        ],
      },
      { p: "We may restrict or suspend access where necessary to protect our website, users, business, or legal interests." },
    ],
  },
  {
    title: "Service scope and project deliverables",
    blocks: [
      { p: "The scope of each project or service will be established through the relevant proposal, quotation, statement of work, or written agreement. Depending on the service, this may specify:" },
      {
        ul: [
          "Deliverables and project milestones.",
          "Timelines and estimated completion dates.",
          "Fees, payment schedules, and applicable taxes.",
          "Client responsibilities and required approvals.",
          "Revisions, support, maintenance, and additional work.",
          "Ownership and licensing arrangements.",
        ],
      },
      { p: "Any work outside the agreed scope may require additional fees and an updated timeline. Changes to project requirements should be agreed upon in writing." },
    ],
  },
  {
    title: "Fees and payments",
    blocks: [
      { p: "Fees for our services will be communicated through the applicable quotation, proposal, invoice, subscription arrangement, or service agreement. Unless otherwise agreed in writing:" },
      {
        ul: [
          "Payments must be made according to the agreed payment schedule.",
          "Applicable taxes and additional charges will be communicated where required.",
          "Work may begin after the agreed advance payment or other required payment conditions have been met.",
          "Delayed payments may affect project timelines or service delivery.",
          "Additional work, new features, or changes beyond the agreed scope may incur extra charges.",
        ],
      },
      { p: "Where a payment is overdue, we may suspend work or services after providing appropriate notice, subject to the applicable agreement and law. Any changes to recurring fees, subscriptions, or ongoing service charges will be communicated in accordance with the relevant agreement and applicable law." },
    ],
  },
  {
    title: "Digital marketing, SEO and AI SEO services",
    blocks: [
      { p: "Debonaire provides digital marketing services to help businesses improve their online presence, reach relevant audiences, generate leads, and support business growth. Our services may include SEO, AEO, GEO, paid advertising, content marketing, social media management, conversion optimisation, and online reputation management." },
      { p: "You acknowledge that:" },
      {
        ul: [
          "Search engine rankings, traffic, leads, conversions, advertising costs, and revenue depend on several factors beyond our control.",
          "Search engines and AI platforms may change their algorithms, ranking systems, features, and content policies without notice.",
          "We do not guarantee specific rankings, featured snippets, AI-generated citations, recommendations, traffic levels, leads, or sales unless an expressly agreed contractual commitment states otherwise.",
          "Paid advertising performance depends on factors such as competition, audience behaviour, budgets, platform policies, and campaign settings.",
          "Client-provided information, approvals, website access, and other required inputs may affect campaign performance and delivery timelines.",
        ],
      },
      { p: "We will carry out the agreed work professionally and communicate relevant progress, limitations, and recommendations where applicable." },
    ],
  },
  {
    title: "Website, software, app and AI development",
    blocks: [
      { p: "Our development services may include website design, e-commerce development, custom software, SaaS platforms, mobile applications, cloud-based solutions, API integrations, AI systems, testing, and maintenance. For these services:" },
      {
        ul: [
          "Project requirements, features, deliverables, and timelines will be agreed upon before work begins.",
          "You are responsible for providing accurate requirements, necessary content, approvals, and access to relevant systems.",
          "Significant changes to the approved scope may require additional fees or revised timelines.",
          "Software and AI solutions may depend on third-party platforms, APIs, hosting providers, or external services.",
          "We will identify relevant testing, maintenance, hosting, security, or support arrangements in the applicable agreement.",
        ],
      },
      { p: "Although we take reasonable care when developing and testing solutions, we cannot guarantee that all software will always be error-free, uninterrupted, or compatible with every system or future update. AI-generated outputs may contain inaccuracies and should be reviewed before being used for important business decisions or published as factual information." },
    ],
  },
  {
    title: "Business operations and corporate support services",
    blocks: [
      { p: "Debonaire may provide administrative, bookkeeping, accounting support, business planning, branding, address-related, and other corporate support services, depending on the agreed scope. Clients remain responsible for:" },
      {
        ul: [
          "Providing accurate and complete business and financial information.",
          "Reviewing documents, reports, and information prepared on their behalf.",
          "Providing necessary approvals and supporting records.",
          "Meeting their own statutory, regulatory, tax, and filing obligations unless a specific responsibility has been expressly accepted by Debonaire in writing.",
        ],
      },
      { p: "Unless explicitly agreed and legally authorised, our services do not replace independent legal, tax, investment, or other regulated professional advice. We do not guarantee regulatory approval, business registration, financial outcomes, or acceptance of any filing by a third party." },
      { p: "Any registered address, digital address, website, or corporate support arrangement is subject to its specific scope, eligibility requirements, and applicable laws." },
    ],
  },
  {
    title: "Flexible workspace and rental services",
    blocks: [
      { p: "Debonaire may offer or facilitate access to private offices, desks, meeting rooms, commercial premises, factory spaces, and other workspaces. Workspace availability, access, permitted use, rental duration, pricing, deposits, utilities, maintenance, and cancellation conditions will be governed by the relevant booking confirmation, rental agreement, or workspace-specific terms." },
      { p: "Users and tenants agree to:" },
      {
        ul: [
          "Use the premises only for permitted purposes.",
          "Follow applicable safety rules, building policies, and reasonable usage guidelines.",
          "Respect the rights of other occupants and maintain the premises in good condition.",
          "Pay rent, deposits, and other agreed charges on time.",
          "Avoid unlawful activities, unauthorised alterations, or activities that damage the premises.",
        ],
      },
      { p: "Access to a workspace is subject to availability and the applicable agreement. Any deposit deductions, cancellations, early termination charges, or refunds will be handled in accordance with the relevant rental terms and applicable law." },
    ],
  },
  {
    title: "Client responsibilities",
    blocks: [
      { p: "To help us deliver services effectively, clients agree to:" },
      {
        ul: [
          "Provide accurate information and necessary materials on time.",
          "Obtain any permissions, licences, or rights required for supplied content and assets.",
          "Review deliverables and provide feedback within agreed timelines.",
          "Maintain the security of accounts and credentials shared with authorised personnel.",
          "Ensure their requested activities comply with applicable laws and third-party policies.",
          "Make payments according to the agreed terms.",
        ],
      },
      { p: "Delays in receiving information, access, approvals, or payments may affect delivery dates and project outcomes." },
    ],
  },
  {
    title: "Intellectual property rights",
    blocks: [
      { p: "Unless otherwise agreed in writing, the website and its original content, branding, graphics, text, design elements, and other materials owned by Debonaire remain our intellectual property or that of our respective licensors. You may not reproduce, distribute, modify, or commercially use these materials without appropriate permission." },
      { p: "Ownership of project deliverables, including websites, software, designs, content, source code, and other custom work, will be governed by the applicable agreement. Where no separate arrangement exists, ownership and usage rights will be determined by the relevant contract and applicable law." },
      { p: "Third-party software, plugins, fonts, stock assets, APIs, and other licensed materials remain subject to their respective licence terms. You confirm that any materials you supply to us may lawfully be used for the agreed project." },
    ],
  },
  {
    title: "Confidentiality",
    blocks: [
      { p: "Both parties should take reasonable steps to protect confidential business information received during a project or service engagement. Confidential information should not be disclosed to unauthorised parties except where disclosure is required by law, necessary for the agreed service, or otherwise permitted under the applicable agreement." },
      { p: "This section does not apply to information that is publicly available through no breach of confidentiality, already lawfully known to the receiving party, or independently developed without using confidential information. Where required, the parties may enter into a separate non-disclosure agreement." },
    ],
  },
  {
    title: "Privacy and data protection",
    blocks: [
      { p: "We may collect and process information necessary to operate our website, respond to enquiries, provide services, process payments, communicate with clients, and improve our offerings. Depending on how you interact with us, this may include contact details, business information, project requirements, payment-related records, website usage data, and information provided through forms or communications." },
      { p: "We may use cookies and similar technologies where applicable. Information may also be processed by authorised service providers who help us operate our website or deliver services. We handle personal information in accordance with our Privacy Policy and applicable data protection laws. Please review our Privacy Policy for details on data collection, use, storage, sharing, and your rights." },
    ],
  },
  {
    title: "Third-party services and links",
    blocks: [
      { p: "Our website and services may use or link to third-party platforms, including search engines, advertising networks, hosting providers, payment services, software tools, AI platforms, and other external services. These services may have their own terms, privacy policies, fees, and availability conditions." },
      { p: "Unless expressly agreed otherwise, Debonaire does not control third-party services and is not responsible for changes, interruptions, decisions, or policies made by their providers. Any use of third-party services is subject to the applicable provider’s terms." },
    ],
  },
  {
    title: "Refunds, cancellations and termination of services",
    blocks: [
      { p: "Refunds, cancellations, and termination will be governed by the applicable service agreement, proposal, subscription terms, booking confirmation, or rental agreement." },
      {
        ul: [
          ["Project-based services", "The agreement may specify payment milestones, cancellation procedures, completed work charges, non-refundable costs, and any applicable refund conditions."],
          ["Recurring services", "The agreement may specify the required notice period, billing cycle, and termination procedure."],
          ["Workspace rentals", "Cancellation and deposit conditions will be governed by the relevant rental terms."],
        ],
      },
      { p: "Where a refund is due, it will be processed in accordance with the applicable agreement and law. Nothing in these terms excludes any consumer rights or other rights that cannot lawfully be excluded." },
      { p: "Either party may terminate a service engagement in accordance with the applicable agreement. We may suspend or terminate services where permitted by law for material breach, unlawful use, non-payment, or other valid contractual grounds. Any outstanding payments for services already provided or other amounts properly due under the agreement will remain payable." },
    ],
  },
  {
    title: "Service availability and interruptions",
    blocks: [
      { p: "We aim to keep our website and services available and functioning effectively. However, access may occasionally be interrupted due to maintenance, technical issues, security concerns, third-party outages, or circumstances beyond our reasonable control." },
      { p: "We will take reasonable steps to address relevant issues where appropriate but cannot guarantee uninterrupted availability. Where an interruption affects a contracted service, the applicable service agreement will govern our responsibilities and any remedies available to the client." },
    ],
  },
  {
    title: "Disclaimer of warranties",
    blocks: [
      { p: "To the extent permitted by law, our website and general informational content are provided on an “as available” basis. We make reasonable efforts to keep information accurate and up to date, but we do not guarantee that all website content is complete, current, or free from errors." },
      { p: "Unless expressly stated in a written agreement, information published on our website does not constitute a guarantee of specific business, marketing, financial, technical, or commercial results. Nothing in this section excludes any warranty or protection that cannot legally be excluded under applicable law." },
    ],
  },
  {
    title: "Limitation of liability",
    blocks: [
      { p: "To the maximum extent permitted by applicable law, Debonaire will not be liable for indirect or consequential losses, including loss of anticipated profits, business opportunities, or data, where such liability may lawfully be excluded." },
      { p: "Our liability for a particular service or project will be governed by the applicable written agreement and applicable law. Nothing in these terms excludes or limits liability where such exclusion or limitation is prohibited by law. Where a separate agreement contains a specific limitation of liability, that provision will apply to the extent it is legally enforceable." },
    ],
  },
  {
    title: "Indemnification",
    blocks: [
      { p: "To the extent permitted by law, you agree to indemnify Debonaire against third-party claims, losses, or reasonable expenses arising directly from your unlawful use of our website or services, your infringement of third-party rights, or your material breach of these terms." },
      { p: "This provision will not apply to the extent a claim results from Debonaire’s own breach, negligence, wilful misconduct, or other conduct for which liability cannot lawfully be excluded." },
    ],
  },
  {
    title: "Changes to these terms",
    blocks: [
      { p: "We may update these Terms & Conditions from time to time to reflect changes in our services, business practices, legal requirements, or website functionality. Updated terms will be published on our website with a revised “Last updated” date. Where required by law or an applicable agreement, we will provide notice of material changes." },
      { p: "Changes will not override specific contractual terms where doing so would be inconsistent with the applicable agreement or law. We encourage you to review this page periodically." },
    ],
  },
  {
    title: "Governing law and jurisdiction",
    blocks: [
      { p: "These Terms & Conditions will be governed by the laws of India, subject to applicable conflict-of-law rules and mandatory legal protections." },
      { p: "Any dispute will be handled by the courts of competent jurisdiction at [Insert Agreed City and State, India], subject to applicable law and any valid dispute-resolution agreement between the parties." },
    ],
  },
  {
    title: "General provisions",
    blocks: [
      {
        ul: [
          ["Severability", "If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law."],
          ["No Waiver", "Failure to enforce a provision does not constitute a waiver of the right to enforce it later."],
          ["Assignment", "Neither party may transfer its rights or obligations under a specific service agreement except as permitted by that agreement and applicable law."],
          ["No Partnership", "These terms do not create a partnership, joint venture, employment relationship, or agency between the parties unless expressly agreed in writing."],
          ["Force Majeure", "Neither party will be responsible for delays or failures caused by circumstances beyond its reasonable control, subject to applicable law and the relevant agreement."],
          ["Electronic Communications", "You agree that we may communicate with you electronically, including by email or other contact details you provide, for service-related matters and other communications permitted by law. Marketing communications will be handled in accordance with applicable consent and opt-out requirements."],
          ["Entire Agreement", "These terms, together with the applicable Privacy Policy and any relevant service-specific agreement, form the agreement governing your use of our website. For a particular project or rental, the specific written agreement will govern where its terms expressly differ from these general terms."],
        ],
      },
    ],
  },
];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const icon = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export default function TermsPage() {
  return (
    <div className="pp">
      <div className="wrap">
        <main className="doc">
          <header className="doc-head">
            <h1>Terms &amp; Conditions</h1>
            <p className="updated">Last updated: October 21, 2026</p>
          </header>

          <div className="short">
            <div>
              <svg {...icon}>
                <path d="M7 3h8l4 4v14H7z" />
                <path d="M15 3v4h4M10 13h6M10 17h6" />
              </svg>
              <strong>Scope agreed in writing</strong>
              <span>Every project has defined deliverables, timelines and fees.</span>
            </div>
            <div>
              <svg {...icon}>
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12.5l3 3 5-6" />
              </svg>
              <strong>Honest about results</strong>
              <span>We never promise rankings or sales unless it is stated in writing.</span>
            </div>
            <div>
              <svg {...icon}>
                <path d="M12 4v16M5 8h14M5 8l-2 6a3 3 0 006 0zM19 8l-2 6a3 3 0 006 0z" />
              </svg>
              <strong>Fair terms for both sides</strong>
              <span>Clear rules on payments, refunds and ending a service.</span>
            </div>
          </div>

          {sections.map((s) => (
            <section key={s.title} id={slug(s.title)}>
              <h2>{s.title}</h2>
              {s.blocks.map((b, i) => {
                if ("p" in b) return <p key={i}>{b.p}</p>;
                if ("h3" in b) return <h3 key={i}>{b.h3}</h3>;
                return (
                  <ul key={i}>
                    {b.ul.map((item, j) =>
                      typeof item === "string" ? (
                        <li key={j}>{item}</li>
                      ) : (
                        <li key={j}>
                          <strong>{item[0]}:</strong> {item[1]}
                        </li>
                      )
                    )}
                  </ul>
                );
              })}
            </section>
          ))}

          <section id="contact-us">
            <h2>Contact us</h2>
            <p>If you have questions about these Terms &amp; Conditions or our services, please contact us:</p>
            <div className="contact">
              <h3>Debonaire Capital Assets</h3>
              <p>111 North Bridge Road, #21-01, Peninsula Plaza, Singapore 179098</p>
              <p>
                Phone: <a href="tel:+6592237396">+65 9223 7396</a>
              </p>
              <p>
                Website: <a href="https://debonservices.com">debonservices.com</a>
              </p>
              <p className="mail">
                Email: <a href="mailto:support@debonservices.com">support@debonservices.com</a>
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
