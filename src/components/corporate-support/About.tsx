import { Container, Row, Col } from "react-bootstrap";

const documents = [
  { className: "corporate-about-document-one", title: "Invoice", status: "Paid" },
  { className: "corporate-about-document-two", title: "Payroll run", status: "Processed" },
  { className: "corporate-about-document-three", title: "GST return", status: "Filed" },
];

const takeover = [
  "Rent on Your Terms",
  "Space for Every Business",
  "Room to Grow",
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
            <div className="corporate-section-label">About Debonaire Flexible Workspaces</div>
            <h2 className="corporate-section-title">
             Your Business <em>Needs Space, </em> We Have It!
            </h2>
            <p>
              Every business needs the right space to get things done. Whether you need a desk for a day, a private office, a meeting room or a larger commercial space, we help you find an option that suits your needs. Choose a space that works for you, without committing to more than you need.
            </p>
            <ul className="corporate-about-takeover-list">
              {takeover.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
