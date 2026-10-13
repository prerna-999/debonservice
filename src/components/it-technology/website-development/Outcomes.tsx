import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal, { useReducedMotion } from "./Reveal";

/* ============================== DATA ============================== */
const outcomes = ["Faster load times", "More qualified enquiries", "A site your team can update"];

// Example project directions, not verified client results.
const cases = [
  { tab: "Business site", k: "CASE 01 / BUSINESS SITE", title: "Turn a brochure into a lead source", text: "A clear structure, fast pages and a simple enquiry path help visitors act.", metrics: [["2x", "Faster load"], ["Clear", "Enquiry path"]], img: "/assets/img/all-img/home/home-about-1.avif" },
  { tab: "Online store", k: "CASE 02 / ONLINE STORE", title: "Make buying feel effortless", text: "Better product pages and a shorter checkout remove friction at the moment of decision.", metrics: [["3 steps", "To checkout"], ["Mobile", "First layout"]], img: "/assets/img/all-img/home/home-about-2.avif" },
  { tab: "Web app", k: "CASE 03 / WEB APP", title: "Replace spreadsheets with a focused tool", text: "A first version built around the workflow your team repeats every day.", metrics: [["1", "Shared dashboard"], ["Less", "Manual work"]], img: "/assets/img/all-img/home/home-about-1.avif" },
];

const testimonials = [
  { q: "The team brought clarity to our marketing and made every recommendation feel connected to a real business goal.", initials: "AM", name: "Aarav Mehta", role: "Founder · D2C Brand" },
  { q: "What stood out was the balance of creative thinking and practical execution. We always knew what the next step was.", initials: "NS", name: "Neha Sharma", role: "Marketing Lead · Growth Company" },
  { q: "Reporting became much easier to understand, and the work started to feel like a genuine extension of our own team.", initials: "RK", name: "Rohan Kapoor", role: "Director · Professional Services" },
];

/* ============================== OUTCOMES ============================== */
export default function Outcomes() {
  return (
    <section className="wd-section wd-soft">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4">
            <Reveal>
              <span className="wd-eyebrow">05 / What you get</span>
              <h2 className="wd-h2">Built for <em>real outcomes</em></h2>
              {outcomes.map((o, n) => (
                <div key={o} className="wd-listRow">
                  <div className="wd-badge">{String(n + 1).padStart(2, "0")}</div>
                  <span>{o}</span>
                  <FiArrowUpRight className="wd-arr" />
                </div>
              ))}
            </Reveal>
          </Col>
          <Col lg={6} className="mb-4">
            <div className="wd-photo wd-tallPhoto">
              <Image src="/assets/img/all-img/home/home-about-2.avif" alt="Colleagues reviewing a website" fill sizes="(max-width:992px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

/* ======================= CASES + TESTIMONIALS (used in index) ======================= */
export function Cases() {
  const [i, setI] = useState(0);
  const c = cases[i];

  return (
    <section id="case" className="wd-section wd-soft">
      <Container>
        <span className="wd-eyebrow">03 / The kind of work we do</span>
        <h2 className="wd-h2">Details that make <em>the work real</em></h2>
        <div className="wd-tabs" role="tablist">
          {cases.map((x, n) => (
            <button key={x.tab} role="tab" aria-selected={i === n} onClick={() => setI(n)}>{x.tab}</button>
          ))}
        </div>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4">
            <div className="wd-photo wd-tallPhoto">
              <Image key={c.img + i} src={c.img} alt={c.title} fill sizes="(max-width:992px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </Col>
          <Col lg={6} aria-live="polite">
            <span className="wd-eyebrow">{c.k}</span>
            <h3 className="wd-h3">{c.title}</h3>
            <p>{c.text}</p>
            <Row>
              {c.metrics.map((m) => (
                <Col key={m[1]} md={6} className="mb-3">
                  <div className="wd-met"><b>{m[0]}</b>{m[1]}</div>
                </Col>
              ))}
            </Row>
            <Link href="/contact" className="wd-btn wd-btnFill">Discuss a similar brief <FiArrowUpRight /></Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export function Testimonials() {
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(() => setN((v) => (v + 1) % testimonials.length), 5000);
    return () => clearTimeout(id);
  }, [n, reduced]);

  const t = testimonials[n];
  return (
    <section className="wd-section">
      <Container className="text-center">
        <span className="wd-eyebrow">06 / Client feedback</span>
        <h2 className="wd-h2">Good work leaves <em>a good impression</em></h2>
        <div className="wd-quote" aria-live="polite">
          <p>“{t.q}”</p>
          <div className="wd-who">
            <div className="wd-badge">{t.initials}</div>
            <div><b>{t.name}</b><br /><small>{t.role}</small></div>
          </div>
        </div>
        <div className="wd-dots">
          {testimonials.map((x, k) => (
            <button key={x.name} aria-label={`Testimonial ${k + 1}`} aria-current={n === k} onClick={() => setN(k)} />
          ))}
        </div>
      </Container>
    </section>
  );
}
