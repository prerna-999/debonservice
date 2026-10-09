import { Container, Row, Col } from "react-bootstrap";
import Heading from "./Heading";
import Reveal from "./Reveal";

const steps = [
  { title: "Discover", text: "We map your processes, users and goals." },
  { title: "Design", text: "Flows and architecture agreed before any code." },
  { title: "Build", text: "Short cycles with demos, testing and security checks." },
  { title: "Launch", text: "We release, monitor and keep improving." },
];

export default function Process() {
  return (
    <section className="it-section it-section--paper">
      <Container>
        <div className="it-section-head it-text-center">
          <Heading label="03 / How we work" lines={["From requirement", <em key="e">to release</em>]} />
        </div>

        <Row className="g-4 it-road">
          <i className="it-road__fill" />
          {steps.map((s, i) => (
            <Col xs={12} sm={6} lg={3} key={s.title}>
              <Reveal delay={i * 100}>
                <div className="it-roadmap-step">
                  <b>{i + 1}</b>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
