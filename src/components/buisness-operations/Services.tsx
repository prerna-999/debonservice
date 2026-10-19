// "use client";
// import { useEffect, useState, type ReactNode } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import Reveal from "./Reveal";

// const svg = (d: ReactNode) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
// );

// type Service = { id: string; tag: string; title: string; text: string; points: string[]; icon: ReactNode };

// const services: Service[] = [
//   { id: "customer-support", tag: "SUPPORT", title: "Customer Support", text: "Friendly, trained agents handling chat, email and phone, so every customer feels looked after.", points: ["Email, chat and phone support", "Helpdesk setup and ticket handling", "Replies that follow your tone and policies"], icon: svg(<><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M19 19c0 1.7-2 3-5 3" /></>) },
//   { id: "back-office", tag: "ADMIN", title: "Back-Office Support", text: "Everyday admin handled accurately and on time, from order entry to document processing.", points: ["Order and invoice processing", "Document handling and filing", "Scheduling and follow-ups"], icon: svg(<><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></>) },
//   { id: "data-operations", tag: "DATA", title: "Data Operations", text: "Clean, organised data you can trust: entered, checked and ready for decisions.", points: ["Data entry and cleaning", "Database and CRM updates", "Quality checks and audit trails"], icon: svg(<><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>) },
//   { id: "process-automation", tag: "AUTOMATION", title: "Process Automation", text: "Map repetitive work, then automate the steps that slow your team down.", points: ["Workflow mapping", "Tools and automation setup", "Handover guides for your team"], icon: svg(<><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="12" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M8.5 6H13a3 3 0 0 1 3 3v.5M8.5 18H13a3 3 0 0 0 3-3v-.5" /></>) },
//   { id: "lead-operations", tag: "SALES OPS", title: "Lead & Sales Operations", text: "Keep leads moving: qualified, followed up and logged without gaps.", points: ["Lead qualification and follow-up", "CRM hygiene and pipeline tracking", "Appointment setting"], icon: svg(<><path d="M3 5h18l-7 8v6l-4-2v-4z" /></>) },
//   { id: "quality-reporting", tag: "QUALITY", title: "Quality & Reporting", text: "Clear dashboards, checks and reviews, so you always know how operations are performing.", points: ["Service-level tracking", "Monthly performance reports", "Review sessions and next steps"], icon: svg(<><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></>) },
// ];

// export default function Services() {
//   const [active, setActive] = useState(0);
//   const router = useRouter();

//   useEffect(() => {
//     const id = window.location.hash.replace("#", "");
//     const i = services.findIndex((s) => s.id === id);
//     if (i >= 0) setActive(i);
//   }, [router.asPath]);

//   return (
//     <section id="services" className="bo-section bo-dark">
//       <div className="bo-container">
//         <Reveal className="bo-head">
//           <span className="bo-eyebrow">02 / What we handle</span>
//           <h2 className="bo-title">Six ways we <em>keep operations</em> running</h2>
//           <p className="bo-lead">Hand over one task or a whole function. Hover or tap a panel to see what is included.</p>
//         </Reveal>

//         <div className="bo-acc">
//           {services.map((sv, i) => {
//             const on = active === i;
//             return (
//               <div key={sv.id} id={sv.id} className={`bo-pan ${on ? "bo-on" : ""}`} onMouseEnter={() => setActive(i)}>
//                 <button type="button" className="bo-panBtn" aria-expanded={on} onClick={() => setActive(i)} onFocus={() => setActive(i)}>
//                   <span className="bo-panNum">{String(i + 1).padStart(2, "0")}</span>
//                   <span className="bo-panIcon">{sv.icon}</span>
//                   <span className="bo-panLabel">{sv.title}</span>
//                 </button>
//                 <div className="bo-panBody">
//                   <span className="bo-tag">{String(i + 1).padStart(2, "0")} / {sv.tag}</span>
//                   <h3 className="bo-panTitle">{sv.title}</h3>
//                   <p className="bo-panText">{sv.text}</p>
//                   <ul className="bo-points">
//                     {sv.points.map((p) => (
//                       <li key={p}>
//                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>
//                         {p}
//                       </li>
//                     ))}
//                   </ul>
//                   <Link href="/contact" className="bo-textLink">
//                     Discuss this service
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/router";
import Reveal from "./Reveal";

const svg = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

type Service = { id: string; tag: string; title: string; text: string; points: string[]; icon: ReactNode };

const services: Service[] = [
  { id: "corporate-secretary", tag: "CORPORATE SEC", title: "Corporate Secretary Services", text: "We help you stay on top of company paperwork, records and compliance, so important details don’t get missed.", points: ["Keep company records organised", "Get help with required filings", "Stay on top of compliance tasks"], icon: svg(<><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></>) },
  { id: "bookkeeping", tag: "BOOKKEEPING", title: "Bookkeeping Services", text: "Know where your money is coming from and going, with your daily financial records kept in order.", points: ["Keep track of income and expenses", "Record day-to-day transactions", "Keep financial records up to date"], icon: svg(<><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>) },
  { id: "accounting", tag: "ACCOUNTING", title: "Accounting Services", text: "Make better sense of your business finances with clear accounts and reports that show you where things stand.", points: ["Prepare clear financial reports", "Check and match account records", "Keep an eye on business expenses"], icon: svg(<><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></>) },
  { id: "digital-address-website", tag: "DIGITAL", title: "Digital Address & Website", text: "Give your business a professional address and a website where people can find you and learn what you do.", points: ["Set up a professional business address", "Build a website for your business", "Help customers find you online"], icon: svg(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.500 5.700 12 3Z" /></>) },
  { id: "registered-address", tag: "ADDRESS", title: "Registered Address – Onsite", text: "Get a business address for company registration and official mail, helping you establish a more professional presence.", points: ["Use an address for registration", "Receive official correspondence", "Give your business a professional base"], icon: svg(<><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21Z" /><circle cx="12" cy="9.500" r="2.500" /></>) },
  { id: "financial-business-planning", tag: "PLANNING", title: "Financial & Business Planning", text: "Turn your business goals into a practical plan for managing money, using resources and preparing for what’s next.", points: ["Plan budgets and spending", "Estimate future costs and income", "Set clear business goals"], icon: svg(<><path d="M3 5h18l-7 8v6l-4-2v-4z" /></>) },
  { id: "branding", tag: "BRANDING", title: "Branding Services", text: "Give your business a look and voice that people recognise, remember and connect with.", points: ["Create a logo and visual identity", "Choose colours and brand messaging", "Design materials to promote your business"], icon: svg(<><path d="M12 3l2.600 5.600 6.100.700-4.500 4.200 1.200 6L12 16.500 6.600 19.500l1.200-6L3.300 9.300l6.100-.700L12 3Z" /></>) },
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
          <span className="bo-eyebrow">What we handle</span>
          <h2 className="bo-title">The Little Things That <em>Keep Business Running</em></h2>
          <p className="bo-lead">From keeping your accounts in order to building a brand people remember, we help you take care of the important things behind your business, all in one place.</p>
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}