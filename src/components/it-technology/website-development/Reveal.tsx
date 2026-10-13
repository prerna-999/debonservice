import { useEffect, useRef, useState, ReactNode } from "react";

/* ========== SHARED HELPERS (Reveal, motion hook, Marquee, CountUp) ========== */

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

export function Marquee({ items, alt = false }: { items: string[]; alt?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className={`wd-mq ${alt ? "wd-mqAlt" : ""}`} aria-hidden="true">
      <div>{loop.map((t, i) => <span key={i}>{t}</span>)}</div>
    </div>
  );
}

export function CountUp({ n, suffix }: { n: number; suffix: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (reduced) { setVal(n); return; }
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - t0) / 1200, 1);
        setVal(Math.round(n * p));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [n, reduced]);

  return <b ref={ref}>{val}{suffix}</b>;
}

export default function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShow(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`wd-reveal ${show ? "wd-revealIn" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
