"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

const cases = [
  { tab: "Support desk", tag: "CASE 01 / SUPPORT", title: "Give a growing brand a support desk customers love", text: "A shared inbox and chat are turned into an organised helpdesk with clear categories, saved replies and a handover routine for tricky cases.", m1: ["Responsiveness", "Faster first replies"], m2: ["Consistency", "Answers that match policy"], img: "/assets/img/all-img/home/home-about-1.avif" },
  { tab: "Back-office engine", tag: "CASE 02 / BACK OFFICE", title: "Clear the admin pile so the team can focus on clients", text: "Orders, invoices and documents move through one checklist-driven process with a second check before anything is sent out.", m1: ["Accuracy", "Fewer manual errors"], m2: ["Turnaround", "Work done on schedule"], img: "/assets/img/all-img/home/home-about-2.avif" },
  { tab: "Data pipeline", tag: "CASE 03 / DATA", title: "Turn scattered records into data you can trust", text: "Spreadsheets and CRM entries are cleaned, matched and kept up to date, with regular quality checks and a simple monthly summary.", m1: ["Quality", "Cleaner records"], m2: ["Clarity", "Reports you can act on"], img: "/assets/img/all-img/home/banner.avif" },
];

export default function Cases() {
  const [a, setA] = useState(0);
  const c = cases[a];
  return (
    <section className="bo-section">
      <div className="bo-container">
        <Reveal className="bo-head">
          <span className="bo-eyebrow">04 / The kind of work we do</span>
          <h2 className="bo-title">Built around the <em>real bottleneck</em></h2>
          <p className="bo-lead">These are example project directions that explain our thinking. Verified client stories and outcomes can be added when available.</p>
        </Reveal>

        <div className="bo-cases">
          <div className="bo-tabs" role="tablist">
            {cases.map((x, i) => (
              <button key={x.tab} role="tab" aria-selected={a === i} className={`bo-tab ${a === i ? "bo-on" : ""}`} onClick={() => setA(i)} onMouseEnter={() => setA(i)}>
                <span>{String(i + 1).padStart(2, "0")}</span>{x.tab}
              </button>
            ))}
          </div>

          <div key={a} className="bo-case">
            <div className="bo-caseImg">
              <Image src={c.img} alt="" width={900} height={700} />
              <span className="bo-caseBadge">Example</span>
            </div>
            <div className="bo-caseBody">
              <span className="bo-tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <div className="bo-metrics">
                <div><b>{c.m1[0]}</b>{c.m1[1]}</div>
                <div><b>{c.m2[0]}</b>{c.m2[1]}</div>
              </div>
              <Link href="/contact" className="bo-textLink bo-textLinkDark">
                Discuss a similar brief
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
