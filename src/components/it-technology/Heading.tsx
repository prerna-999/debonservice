"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  lines: ReactNode[];
  label?: string;
  as?: "h1" | "h2";
  className?: string;
};

/** Section label + heading whose lines slide up one after another. */
export default function Heading({ lines, label, as: Tag = "h2", className = "it-section-title" }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [state, setState] = useState<"idle" | "hide" | "in">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setState("hide");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setState("in");
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {label && <p className="it-section-label">{label}</p>}
      <Tag ref={ref} className={className}>
        {lines.map((l, i) => (
          <span className="it-heading-line" key={i}>
            <span className={state === "hide" ? "is-hide" : ""} style={{ transitionDelay: `${i * 140}ms` }}>
              {l}
            </span>
          </span>
        ))}
      </Tag>
    </>
  );
}
