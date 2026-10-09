import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const services = [
  { k: "01 / COMPLIANCE", t: "Registration & Compliance", d: "Incorporation, licences and statutory filings tracked on one calendar." },
  { k: "02 / ACCOUNTS", t: "Accounting & Bookkeeping", d: "Clean books, GST and tax support, and monthly reports you can read." },
  { k: "03 / PEOPLE", t: "HR & Payroll Support", d: "Hiring help, onboarding, payroll processing and employee records." },
  { k: "04 / ADMIN", t: "Admin & Virtual Assistance", d: "Scheduling, data entry, email and everyday office tasks done for you." },
  { k: "05 / LEGAL", t: "Legal & Documentation", d: "Contracts, agreements and organized, easy-to-find records." },
  { k: "06 / SUPPORT", t: "Customer Support Desk", d: "Helpdesk, email and chat support that speaks in your brand's voice." },
];

export default function Services() {
  return (
    <section className="corporate-section corporate-section-paper" id="corporate-services-section">
      <Container>
        <div className="corporate-section-label">02 / What we do</div>
        <h2 className="corporate-section-title">
          One connected <em>support system</em>
        </h2>
        <p className="corporate-lead-text corporate-margin-bottom">
          Six focused services that keep your organization compliant and ready to scale.
        </p>
        <Row>
          {services.map((s) => (
            <Col md={6} key={s.k}>
              <Link href="/contact" className="corporate-service-card">
                <div className="corporate-service-card-label">{s.k}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <div className="corporate-service-card-link">
                  Discuss this service <small>Hover to explore</small>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
