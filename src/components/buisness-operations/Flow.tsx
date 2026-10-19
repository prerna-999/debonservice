

import type { CSSProperties, ReactNode } from "react";
import Reveal from "./Reveal";

const nodes: { t: string; d: string; icon: ReactNode }[] = [
  { t: "Tell Us What You Need", d: "We listen to your needs and understand how your business works.", icon: <path d="M4 4h16v12H8l-4 4z" /> },
  { t: "Let’s Make a Plan", d: "We discuss your goals and work out what will help you most.", icon: <path d="M3 5h18l-7 8v6l-4-2v-4z" /> },
  { t: "Find What Works for You", d: "We help you choose the services that fit your business.", icon: <path d="m5 12 5 5 9-10" /> },
  { t: "Leave the Details to Us", d: "We get things moving and help take everyday tasks off your plate.", icon: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></> },
  { t: "We’re Here as You Grow", d: "We stay by your side as your business needs change.", icon: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /> },
];

export default function Flow() {
  return (
    <section className="bo-section bo-paper">
      <div className="bo-container">
        <Reveal className="bo-head">
          <span className="bo-eyebrow">Here’s How We Work</span>
          <h2 className="bo-title">Simple Steps, <em>The Right Support</em></h2>
        </Reveal>

        <div className="bo-flow">
          <div className="bo-track" aria-hidden="true"><span className="bo-packet" /></div>
          <ol className="bo-nodes">
            {nodes.map((n, i) => (
              <li key={n.t} className="bo-node" style={{ ["--i" as string]: i } as CSSProperties}>
                <Reveal delay={i * 110} className="bo-nodeIn">
                  <span className="bo-nodeIcon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{n.icon}</svg>
                  </span>
                  <h3>{n.t}</h3>
                  <p>{n.d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}