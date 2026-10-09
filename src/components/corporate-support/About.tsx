import { Container, Row, Col } from "react-bootstrap";

const documents = [
  { className: "corporate-about-document-one", title: "Invoice", status: "Paid" },
  { className: "corporate-about-document-two", title: "Payroll run", status: "Processed" },
  { className: "corporate-about-document-three", title: "GST return", status: "Filed" },
];

const takeover = [
  "Filings and licences, on time",
  "Payroll and invoices, processed",
  "Contracts and paperwork, organized",
];

export default function About() {
  return (
    <section className="corporate-section">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="corporate-about-desk">
              {documents.map((doc) => (
                <div key={doc.title} className={`corporate-about-document ${doc.className}`}>
                  <div className="corporate-about-document-title">
                    {doc.title} <span className="corporate-about-status-pill">{doc.status}</span>
                  </div>
                  <div className="corporate-about-document-line" />
                  <div className="corporate-about-document-line corporate-about-document-line-short" />
                </div>
              ))}
              <div className="corporate-about-deadline-chip">Every deadline tracked</div>
            </div>
          </Col>
          <Col lg={6} className="corporate-about-content">
            <div className="corporate-section-label">01 / About Debon Services</div>
            <h2 className="corporate-section-title">
              Back offices are busy <em>Good support</em> keeps them calm
            </h2>
            <p>
              Filings, payroll, invoices and paperwork never stop. When they pile up, leaders lose time they
              should spend growing the business.
            </p>
            <ul className="corporate-about-takeover-list">
              {takeover.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#corporate-process-section" className="corporate-button corporate-button-primary">
              How we work
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
