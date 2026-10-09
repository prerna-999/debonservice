import type { CSSProperties, ReactNode } from "react";
import Reveal from "./Reveal";

const nodes: { t: string; d: string; icon: ReactNode }[] = [
  { t: "Intake", d: "A request arrives by email, chat, form or phone and is logged.", icon: <path d="M4 4h16v12H8l-4 4z" /> },
  { t: "Triage", d: "We sort it by type and urgency and send it to the right person.", icon: <path d="M3 5h18l-7 8v6l-4-2v-4z" /> },
  { t: "Resolve", d: "A trained team member completes the task using your rules.", icon: <path d="m5 12 5 5 9-10" /> },
  { t: "Review", d: "A second check for accuracy, tone and policy.", icon: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></> },
  { t: "Report", d: "Results flow into a simple report you can act on.", icon: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /> },
];

export default function Flow() {
  return (
    <section className="bo-section bo-paper">
      <div className="bo-container">
        <Reveal className="bo-head">
          <span className="bo-eyebrow">03 / How a request moves</span>
          <h2 className="bo-title">From first message to <em>finished and reported</em></h2>
          <p className="bo-lead">Every task follows the same visible path, so nothing gets lost and you can see where work stands.</p>
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
