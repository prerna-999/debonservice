import { Container, Row, Col } from "react-bootstrap";

const faqs = [
  { q: "Can I choose only one service?", a: "Yes. Start with one, such as accounting or HR, and add others any time." },
  { q: "Do you work with startups and established firms?", a: "Yes. We adapt the scope to your size, industry and stage." },
  { q: "How do you keep my data secure?", a: "We agree access rules and confidentiality terms up front, and share documents only through channels you approve." },
  { q: "How do we get started?", a: "Use the brief above or the contact form. We'll suggest a clear scope." },
];

export default function Faq() {
  return (
    <section className="corporate-section">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="corporate-section-label">05 / Good questions</div>
            <h2 className="corporate-section-title">
              Let&apos;s clear <em>things up</em>
            </h2>
          </Col>
          <Col lg={7}>
            {faqs.map((f, i) => (
              <details className="corporate-faq-item" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
