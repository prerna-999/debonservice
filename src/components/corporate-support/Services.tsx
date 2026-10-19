// import Link from "next/link";
// import { Container, Row, Col } from "react-bootstrap";

// const services = [
//   { k: "01 / COMPLIANCE", t: "Registration & Compliance", d: "Incorporation, licences and statutory filings tracked on one calendar." },
//   { k: "02 / ACCOUNTS", t: "Accounting & Bookkeeping", d: "Clean books, GST and tax support, and monthly reports you can read." },
//   { k: "03 / PEOPLE", t: "HR & Payroll Support", d: "Hiring help, onboarding, payroll processing and employee records." },
//   { k: "04 / ADMIN", t: "Admin & Virtual Assistance", d: "Scheduling, data entry, email and everyday office tasks done for you." },
//   { k: "05 / LEGAL", t: "Legal & Documentation", d: "Contracts, agreements and organized, easy-to-find records." },
//   { k: "06 / SUPPORT", t: "Customer Support Desk", d: "Helpdesk, email and chat support that speaks in your brand's voice." },
// ];

// export default function Services() {
//   return (
//     <section className="corporate-section corporate-section-paper" id="corporate-services-section">
//       <Container>
//         <div className="corporate-section-label">02 / What we do</div>
//         <h2 className="corporate-section-title">
//           One connected <em>support system</em>
//         </h2>
//         <p className="corporate-lead-text corporate-margin-bottom">
//           Six focused services that keep your organization compliant and ready to scale.
//         </p>
//         <Row>
//           {services.map((s) => (
//             <Col md={6} key={s.k}>
//               <Link href="/contact" className="corporate-service-card">
//                 <div className="corporate-service-card-label">{s.k}</div>
//                 <h3>{s.t}</h3>
//                 <p>{s.d}</p>
//                 <div className="corporate-service-card-link">
//                   Discuss this service <small>Hover to explore</small>
//                 </div>
//               </Link>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// }


import type { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";

const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

const services = [
  {
    t: "Private Offices & Dedicated Workspaces",
    d: "Work comfortably in fully equipped private offices and dedicated workspaces designed for privacy and productivity. Choose flexible rental options that suit your business needs.",
    i: icon(<><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4" /></>),
  },
  {
    t: "Flexible Desks & Workstations",
    d: "Get comfortable, ready-to-use desks with flexible rental options, ideal for freelancers, startups, remote teams and professionals looking for a productive workspace without long-term commitments.",
    i: icon(<><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>),
  },
  {
    t: "Meeting & Conference Spaces",
    d: "Host meetings, presentations, training sessions and conferences in professional, well-equipped spaces. Book by the hour, day or for longer periods, depending on your requirements.",
    i: icon(<><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="9" r="2.5" /><path d="M17 14c2.5 0 4 2 4 5" /></>),
  },
  {
    t: "Shops & Commercial Spaces",
    d: "Find well-located commercial spaces suitable for retail stores, offices, showrooms and growing businesses. Choose flexible rental options based on your space requirements and business needs.",
    i: icon(<><path d="M4 9l1.5-5h13L20 9" /><path d="M4 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" /><path d="M5 12v8h14v-8M10 20v-4h4v4" /></>),
  },
  {
    t: "Factory & Industrial Spaces",
    d: "Find ready-to-use industrial spaces suitable for manufacturing, production, assembly and other business operations. Explore flexible rental options that fit your space requirements and operational needs.",
    i: icon(<><path d="M3 21V10l6 4V10l6 4V6h4v15z" /><path d="M8 21v-3M12 21v-3M16 21v-3" /></>),
  },
];

export default function Services() {
  return (
    <section className="corporate-section corporate-section-paper" id="corporate-services-section">
      <Container>
        <h2 className="corporate-section-title">
           Need Space?<em>We Make It Happen.</em>
        </h2>
        <p className="corporate-lead-text corporate-margin-bottom">
          From a desk for the day to a factory for your business, we offer spaces for different needs, budgets and ways of working. Choose a space that fits your work today and gives you room for what’s next.
        </p>
        <Row>
          {services.map((s, i) => (
            <Col md={6} lg={i < 3 ? 4 : 6} key={s.t}>
              <div className="corporate-service-card">
                <span className="corporate-service-card-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="corporate-service-card-icon">{s.i}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="corporate-service-card-bar" aria-hidden="true" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}