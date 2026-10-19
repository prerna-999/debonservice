
"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const points = [
  "Strategy That Fits Your Business",
  "Data Over Guesswork",
  "Search Beyond the Search Bar",
  "Connected Marketing, Not Isolated Efforts",
];

const stats = [
  { to: 5, suffix: "", label: "Growth services under one roof" },
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
            <span className="og-eyebrow">Why Digital Marketing Services by Debonaire</span>
            <h2 className="og-title">Give People a Reason to Choose You.</h2>
            <p className="og-lead">Getting noticed is good, but getting chosen is even better. We help your brand reach the right people, show them what makes you different and earn their trust. From search engines to social media, we make every channel count. So when customers are ready to choose, they think of you.</p>
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