


import { Container, Row, Col } from "react-bootstrap";

const steps = [
  { t: "Tell Us What You Need", d: "Let us know what kind of space you're looking for." },
  { t: "Explore Your Options", d: "We'll help you find a space that suits your needs and budget." },
  { t: "Choose Your Space", d: "Pick the space that works best for you." },
  { t: "Get Started", d: "Settle in and get on with your work." },
];

export default function Process() {
  return (
    <section className="corporate-section" id="corporate-process-section">
      <Container>
        <h2 className="corporate-section-title">From Space Hunting to Settling In</h2>
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