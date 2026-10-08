"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const points = [
  "One team for strategy, creative and reporting, so nothing falls between vendors.",
  "Clear monthly numbers on leads, cost and return, not vanity metrics.",
  "No long lock-in. We keep your business by delivering results.",
];

// Replace these with your real numbers
const stats = [
  { to: 6, suffix: "", label: "Growth services under one roof" },
  { to: 4, suffix: "", label: "Simple steps from audit to results" },
  { to: 24, suffix: "h", label: "Typical reply time on support" },
  { to: 100, suffix: "%", label: "Focus on your lead goals" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (reduce) {
          setN(to);
          return;
        }
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return <span ref={ref}>{n}{suffix}</span>;
}

const Tick = () => (
  <span className="og-tick">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>
  </span>
);

export default function Outcomes() {
  return (
    <section className="og-section">
      <div className="og-container og-split">
        <div>
          <Reveal>
            <span className="og-eyebrow">Why Debonaire Capital Assets</span>
            <h2 className="og-title">Marketing that you can measure</h2>
            <p className="og-lead">We keep things clear and accountable so you always know what your marketing spend is doing.</p>
          </Reveal>
          <ul className="og-checks">
            {points.map((p, i) => (
              <li key={p}>
                <Reveal delay={i * 140} className="og-checkRow"><Tick /><span>{p}</span></Reveal>
              </li>
            ))}
          </ul>
        </div>
        <div className="og-stats">
          {stats.map((st, i) => (
            <Reveal key={st.label} delay={i * 110}>
              <div className="og-stat">
                <div className="og-statNum"><Counter to={st.to} suffix={st.suffix} /></div>
                <div className="og-statLabel">{st.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
