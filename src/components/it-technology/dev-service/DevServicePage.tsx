"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import type { IconType } from "react-icons";
import { FiArrowRight, FiArrowUpRight, FiCheck, FiMessageSquare, FiPlus } from "react-icons/fi";

type Seg = [cls: string, text: string]; // cls: k keyword, s string, c comment, f function, ok success, "" plain
export type Line = Seg[];
export type Service = { icon: IconType; label: string; title: string; text: string; chips: string[] };
export type Step = { title: string; text: string; status: string; chips: string[] };
export type Benefit = { icon: IconType; title: string; text: string };

export type DevPageData = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  file: string;
  code: Line[];
  stack: string[];
  services: Service[];
  steps: Step[];
  whyTitle: string;
  whyText: string;
  benefits: Benefit[];
  faqs: { q: string; a: string }[];
  bigWord: string;
  ctaTitle: string;
  ctaText: string;
};

const pad = (i: number) => String(i + 1).padStart(2, "0");

/* ============================== TYPEWRITER ============================== */
const lineLen = (l: Line) => l.reduce((a, s) => a + s[1].length, 0);

function sliceLine(l: Line, n: number): Line {
  const out: Line = [];
  let left = n;
  for (const [c, t] of l) {
    if (left <= 0) break;
    out.push([c, t.slice(0, left)]);
    left -= t.length;
  }
  return out;
}

function useTypewriter(lines: Line[]) {
  const [pos, setPos] = useState({ li: 0, ci: 0 });
  useEffect(() => {
    const { li, ci } = pos;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (li !== lines.length) setPos({ li: lines.length, ci: 0 });
      return;
    }
    let t: number;
    if (li >= lines.length) t = window.setTimeout(() => setPos({ li: 0, ci: 0 }), 3500);
    else if (ci < lineLen(lines[li])) t = window.setTimeout(() => setPos({ li, ci: ci + 1 }), 26);
    else t = window.setTimeout(() => setPos({ li: li + 1, ci: 0 }), 260);
    return () => window.clearTimeout(t);
  }, [pos, lines]);
  return pos;
}

