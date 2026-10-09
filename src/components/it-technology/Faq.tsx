import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "./Heading";
import Reveal from "./Reveal";

const faqs = [
  { q: "How long does a project take?", a: "It depends on scope. After discovery we share a plan with milestones." },
  { q: "Can you improve a system we already have?", a: "Yes. We review it first, then recommend whether to improve, extend or rebuild." },
  { q: "Will it work well on mobile?", a: "Yes. Everything is designed and tested for phones, tablets and desktops." },
  { q: "Do you support the product after launch?", a: "Yes. We monitor, fix and improve it with a rhythm agreed with your team." },
];

export default function Faq() {
  return (
    <section className="it-section it-faq">
      <Container>
        <Row className="g-4 it-two-column">
          <Col xs={12} lg={6}>
            <div className="it-sticky">
              <Heading label="06 / Good questions" lines={["Before you", <em key="e">start a project</em>]} />
              <p className="it-text-muted">Straight answers to what clients usually ask.</p>
              <Link href="/contact" className="it-btn it-btn--primary it-btn--spaced">Ask us something else</Link>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
                <details open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
