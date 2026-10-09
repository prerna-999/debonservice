import { Container, Row, Col } from "react-bootstrap";

const steps = [
  { t: "Discover", d: "Understand your business, structure and current back-office setup." },
  { t: "Plan", d: "Agree scope, timelines and one point of contact." },
  { t: "Set up", d: "Move tasks over with checklists, access and tracking in place." },
  { t: "Improve", d: "Review, report and refine so the next month runs smoother." },
];

export default function Process() {
  return (
    <section className="corporate-section" id="corporate-process-section">
      <Container>
        <div className="corporate-section-label">03 / How we work</div>
        <h2 className="corporate-section-title">
          From first question <em>to steady support</em>
        </h2>
        <Row className="corporate-process-list">
          {steps.map((s, i) => (
            <Col md={6} lg={3} key={s.t}>
              <div className="corporate-process-card">
                <div className="corporate-process-number">{String(i + 1).padStart(2, "0")}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
