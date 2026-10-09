"use client";
import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Reveal from "./Reveal";

const svg = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

type Service = { id: string; tag: string; title: string; text: string; points: string[]; icon: ReactNode };

// ids can be used in links such as /business-operations#customer-support
const services: Service[] = [
  { id: "customer-support", tag: "SUPPORT", title: "Customer Support", text: "Friendly, trained agents handling chat, email and phone, so every customer feels looked after.", points: ["Email, chat and phone support", "Helpdesk setup and ticket handling", "Replies that follow your tone and policies"], icon: svg(<><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M19 19c0 1.7-2 3-5 3" /></>) },
  { id: "back-office", tag: "ADMIN", title: "Back-Office Support", text: "Everyday admin handled accurately and on time, from order entry to document processing.", points: ["Order and invoice processing", "Document handling and filing", "Scheduling and follow-ups"], icon: svg(<><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></>) },
  { id: "data-operations", tag: "DATA", title: "Data Operations", text: "Clean, organised data you can trust: entered, checked and ready for decisions.", points: ["Data entry and cleaning", "Database and CRM updates", "Quality checks and audit trails"], icon: svg(<><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>) },
  { id: "process-automation", tag: "AUTOMATION", title: "Process Automation", text: "Map repetitive work, then automate the steps that slow your team down.", points: ["Workflow mapping", "Tools and automation setup", "Handover guides for your team"], icon: svg(<><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="12" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M8.5 6H13a3 3 0 0 1 3 3v.5M8.5 18H13a3 3 0 0 0 3-3v-.5" /></>) },
  { id: "lead-operations", tag: "SALES OPS", title: "Lead & Sales Operations", text: "Keep leads moving: qualified, followed up and logged without gaps.", points: ["Lead qualification and follow-up", "CRM hygiene and pipeline tracking", "Appointment setting"], icon: svg(<><path d="M3 5h18l-7 8v6l-4-2v-4z" /></>) },
  { id: "quality-reporting", tag: "QUALITY", title: "Quality & Reporting", text: "Clear dashboards, checks and reviews, so you always know how operations are performing.", points: ["Service-level tracking", "Monthly performance reports", "Review sessions and next steps"], icon: svg(<><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></>) },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    const i = services.findIndex((s) => s.id === id);
    if (i >= 0) setActive(i);
  }, [router.asPath]);

  return (
    <section id="services" className="bo-section bo-dark">
      <div className="bo-container">
        <Reveal className="bo-head">
          <span className="bo-eyebrow">02 / What we handle</span>
          <h2 className="bo-title">Six ways we <em>keep operations</em> running</h2>
          <p className="bo-lead">Hand over one task or a whole function. Hover or tap a panel to see what is included.</p>
        </Reveal>

        <div className="bo-acc">
          {services.map((sv, i) => {
            const on = active === i;
            return (
              <div key={sv.id} id={sv.id} className={`bo-pan ${on ? "bo-on" : ""}`} onMouseEnter={() => setActive(i)}>
                <button type="button" className="bo-panBtn" aria-expanded={on} onClick={() => setActive(i)} onFocus={() => setActive(i)}>
                  <span className="bo-panNum">{String(i + 1).padStart(2, "0")}</span>
                  <span className="bo-panIcon">{sv.icon}</span>
                  <span className="bo-panLabel">{sv.title}</span>
                </button>
                <div className="bo-panBody">
                  <span className="bo-tag">{String(i + 1).padStart(2, "0")} / {sv.tag}</span>
                  <h3 className="bo-panTitle">{sv.title}</h3>
                  <p className="bo-panText">{sv.text}</p>
                  <ul className="bo-points">
                    {sv.points.map((p) => (
                      <li key={p}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="bo-textLink">
                    Discuss this service
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
