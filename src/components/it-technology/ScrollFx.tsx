"use client";
import { useEffect } from "react";

/**
 * Scroll-linked effects for the page:
 * hero parallax ([data-px]), roadmap line + steps, speed-reactive marquee.
 */
export default function ScrollFx() {
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.querySelector<HTMLElement>(".it-page");
    if (!root) return;
    const px = Array.from(root.querySelectorAll<HTMLElement>("[data-px]"));
    const road = root.querySelector<HTMLElement>(".it-road");
    const fill = root.querySelector<HTMLElement>(".it-road__fill");
    const steps = Array.from(root.querySelectorAll<HTMLElement>(".it-roadmap-step"));
    const mt = root.querySelector<HTMLElement>(".it-marquee__track");
    let x = 0;
    let last = window.scrollY;
    let raf = 0;

    const frame = () => {
      const y = window.scrollY;

      if (!rm) {
        const cy = Math.min(y, 900);
        px.forEach((el) => {
          el.style.translate = `0 ${-cy * Number(el.dataset.px)}px`;
        });
        if (road && fill) {
          const r = road.getBoundingClientRect();
          const p = Math.min(1, Math.max(0, (window.innerHeight * 0.75 - r.top) / (r.height + window.innerHeight * 0.25)));
          fill.style.transform = `scaleX(${p})`;
          steps.forEach((n, i) => n.classList.toggle("on", p > 0.02 && p >= i / 3 - 0.02));
        }
        if (mt) {
          const d = Math.abs(y - last);
          last = y;
          x -= 0.5 + d * 0.8;
          const w = mt.scrollWidth / 2;
          if (x < -w) x += w;
          mt.style.transform = `translateX(${x}px)`;
        }
      }
      raf = requestAnimationFrame(frame);
    };
    frame();
    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