/* ============================== SECTIONS ============================== */
function CodeWindow({ file, lines }: { file: string; lines: Line[] }) {
  const { li, ci } = useTypewriter(lines);
  return (
    <div className="dv-code" aria-hidden="true">
      <div className="dv-code-bar">
        <i /><i /><i />
        <span>{file}</span>
      </div>
      <div className="dv-code-body" style={{ minHeight: lines.length * 25 + 36 }}>
        {lines.slice(0, li + 1).map((l, i) => {
          const shown = i < li ? l : sliceLine(l, ci);
          const cursor = i === li || (li >= lines.length && i === lines.length - 1);
          return (
            <div key={i}>
              {shown.length === 0 && !cursor ? "\u00A0" : null}
              {shown.map(([c, t], k) => (
                <span key={k} className={c ? `dv-${c}` : undefined}>{t}</span>
              ))}
              {cursor && <span className="dv-cur" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Hero({ data }: { data: DevPageData }) {
  return (
    <header className="dv-hero">
      <Container className="dv-hero-inner">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <span className="dv-tag">{data.eyebrow}</span>
            <h1 className="dv-title">
              {data.title} <em>{data.highlight}</em>
            </h1>
            <p className="dv-lead">{data.description}</p>
            <div className="dv-actions">
              <Link href="/contact" className="dv-btn dv-btn-primary">
                Get a free project quote <FiArrowRight />
              </Link>
              <a href="#services" className="dv-btn dv-btn-ghost">View services</a>
            </div>
          </Col>
          <Col lg={6}>
            <CodeWindow file={data.file} lines={data.code} />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

function StackStrip({ items }: { items: string[] }) {
  return (
    <div className="dv-strip" aria-hidden="true">
      <div className="dv-strip-track">
        {[...items, ...items].map((s, i) => (
          <span key={`${s}-${i}`}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function Services({ items }: { items: Service[] }) {
  const n = items.length;
  return (
    <section className="dv-section dv-paper" id="services">
      <Container>
        <p className="dv-eyebrow">01 / What we build</p>
        <h2 className="dv-h2">Everything you need, <em>in one place</em></h2>
        <p className="dv-sub">Focused services that help your business launch, grow and stay reliable.</p>
        <Row className="g-4">
          {items.map((s, i) => {
            const half = n % 3 === 2 && i >= n - 2; /* last row of 2 gets 2 wider cards */
            const Icon = s.icon;
            return (
              <Col key={s.title} md={6} lg={half ? 6 : 4}>
                <article className="dv-card">
                  <span className="dv-card-no">{pad(i)}</span>
                  <div className="dv-card-top">
                    <span className="dv-icon"><Icon /></span>
                    <span className="dv-label">{s.label}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="dv-chips">
                    {s.chips.map((c) => <span key={c}>{c}</span>)}
                  </div>
                  <div className="dv-card-foot">
                    <span>Discuss this service</span>
                    <span className="dv-arrow"><FiArrowUpRight /></span>
                  </div>
                </article>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

function Process({ steps }: { steps: Step[] }) {
  return (
    <section className="dv-section dv-dark">
      <Container>
        <Row className="g-5">
          <Col lg={5}>
            <div className="dv-sticky">
              <p className="dv-eyebrow">02 / How we work</p>
              <h2 className="dv-h2">From idea to live <em>in four stages</em></h2>
              <p className="dv-sub">A clear process, so you always know what happens next.</p>
              <Link href="/contact" className="dv-btn dv-btn-primary">Start your project <FiArrowRight /></Link>
            </div>
          </Col>
          <Col lg={7}>
            <ol className="dv-steps">
              {steps.map((s, i) => (
                <li key={s.title} className="dv-step">
                  <div className="dv-step-no"><span>{pad(i)}</span></div>
                  <div className="dv-step-card">
                    <div className="dv-step-head">
                      <h3>{s.title}</h3>
                      <small><FiCheck /> {s.status}</small>
                    </div>
                    <p>{s.text}</p>
                    <div className="dv-chips">
                      {s.chips.map((c) => <span key={c}>{c}</span>)}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function Why({ data }: { data: DevPageData }) {
  return (
    <section className="dv-section">
      <Container>
        <Row className="g-4 align-items-stretch">
          <Col lg={5}>
            <div className="dv-why">
              <p className="dv-eyebrow">03 / Why Debon Service</p>
              <h2 className="dv-h2">{data.whyTitle}</h2>
              <p>{data.whyText}</p>
              <div className="dv-stack">
                {data.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
              <Link href="/contact" className="dv-btn dv-btn-primary">Get a free quote <FiArrowRight /></Link>
            </div>
          </Col>
          <Col lg={7}>
            <Row className="g-3 h-100">
              {data.benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <Col key={b.title} sm={6}>
                    <div className="dv-benefit">
                      <span className="dv-icon"><Icon /></span>
                      <h3>{b.title}</h3>
                      <p>{b.text}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="dv-section dv-paper">
      <Container>
        <Row className="g-5">
          <Col lg={5}>
            <div className="dv-sticky">
              <p className="dv-eyebrow">04 / Questions</p>
              <h2 className="dv-h2">Things people <em>ask first</em></h2>
              <p className="dv-sub">Quick answers to the questions we hear most often.</p>
              <div className="dv-ask">
                <span className="dv-icon"><FiMessageSquare /></span>
                <h3>Still have a question?</h3>
                <p>Tell us what you need and our team will get back to you.</p>
                <Link href="/contact" className="dv-btn dv-btn-primary">Talk to our team <FiArrowRight /></Link>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="dv-faqs">
              {items.map((f, i) => (
                <div key={f.q} className={`dv-faq ${open === i ? "is-open" : ""}`}>
                  <button type="button" className="dv-faq-btn" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                    <span className="dv-faq-num">{pad(i)}</span>
                    <span className="dv-faq-q">{f.q}</span>
                    <span className="dv-faq-plus"><FiPlus /></span>
                  </button>
                  <div className="dv-faq-body">
                    <div><p>{f.a}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function Cta({ data }: { data: DevPageData }) {
  return (
    <section className="dv-cta">
      <div className="dv-cta-word" aria-hidden="true">{data.bigWord}</div>
      <Container>
        <h2>{data.ctaTitle}</h2>
        <p>{data.ctaText}</p>
        <Link href="/contact" className="dv-btn dv-btn-primary">Talk to our team <FiArrowRight /></Link>
      </Container>
    </section>
  );
}

export default function DevServicePage({ data }: { data: DevPageData }) {
  return (
    <main className="dv">
      <Hero data={data} />
      <StackStrip items={data.stack} />
      <Services items={data.services} />
      <Process steps={data.steps} />
      <Why data={data} />
      <Faq items={data.faqs} />
      <Cta data={data} />
    </main>
  );
}
