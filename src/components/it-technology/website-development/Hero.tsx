import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FiArrowUpRight, FiZap, FiShield } from "react-icons/fi";
import { useReducedMotion, Marquee, CountUp } from "./Reveal";

/* ============================== DATA ============================== */
const rotatingWords = ["convert", "sell", "rank", "impress"];

const heroChips = [
  { icon: <FiZap />, text: "98 PageSpeed", className: "wd-floatA" },
  { icon: <FiShield />, text: "SSL secured", className: "wd-floatB" },
];

const stripItems = ["DESIGN", "DEVELOPMENT", "RESPONSIVE", "SEO-READY", "E-COMMERCE", "SECURITY"];

// Example figures. Replace with your verified numbers.
const stats = [
  { n: 150, suffix: "+", label: "Websites launched" },
  { n: 98, suffix: "", label: "Average PageSpeed" },
  { n: 100, suffix: "%", label: "Mobile responsive" },
  { n: 24, suffix: "/7", label: "Monitoring & care" },
];

/* ============================== HERO ============================== */
export default function Hero() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setOut(true);
      setTimeout(() => { setI((v) => (v + 1) % rotatingWords.length); setOut(false); }, 300);
    }, 2200);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <section className="wd-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <span className="wd-eyebrow">IT &amp; Technology / 01</span>
            <h1 className="wd-h1">
              Websites that <span className={`wd-rot ${out ? "wd-rotOut" : ""}`}>{rotatingWords[i]}</span>
              <br />from the first click
            </h1>
            <p className="wd-lead">
              Responsive, secure and fast websites that give your brand a strong first impression and your visitors a clear next step.
            </p>
            <div className="wd-actions">
              <Link href="#case" className="wd-btn wd-btnFill">See what we build <FiArrowUpRight /></Link>
              <Link href="#process" className="wd-btn">How we work</Link>
            </div>
          </Col>
          <Col lg={5}>
            <div className="wd-photo wd-heroPhoto">
              <Image src="/assets/img/all-img/home/banner.avif" alt="Team designing a website" fill priority sizes="(max-width:992px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              <div className="wd-method">
                <small>THE DEBON METHOD / 01</small>
                <b>Design into action</b>
              </div>
              {heroChips.map((c) => (
                <div key={c.text} className={`wd-float ${c.className}`}>{c.icon} {c.text}</div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

/* ======================= STRIP + STATS (used in index) ======================= */
export function HeroStrip() {
  return <Marquee items={stripItems} />;
}

export function Stats() {
  return (
    <section className="wd-section">
      <Container>
        <Row className="wd-stats">
          {stats.map((s) => (
            <Col key={s.label} xs={6} lg={3} className="mb-3 mb-lg-0">
              <div className="wd-stat">
                <CountUp n={s.n} suffix={s.suffix} />
                <span>{s.label}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
