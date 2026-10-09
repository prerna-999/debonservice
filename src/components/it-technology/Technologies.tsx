import { Container, Row, Col } from "react-bootstrap";
import Heading from "./Heading";
import Reveal from "./Reveal";

const stacks = [
  { title: "Web & frontend", items: ["React", "Next.js", "TypeScript", "Bootstrap"] },
  { title: "Backend & APIs", items: ["Node.js", "Python", "PHP", "REST APIs"] },
  { title: "Mobile", items: ["React Native", "Flutter", "Android", "iOS"] },
  { title: "Data & cloud", items: ["PostgreSQL", "MongoDB", "AWS", "Power BI"] },
];

export default function Technologies() {
  return (
    <section className="it-section">
      <Container>
        <div className="it-toolkit">
          <Row className="g-4 align-items-end it-section-head">
            <Col xs={12} md={6}>
              <Heading label="04 / Our toolkit" lines={["Technologies", <em key="e">we build with</em>]} />
            </Col>
            <Col xs={12} md={6}>
              <p className="it-text-muted">
                Proven tools chosen for your goals, team and budget, and easy to maintain.
              </p>
            </Col>
          </Row>

          <Row className="g-3">
            {stacks.map((s, i) => (
              <Col xs={12} md={6} key={s.title}>
                <Reveal variant="scale" delay={(i % 2) * 100} className="h-100">
                  <div className="it-toolkit-card">
                    <h3>{s.title}</h3>
                    <ul className="it-toolkit-chips">
                      {s.items.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  </div>
                </Reveal>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
