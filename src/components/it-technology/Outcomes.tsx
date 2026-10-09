import { Container, Row, Col } from "react-bootstrap";
import Heading from "./Heading";
import Reveal from "./Reveal";

const svg = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const outcomes = [
  { title: "Smoother operations", text: "Replace manual work with software that fits your team.", icon: <svg {...svg}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg> },
  { title: "Better experience", text: "Fast, clear interfaces that make it easy to choose you.", icon: <svg {...svg}><circle cx="12" cy="12" r="9" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg> },
  { title: "Connected systems", text: "One flow of data across website, CRM and payments.", icon: <svg {...svg}><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></svg> },
  { title: "Room to grow", text: "Clean foundations that scale without a rebuild.", icon: <svg {...svg}><path d="M3 17l6-6 4 4 8-8M15 7h6v6" /></svg> },
];

export default function Outcomes() {
  return (
    <section className="it-section it-dark">
      <Container>
        <Row className="g-4 it-two-column">
          <Col xs={12} lg={6}>
            <div className="it-sticky">
              <Heading label="05 / What you gain" lines={["Technology that", <em key="e">earns its place</em>]} />
              <p className="it-text-muted">
                We judge every project by what changes for your business, not by the number of
                features shipped.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <Row className="g-3">
              {outcomes.map((o, i) => (
                <Col xs={12} sm={6} lg={12} xl={6} key={o.title}>
                  <Reveal variant="right" delay={i * 90} className="h-100">
                    <div className="it-outcome-card">
                      {o.icon}
                      <h3>{o.title}</h3>
                      <p>{o.text}</p>
                    </div>
                  </Reveal>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
