
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import Link from "next/link";
import Reveal from "../Reveal";
import ServiceVisual from "./ServiceVisuals";
import type { VisualKind } from "./ServiceVisuals";

export type ServicePageData = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  visual: VisualKind;
  chips: string[];
  stats: { value: string; label: string }[];

  practicesEyebrow?: string;
  practicesTitle?: string;
  practicesSub?: string;
  whyEyebrow?: string;
  faqEyebrow?: string;
  faqTitle?: string;
  faqSub?: string;

  practices: { title: string; text: string; points: string[] }[];
  process: { title: string; text: string }[];
  why: { title: string; text: string; points: string[] };
  faqs: { q: string; a: string }[];
  marquee: string;
  ctaTitle: string;
  ctaText: string;
};

const vars = (o: Record<string, string | number>) => o as CSSProperties;

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

function Fx({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.15);
  return (
    <div ref={ref} className={`sp-fx ${seen ? "is-in" : ""} ${className}`} style={vars({ "--d": `${delay}ms` })}>
      {children}
    </div>
  );
}

function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const [ref, seen] = useInView<HTMLElement>(0.6);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!match || !seen) return;
    const target = parseInt(match[1], 10);
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || target === 0) {
      setN(target);
      return;
    }
    const start = performance.now();
    const dur = 1300;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);

  return (
    <strong ref={ref}>
      {match ? n : value}
      {match ? match[2] : ""}
    </strong>
  );
}

function Words({ text, offset = 0 }: { text: string; offset?: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} className="sp-w">
          <span style={vars({ "--w": offset + i })}>{w}</span>{" "}
        </span>
      ))}
    </>
  );
}

const pad = (i: number) => String(i + 1).padStart(2, "0");

export default function ServicePage({ data }: { data: ServicePageData }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState<number | null>(0);
  const current = data.practices[active];

  const stageRef = useRef<HTMLDivElement | null>(null);
  const [stepsRef, stepsIn] = useInView<HTMLOListElement>(0.25);
  const [checksRef, checksIn] = useInView<HTMLUListElement>(0.3);

  const tilt = (e: MouseEvent<HTMLElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
  };
  const untilt = () => {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  };

  const spot = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const titleCount = data.title.split(" ").length;

  return (
    <main className="sp">
      <section className="sp-hero" onMouseMove={tilt} onMouseLeave={untilt}>
        <div className="sp-hero-bg" aria-hidden="true">
          <span className="sp-orb sp-orb-1" />
          <span className="sp-orb sp-orb-2" />
        </div>

        <div className="sp-container sp-hero-grid">
          <div className="sp-hero-copy">
            <span className="sp-pill">
              <i className="sp-live" />
              {data.eyebrow}
            </span>
            <h1 className="sp-title">
              <span className="sp-line">
                <Words text={data.title} />
              </span>
              <span className="sp-line sp-line-accent">
                <Words text={data.highlight} offset={titleCount} />
              </span>
            </h1>
            <p className="sp-lead">{data.description}</p>
            <div className="sp-actions">
              <Link href="/contact" className="sp-btn sp-btn-primary">
                Get a free growth plan
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="sp-stage-wrap" aria-hidden="true">
            <div className="sp-stage" ref={stageRef}>
              <ServiceVisual kind={data.visual} />
              {data.chips.map((c, i) => (
                <span key={c} className={`sp-chip sp-chip-${i + 1}`}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sp-stats-wrap">
        <div className="sp-container">
          <Fx>
            <div className="sp-stats">
              {data.stats.map((s) => (
                <div key={s.label} className="sp-stat">
                  <CountUp value={s.value} />
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Fx>
        </div>
      </section>

      <section className="sp-section" id="practices">
        <div className="sp-container">
          <Fx className="sp-head">
            {data.practicesEyebrow && <p className="sp-eyebrow">{data.practicesEyebrow}</p>}
            {data.practicesTitle && <h2 className="sp-h2">{data.practicesTitle}</h2>}
            {data.practicesSub && <p className="sp-sub">{data.practicesSub}</p>}
          </Fx>

          <Fx delay={120}>
            <div
              className={`sp-tabs ${paused ? "is-paused" : ""}`}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <div className="sp-tablist" role="tablist">
                {data.practices.map((p, i) => (
                  <button
                    key={p.title}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    className={`sp-tab ${i === active ? "is-active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <span className="sp-num">{pad(i)}</span>
                    <b>{p.title}</b>
                    {i === active && (
                      <i
                        key={active}
                        className="sp-tab-progress"
                        onAnimationEnd={() => setActive((a) => (a + 1) % data.practices.length)}
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="sp-panel" role="tabpanel" key={current.title}>
                <span className="sp-panel-no" aria-hidden="true">
                  {pad(active)}
                </span>
                <h3>{current.title}</h3>
                <p className="mt-20 mb-20">{current.text}</p>
                <ul>
                  {current.points.map((pt, i) => (
                    <li key={pt} style={vars({ "--i": i })}>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Fx>
        </div>
      </section>

      <section className="sp-section sp-paper">
        <div className="sp-container sp-why">
          <Fx>
            {data.whyEyebrow && <p className="sp-eyebrow">{data.whyEyebrow}</p>}
            <h2 className="sp-h2">{data.why.title}</h2>
            <p className="sp-why-text">{data.why.text}</p>
          </Fx>
          <ul ref={checksRef} className={`sp-checks ${checksIn ? "is-in" : ""}`}>
            {data.why.points.map((pt, i) => (
              <li key={pt} style={vars({ "--i": i })}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" className="sp-check-bg" />
                  <path d="M7 12.5l3.2 3.2L17 9" className="sp-check-tick" pathLength={1} />
                </svg>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-container sp-faq-grid">
          <Fx>
            {data.faqEyebrow && <p className="sp-eyebrow">{data.faqEyebrow}</p>}
            {data.faqTitle && <h2 className="sp-h2">{data.faqTitle}</h2>}
            {data.faqSub && <p className="sp-sub">{data.faqSub}</p>}
          </Fx>
          <Fx delay={120}>
            <div className="sp-faqs">
              {data.faqs.map((f, i) => (
                <div key={f.q} className={`sp-faq ${open === i ? "is-open" : ""}`}>
                  <button type="button" className="sp-faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                    <span>{f.q}</span>
                    <i aria-hidden="true" />
                  </button>
                  <div className="sp-faq-a">
                    <div>
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fx>
        </div>
      </section>

      <section className="og-section og-dark og-cta">
        <div className="og-bigWord" aria-hidden="true">
          {`${data.marquee} `.repeat(4).trim()}
        </div>
        <div className="og-container">
          <Reveal>
            <h2 className="og-title">{data.ctaTitle}</h2>
            <p className="og-lead">{data.ctaText}</p>
            <div className="og-actions">
              <Link href="/contact" className="og-btn og-btnAccent">
                Talk to our team
                <svg
                  className="og-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}