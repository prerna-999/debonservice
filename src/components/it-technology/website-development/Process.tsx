import { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Reveal, { useReducedMotion } from "./Reveal";

/* ============================== DATA ============================== */
const steps = [
  { title: "Discover", text: "Understand your business, audience, competitors and existing site." },
  { title: "Design", text: "Wireframes and polished screens that match your brand." },
  { title: "Build", text: "Clean, tested code with tracking in place before launch." },
  { title: "Improve", text: "Review the data, fix friction and scale what works." },
];

const faqs = [
  { q: "How long does a website take?", a: "A focused business site often takes a few weeks. Stores and apps take longer, and we agree a timeline after discovery." },
  { q: "Will it work on phones?", a: "Yes. Every page is designed mobile-first and tested on common screen sizes." },
  { q: "Can I edit content myself?", a: "Yes. We can connect a simple editor so your team updates text and images without code." },
  { q: "Do you help after launch?", a: "Yes. Hosting, security updates, backups and improvements are available as ongoing care." },
];

/* ============================== PROCESS ============================== */
export default function Process() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(() => setI((v) => (v + 1) % steps.length), 3300);
    return () => clearTimeout(id);
  }, [i, reduced]);

  return (
    <section id="process" className="wd-section">
      <Container>
        <Reveal>
          <span className="wd-eyebrow">04 / How we work</span>
          <h2 className="wd-h2">From first sketch <em>to forward motion</em></h2>
        </Reveal>
        <div className="wd-proc" role="tablist">
          {steps.map((s, n) => (
            <button
              key={s.title}
              role="tab"
              aria-selected={i === n}
              className={`wd-pb ${reduced ? "wd-pbStill" : ""}`}
              onClick={() => setI(n)}
            >
              <b>{String(n + 1).padStart(2, "0")}</b>
              <span>{s.title}</span>
            </button>
          ))}
        </div>
        <div className="wd-pp" aria-live="polite">
          <h3>{steps[i].title}</h3>
          <p>{steps[i].text}</p>
        </div>
      </Container>
    </section>
  );
}

/* ============================== FAQ (used in index) ============================== */
export function Faq() {
  return (
    <section className="wd-section wd-soft">
      <Container>
        <Row>
          <Col lg={5}>
            <span className="wd-eyebrow">07 / Good questions</span>
            <h2 className="wd-h2">Let&apos;s clear <em>things up</em></h2>
            <Link href="/contact" className="wd-btn">Ask us something else</Link>
          </Col>
          <Col lg={7}>
            {faqs.map((f, n) => (
              <details key={f.q} className="wd-faq" open={n === 0}>
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
