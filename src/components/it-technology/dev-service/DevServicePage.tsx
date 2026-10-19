


// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import Link from "next/link";
// // import type { IconType } from "react-icons";
// // import { FiArrowRight, FiArrowUpRight, FiCheck, FiMessageSquare, FiPlus } from "react-icons/fi";

// // type Seg = [cls: string, text: string]; // cls: k keyword, s string, c comment, f function, ok success, "" plain
// // export type Line = Seg[];
// // export type Service = { icon: IconType; label: string; title: string; text: string; chips: string[] };
// // export type Step = { title: string; text: string; status: string; chips: string[] };
// // export type Benefit = { icon: IconType; title: string; text: string };

// // export type DevPageData = {
// //   eyebrow: string;
// //   title: string;
// //   highlight: string;
// //   description: string;
// //   file: string;
// //   code: Line[];
// //   stack: string[];
// //   services: Service[];
// //   steps: Step[];
// //   whyTitle: string;
// //   whyText: string;
// //   benefits: Benefit[];
// //   faqs: { q: string; a: string }[];
// //   bigWord: string;
// //   ctaTitle: string;
// //   ctaText: string;
// // };

// // const pad = (i: number) => String(i + 1).padStart(2, "0");

// // /* ============================== TYPEWRITER ============================== */
// // const lineLen = (l: Line) => l.reduce((a, s) => a + s[1].length, 0);

// // function sliceLine(l: Line, n: number): Line {
// //   const out: Line = [];
// //   let left = n;
// //   for (const [c, t] of l) {
// //     if (left <= 0) break;
// //     out.push([c, t.slice(0, left)]);
// //     left -= t.length;
// //   }
// //   return out;
// // }

// // function useTypewriter(lines: Line[]) {
// //   const [pos, setPos] = useState({ li: 0, ci: 0 });
// //   useEffect(() => {
// //     const { li, ci } = pos;
// //     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
// //       if (li !== lines.length) setPos({ li: lines.length, ci: 0 });
// //       return;
// //     }
// //     let t: number;
// //     if (li >= lines.length) t = window.setTimeout(() => setPos({ li: 0, ci: 0 }), 3500);
// //     else if (ci < lineLen(lines[li])) t = window.setTimeout(() => setPos({ li, ci: ci + 1 }), 26);
// //     else t = window.setTimeout(() => setPos({ li: li + 1, ci: 0 }), 260);
// //     return () => window.clearTimeout(t);
// //   }, [pos, lines]);
// //   return pos;
// // }

// // /* ============================== SECTIONS ============================== */
// // function CodeWindow({ file, lines }: { file: string; lines: Line[] }) {
// //   const { li, ci } = useTypewriter(lines);
// //   return (
// //     <div className="dv-code" aria-hidden="true">
// //       <div className="dv-code-bar">
// //         <i /><i /><i />
// //         <span>{file}</span>
// //       </div>
// //       <div className="dv-code-body" style={{ minHeight: lines.length * 25 + 36 }}>
// //         {lines.slice(0, li + 1).map((l, i) => {
// //           const shown = i < li ? l : sliceLine(l, ci);
// //           const cursor = i === li || (li >= lines.length && i === lines.length - 1);
// //           return (
// //             <div key={i}>
// //               {shown.length === 0 && !cursor ? "\u00A0" : null}
// //               {shown.map(([c, t], k) => (
// //                 <span key={k} className={c ? `dv-${c}` : undefined}>{t}</span>
// //               ))}
// //               {cursor && <span className="dv-cur" />}
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// // function Hero({ data }: { data: DevPageData }) {
// //   return (
// //     <header className="dv-hero">
// //       <div className="dv-wrap dv-hero-inner">
// //         <div className="dv-grid dv-cols-half dv-center">
// //           <div>
// //             <span className="dv-tag">{data.eyebrow}</span>
// //             <h1 className="dv-title">
// //               {data.title} <em>{data.highlight}</em>
// //             </h1>
// //             <p className="dv-lead">{data.description}</p>
// //             <div className="dv-actions">
// //               <Link href="/contact" className="dv-btn dv-btn-primary">
// //                 Get a free project quote <FiArrowRight />
// //               </Link>
// //               <a href="#services" className="dv-btn dv-btn-ghost">View services</a>
// //             </div>
// //           </div>
// //           <div>
// //             <CodeWindow file={data.file} lines={data.code} />
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// // function StackStrip({ items }: { items: string[] }) {
// //   return (
// //     <div className="dv-strip" aria-hidden="true">
// //       <div className="dv-strip-track">
// //         {[...items, ...items].map((s, i) => (
// //           <span key={`${s}-${i}`}>{s}</span>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // function Services({ items }: { items: Service[] }) {
// //   const n = items.length;
// //   return (
// //     <section className="dv-section dv-paper" id="services">
// //       <div className="dv-wrap">
// //         <p className="dv-eyebrow">01 / What we build</p>
// //         <h2 className="dv-h2">Everything you need, <em>in one place</em></h2>
// //         <p className="dv-sub">Focused services that help your business launch, grow and stay reliable.</p>
// //         <div className="dv-cards">
// //           {items.map((s, i) => {
// //             const half = n % 3 === 2 && i >= n - 2; /* last row of 2 gets 2 wider cards */
// //             const Icon = s.icon;
// //             return (
// //               <div key={s.title} className={half ? "dv-cards-half" : undefined}>
// //                 <article className="dv-card">
// //                   <span className="dv-card-no">{pad(i)}</span>
// //                   <div className="dv-card-top">
// //                     <span className="dv-icon"><Icon /></span>
// //                     <span className="dv-label">{s.label}</span>
// //                   </div>
// //                   <h3>{s.title}</h3>
// //                   <p>{s.text}</p>
// //                   <div className="dv-chips">
// //                     {s.chips.map((c) => <span key={c}>{c}</span>)}
// //                   </div>
// //                   <div className="dv-card-foot">
// //                     <span>Discuss this service</span>
// //                     <span className="dv-arrow"><FiArrowUpRight /></span>
// //                   </div>
// //                 </article>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function Process({ steps }: { steps: Step[] }) {
// //   const listRef = useRef<HTMLOListElement>(null);
// //   useEffect(() => {
// //     const list = listRef.current;
// //     if (!list || !("IntersectionObserver" in window)) return;
// //     const items = Array.from(list.querySelectorAll<HTMLElement>(".dv-step"));
// //     const io = new IntersectionObserver(
// //       (entries) =>
// //         entries.forEach((e) => {
// //           if (e.isIntersecting) {
// //             e.target.classList.remove("dv-pre");
// //             io.unobserve(e.target);
// //           }
// //         }),
// //       { threshold: 0.15 }
// //     );
// //     items.forEach((el, i) => {
// //       el.style.transitionDelay = `${(i % 4) * 90}ms`;
// //       el.classList.add("dv-pre");
// //       io.observe(el);
// //     });
// //     return () => io.disconnect();
// //   }, [steps]);
// //   return (
// //     <section className="dv-section dv-dark">
// //       <div className="dv-wrap">
// //         <div className="dv-grid dv-cols-5-7">
// //           <div>
// //             <div className="dv-sticky">
// //               <p className="dv-eyebrow">02 / How we work</p>
// //               <h2 className="dv-h2">From idea to live <em>in four stages</em></h2>
// //               <p className="dv-sub">A clear process, so you always know what happens next.</p>
// //               <Link href="/contact" className="dv-btn dv-btn-primary">Start your project <FiArrowRight /></Link>
// //             </div>
// //           </div>
// //           <div>
// //             <ol className="dv-steps" ref={listRef}>
// //               {steps.map((s, i) => (
// //                 <li key={s.title} className="dv-step">
// //                   <div className="dv-step-no"><span>{pad(i)}</span></div>
// //                   <div className="dv-step-card">
// //                     <div className="dv-step-head">
// //                       <h3>{s.title}</h3>
// //                       <small><FiCheck /> {s.status}</small>
// //                     </div>
// //                     <p>{s.text}</p>
// //                     <div className="dv-chips">
// //                       {s.chips.map((c) => <span key={c}>{c}</span>)}
// //                     </div>
// //                   </div>
// //                 </li>
// //               ))}
// //             </ol>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function Why({ data }: { data: DevPageData }) {
// //   return (
// //     <section className="dv-section">
// //       <div className="dv-wrap">
// //         <div className="dv-grid dv-cols-5-7 dv-gap-md">
// //           <div>
// //             <div className="dv-why">
// //               <p className="dv-eyebrow">03 / Why Debon Service</p>
// //               <h2 className="dv-h2">{data.whyTitle}</h2>
// //               <p>{data.whyText}</p>
// //               <div className="dv-stack">
// //                 {data.stack.map((s) => <span key={s}>{s}</span>)}
// //               </div>
// //               <Link href="/contact" className="dv-btn dv-btn-primary">Get a free quote <FiArrowRight /></Link>
// //             </div>
// //           </div>
// //           <div>
// //             <div className="dv-benefits">
// //               {data.benefits.map((b) => {
// //                 const Icon = b.icon;
// //                 return (
// //                   <div key={b.title}>
// //                     <div className="dv-benefit">
// //                       <span className="dv-icon"><Icon /></span>
// //                       <h3>{b.title}</h3>
// //                       <p>{b.text}</p>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function Faq({ items }: { items: { q: string; a: string }[] }) {
// //   const [open, setOpen] = useState<number | null>(0);
// //   return (
// //     <section className="dv-section dv-paper">
// //       <div className="dv-wrap">
// //         <div className="dv-grid dv-cols-5-7">
// //           <div>
// //             <div className="dv-sticky">
// //               <p className="dv-eyebrow">04 / Questions</p>
// //               <h2 className="dv-h2">Things people <em>ask first</em></h2>
// //               <p className="dv-sub">Quick answers to the questions we hear most often.</p>
// //               <div className="dv-ask">
// //                 <span className="dv-icon"><FiMessageSquare /></span>
// //                 <h3>Still have a question?</h3>
// //                 <p>Tell us what you need and our team will get back to you.</p>
// //                 <Link href="/contact" className="dv-btn dv-btn-primary">Talk to our team <FiArrowRight /></Link>
// //               </div>
// //             </div>
// //           </div>
// //           <div>
// //             <div className="dv-faqs">
// //               {items.map((f, i) => (
// //                 <div key={f.q} className={`dv-faq ${open === i ? "is-open" : ""}`}>
// //                   <button type="button" className="dv-faq-btn" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
// //                     <span className="dv-faq-num">{pad(i)}</span>
// //                     <span className="dv-faq-q">{f.q}</span>
// //                     <span className="dv-faq-plus"><FiPlus /></span>
// //                   </button>
// //                   <div className="dv-faq-body">
// //                     <div><p>{f.a}</p></div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // function Cta({ data }: { data: DevPageData }) {
// // //   return (
// // //     <section className="dv-cta">
// // //       <div className="dv-cta-word" aria-hidden="true">{data.bigWord}</div>
// // //       <div className="dv-wrap">
// // //         <h2>{data.ctaTitle}</h2>
// // //         <p>{data.ctaText}</p>
// // //         <Link href="/contact" className="dv-btn dv-btn-primary">Talk to our team <FiArrowRight /></Link>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // function Cta({ data }: { data: DevPageData }) {
// //   return (
// //     <section className="dv-cta">
// //       <div className="dv-cta-word" aria-hidden="true">
// //         <div className="dv-cta-word-track">
// //           {[0, 1].map((i) => (
// //             <span key={i} className="dv-cta-word-item">
// //               {`${data.bigWord} `.repeat(3)}
// //             </span>
// //           ))}
// //         </div>
// //       </div>
// //       <div className="dv-wrap">
// //         <h2>{data.ctaTitle}</h2>
// //         <p>{data.ctaText}</p>
// //         <Link href="/contact" className="dv-btn dv-btn-primary">Talk to our team <FiArrowRight /></Link>
// //       </div>
// //     </section>
// //   );
// // }

// // export default function DevServicePage({ data }: { data: DevPageData }) {
// //   return (
// //     <div className="dv">
// //       <Hero data={data} />
// //       <StackStrip items={data.stack} />
// //       <Services items={data.services} />
// //       <Process steps={data.steps} />
// //       <Why data={data} />
// //       <Faq items={data.faqs} />
// //       <Cta data={data} />
// //     </div>
// //   );
// // }


// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import type { IconType } from "react-icons";
// import { FiArrowRight, FiArrowUpRight, FiCheck, FiMessageSquare, FiPlus } from "react-icons/fi";

// type Seg = [cls: string, text: string]; // cls: k keyword, s string, c comment, f function, ok success, "" plain
// export type Line = Seg[];
// export type Service = { icon: IconType; label: string; title: string; text: string; chips: string[] };
// export type Step = { title: string; text: string; status: string; chips: string[] };
// export type Benefit = { icon: IconType; title: string; text: string };

// export type DevPageData = {
//   eyebrow: string;
//   title: string;
//   highlight: string;
//   description: string;
//   file: string;
//   code: Line[];
//   stack: string[];
//   services: Service[];
//   steps: Step[];
//   whyTitle: string;
//   whyText: string;
//   benefits: Benefit[];
//   faqs: { q: string; a: string }[];
//   bigWord: string;
//   ctaTitle: string;
//   ctaText: string;
// };

// const pad = (i: number) => String(i + 1).padStart(2, "0");

// /* ============================== TYPEWRITER ============================== */
// const lineLen = (l: Line) => l.reduce((a, s) => a + s[1].length, 0);

// function sliceLine(l: Line, n: number): Line {
//   const out: Line = [];
//   let left = n;
//   for (const [c, t] of l) {
//     if (left <= 0) break;
//     out.push([c, t.slice(0, left)]);
//     left -= t.length;
//   }
//   return out;
// }

// function useTypewriter(lines: Line[]) {
//   const [pos, setPos] = useState({ li: 0, ci: 0 });
//   useEffect(() => {
//     const { li, ci } = pos;
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       if (li !== lines.length) setPos({ li: lines.length, ci: 0 });
//       return;
//     }
//     let t: number;
//     if (li >= lines.length) t = window.setTimeout(() => setPos({ li: 0, ci: 0 }), 3500);
//     else if (ci < lineLen(lines[li])) t = window.setTimeout(() => setPos({ li, ci: ci + 1 }), 26);
//     else t = window.setTimeout(() => setPos({ li: li + 1, ci: 0 }), 260);
//     return () => window.clearTimeout(t);
//   }, [pos, lines]);
//   return pos;
// }

// /* ============================== SECTIONS ============================== */
// function CodeWindow({ file, lines }: { file: string; lines: Line[] }) {
//   const { li, ci } = useTypewriter(lines);
//   return (
//     <div className="dv-code" aria-hidden="true">
//       <div className="dv-code-bar">
//         <i /><i /><i />
//         <span>{file}</span>
//       </div>
//       <div className="dv-code-body" style={{ minHeight: lines.length * 25 + 36 }}>
//         {lines.slice(0, li + 1).map((l, i) => {
//           const shown = i < li ? l : sliceLine(l, ci);
//           const cursor = i === li || (li >= lines.length && i === lines.length - 1);
//           return (
//             <div key={i}>
//               {shown.length === 0 && !cursor ? "\u00A0" : null}
//               {shown.map(([c, t], k) => (
//                 <span key={k} className={c ? `dv-${c}` : undefined}>{t}</span>
//               ))}
//               {cursor && <span className="dv-cur" />}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function Hero({ data }: { data: DevPageData }) {
//   return (
//     <header className="dv-hero">
//       <div className="dv-wrap dv-hero-inner">
//         <div className="dv-grid dv-cols-half dv-center">
//           <div>
//             <span className="dv-tag">{data.eyebrow}</span>
//             <h1 className="dv-title">
//               {data.title} <em>{data.highlight}</em>
//             </h1>
//             <p className="dv-lead">{data.description}</p>
//             <div className="dv-actions">
//               <Link href="/contact" className="dv-btn dv-btn-primary">
//                 Get a free project quote <FiArrowRight />
//               </Link>
//               <a href="#services" className="dv-btn dv-btn-ghost">View services</a>
//             </div>
//           </div>
//           <div>
//             <CodeWindow file={data.file} lines={data.code} />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// function StackStrip({ items }: { items: string[] }) {
//   const group = Array.from({ length: 4 }).flatMap(() => items);
//   return (
//     <div className="dv-strip" aria-hidden="true">
//       <div className="dv-strip-track">
//         {[0, 1].map((g) => (
//           <div key={g} className="dv-strip-group">
//             {group.map((s, i) => (
//               <span key={`${g}-${i}`}>{s}</span>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Services({ items }: { items: Service[] }) {
//   const n = items.length;
//   return (
//     <section className="dv-section dv-paper" id="services">
//       <div className="dv-wrap">
//         <p className="dv-eyebrow">01 / What we build</p>
//         <h2 className="dv-h2">Everything you need, <em>in one place</em></h2>
//         <p className="dv-sub">Focused services that help your business launch, grow and stay reliable.</p>
//         <div className="dv-cards">
//           {items.map((s, i) => {
//             const half = n % 3 === 2 && i >= n - 2; /* last row of 2 gets 2 wider cards */
//             const Icon = s.icon;
//             return (
//               <div key={s.title} className={half ? "dv-cards-half" : undefined}>
//                 <article className="dv-card">
//                   <span className="dv-card-no">{pad(i)}</span>
//                   <div className="dv-card-top">
//                     <span className="dv-icon"><Icon /></span>
//                     <span className="dv-label">{s.label}</span>
//                   </div>
//                   <h3>{s.title}</h3>
//                   <p>{s.text}</p>
//                   <div className="dv-chips">
//                     {s.chips.map((c) => <span key={c}>{c}</span>)}
//                   </div>
//                   <div className="dv-card-foot">
//                     <span>Discuss this service</span>
//                     <span className="dv-arrow"><FiArrowUpRight /></span>
//                   </div>
//                 </article>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Process({ steps }: { steps: Step[] }) {
//   const listRef = useRef<HTMLOListElement>(null);
//   useEffect(() => {
//     const list = listRef.current;
//     if (!list || !("IntersectionObserver" in window)) return;
//     const items = Array.from(list.querySelectorAll<HTMLElement>(".dv-step"));
//     const io = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => {
//           if (e.isIntersecting) {
//             e.target.classList.remove("dv-pre");
//             io.unobserve(e.target);
//           }
//         }),
//       { threshold: 0.15 }
//     );
//     items.forEach((el, i) => {
//       el.style.transitionDelay = `${(i % 4) * 90}ms`;
//       el.classList.add("dv-pre");
//       io.observe(el);
//     });
//     return () => io.disconnect();
//   }, [steps]);
//   return (
//     <section className="dv-section dv-dark">
//       <div className="dv-wrap">
//         <div className="dv-grid dv-cols-5-7">
//           <div>
//             <div className="dv-sticky">
//               <p className="dv-eyebrow">02 / How we work</p>
//               <h2 className="dv-h2">From idea to live <em>in four stages</em></h2>
//               <p className="dv-sub">A clear process, so you always know what happens next.</p>
//               <Link href="/contact" className="dv-btn dv-btn-primary">Start your project <FiArrowRight /></Link>
//             </div>
//           </div>
//           <div>
//             <ol className="dv-steps" ref={listRef}>
//               {steps.map((s, i) => (
//                 <li key={s.title} className="dv-step">
//                   <div className="dv-step-no"><span>{pad(i)}</span></div>
//                   <div className="dv-step-card">
//                     <div className="dv-step-head">
//                       <h3>{s.title}</h3>
//                       <small><FiCheck /> {s.status}</small>
//                     </div>
//                     <p>{s.text}</p>
//                     <div className="dv-chips">
//                       {s.chips.map((c) => <span key={c}>{c}</span>)}
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Why({ data }: { data: DevPageData }) {
//   return (
//     <section className="dv-section">
//       <div className="dv-wrap">
//         <div className="dv-grid dv-cols-5-7 dv-gap-md">
//           <div>
//             <div className="dv-why">
//               <p className="dv-eyebrow">03 / Why Debon Service</p>
//               <h2 className="dv-h2">{data.whyTitle}</h2>
//               <p>{data.whyText}</p>
//               <div className="dv-stack">
//                 {data.stack.map((s) => <span key={s}>{s}</span>)}
//               </div>
//               <Link href="/contact" className="dv-btn dv-btn-primary">Get a free quote <FiArrowRight /></Link>
//             </div>
//           </div>
//           <div>
//             <div className="dv-benefits">
//               {data.benefits.map((b) => {
//                 const Icon = b.icon;
//                 return (
//                   <div key={b.title}>
//                     <div className="dv-benefit">
//                       <span className="dv-icon"><Icon /></span>
//                       <h3>{b.title}</h3>
//                       <p>{b.text}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Faq({ items }: { items: { q: string; a: string }[] }) {
//   const [open, setOpen] = useState<number | null>(0);
//   return (
//     <section className="dv-section dv-paper">
//       <div className="dv-wrap">
//         <div className="dv-grid dv-cols-5-7">
//           <div>
//             <div className="dv-sticky">
//               <p className="dv-eyebrow">04 / Questions</p>
//               <h2 className="dv-h2">Things people <em>ask first</em></h2>
//               <p className="dv-sub">Quick answers to the questions we hear most often.</p>
//               <div className="dv-ask">
//                 <span className="dv-icon"><FiMessageSquare /></span>
//                 <h3>Still have a question?</h3>
//                 <p>Tell us what you need and our team will get back to you.</p>
//                 <Link href="/contact" className="dv-btn dv-btn-primary">Talk to our team <FiArrowRight /></Link>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="dv-faqs">
//               {items.map((f, i) => (
//                 <div key={f.q} className={`dv-faq ${open === i ? "is-open" : ""}`}>
//                   <button type="button" className="dv-faq-btn" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
//                     <span className="dv-faq-num">{pad(i)}</span>
//                     <span className="dv-faq-q">{f.q}</span>
//                     <span className="dv-faq-plus"><FiPlus /></span>
//                   </button>
//                   <div className="dv-faq-body">
//                     <div><p>{f.a}</p></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Cta({ data }: { data: DevPageData }) {
//   return (
//     <section className="dv-cta">
//       <div className="dv-cta-word" aria-hidden="true">
//         <div className="dv-cta-word-track">
//           {[0, 1].map((i) => (
//             <span key={i} className="dv-cta-word-item">
//               {`${data.bigWord} `.repeat(3)}
//             </span>
//           ))}
//         </div>
//       </div>
//       <div className="dv-wrap">
//         <h2>{data.ctaTitle}</h2>
//         <p>{data.ctaText}</p>
//         <Link href="/contact" className="dv-btn dv-btn-primary">Talk to our team <FiArrowRight /></Link>
//       </div>
//     </section>
//   );
// }

// export default function DevServicePage({ data }: { data: DevPageData }) {
//   return (
//     <div className="dv">
//       <Hero data={data} />
//       <StackStrip items={data.stack} />
//       <Services items={data.services} />
//       <Process steps={data.steps} />
//       <Why data={data} />
//       <Faq items={data.faqs} />
//       <Cta data={data} />
//     </div>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FiArrowRight, FiArrowUpRight, FiCheck, FiMessageSquare, FiPlus } from "react-icons/fi";

type Seg = [cls: string, text: string]; // cls: k keyword, s string, c comment, f function, ok success, "" plain
export type Line = Seg[];
export type Service = { icon: IconType; label: string; title: string; text: string; chips: string[] };
export type Step = { title: string; text: string; status: string; chips: string[] };
export type Benefit = { icon: IconType; title: string; text: string };

export type DevPageData = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  file: string;
  code: Line[];
  stack: string[];

  /* section headings (optional, a heading shows only if it is set) */
  servicesEyebrow?: string;
  servicesTitle?: string;
  servicesSub?: string;
  processEyebrow?: string;
  processTitle?: string;
  processSub?: string;
  whyEyebrow?: string;
  faqEyebrow?: string;
  faqTitle?: string;
  faqSub?: string;

  /* buttons and small texts (optional, shown only if set) */
  heroCta?: string;
  heroSecondaryCta?: string;
  cardCta?: string;
  processCta?: string;
  whyCta?: string;
  askTitle?: string;
  askText?: string;
  askCta?: string;
  ctaButton?: string;

  services: Service[];
  steps: Step[];
  whyTitle: string;
  whyText: string;
  benefits: Benefit[];
  faqs: { q: string; a: string }[];
  bigWord: string;
  ctaTitle: string;
  ctaText: string;
};

const pad = (i: number) => String(i + 1).padStart(2, "0");

/* ============================== TYPEWRITER ============================== */
const lineLen = (l: Line) => l.reduce((a, s) => a + s[1].length, 0);

function sliceLine(l: Line, n: number): Line {
  const out: Line = [];
  let left = n;
  for (const [c, t] of l) {
    if (left <= 0) break;
    out.push([c, t.slice(0, left)]);
    left -= t.length;
  }
  return out;
}

function useTypewriter(lines: Line[]) {
  const [pos, setPos] = useState({ li: 0, ci: 0 });
  useEffect(() => {
    const { li, ci } = pos;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (li !== lines.length) setPos({ li: lines.length, ci: 0 });
      return;
    }
    let t: number;
    if (li >= lines.length) t = window.setTimeout(() => setPos({ li: 0, ci: 0 }), 3500);
    else if (ci < lineLen(lines[li])) t = window.setTimeout(() => setPos({ li, ci: ci + 1 }), 26);
    else t = window.setTimeout(() => setPos({ li: li + 1, ci: 0 }), 260);
    return () => window.clearTimeout(t);
  }, [pos, lines]);
  return pos;
}

/* ============================== SECTIONS ============================== */
function CodeWindow({ file, lines }: { file: string; lines: Line[] }) {
  const { li, ci } = useTypewriter(lines);
  return (
    <div className="dv-code" aria-hidden="true">
      <div className="dv-code-bar">
        <i /><i /><i />
        <span>{file}</span>
      </div>
      <div className="dv-code-body" style={{ minHeight: lines.length * 25 + 36 }}>
        {lines.slice(0, li + 1).map((l, i) => {
          const shown = i < li ? l : sliceLine(l, ci);
          const cursor = i === li || (li >= lines.length && i === lines.length - 1);
          return (
            <div key={i}>
              {shown.length === 0 && !cursor ? "\u00A0" : null}
              {shown.map(([c, t], k) => (
                <span key={k} className={c ? `dv-${c}` : undefined}>{t}</span>
              ))}
              {cursor && <span className="dv-cur" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Hero({ data }: { data: DevPageData }) {
  return (
    <header className="dv-hero">
      <div className="dv-wrap dv-hero-inner">
        <div className="dv-grid dv-cols-half dv-center">
          <div>
            <span className="dv-tag">{data.eyebrow}</span>
            <h1 className="dv-title">
              {data.title} <em>{data.highlight}</em>
            </h1>
            <p className="dv-lead">{data.description}</p>
            <div className="dv-actions">
              {data.heroCta && (
                <Link href="/contact" className="dv-btn dv-btn-primary">
                  {data.heroCta} <FiArrowRight />
                </Link>
              )}
              {data.heroSecondaryCta && (
                <a href="#services" className="dv-btn dv-btn-ghost">{data.heroSecondaryCta}</a>
              )}
            </div>
          </div>
          <div>
            <CodeWindow file={data.file} lines={data.code} />
          </div>
        </div>
      </div>
    </header>
  );
}

function StackStrip({ items }: { items: string[] }) {
  const group = Array.from({ length: 4 }).flatMap(() => items);
  return (
    <div className="dv-strip" aria-hidden="true">
      <div className="dv-strip-track">
        {[0, 1].map((g) => (
          <div key={g} className="dv-strip-group">
            {group.map((s, i) => (
              <span key={`${g}-${i}`}>{s}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Services({ data }: { data: DevPageData }) {
  const items = data.services;
  const n = items.length;
  return (
    <section className="dv-section dv-paper" id="services">
      <div className="dv-wrap">
        {data.servicesEyebrow && <p className="dv-eyebrow">{data.servicesEyebrow}</p>}
        {data.servicesTitle && <h2 className="dv-h2">{data.servicesTitle}</h2>}
        {data.servicesSub && <p className="dv-sub">{data.servicesSub}</p>}
        <div className="dv-cards">
          {items.map((s, i) => {
            const half = n % 3 === 2 && i >= n - 2; /* last row of 2 gets 2 wider cards */
            const Icon = s.icon;
            return (
              <div key={s.title} className={half ? "dv-cards-half" : undefined}>
                <article className="dv-card">
                  <span className="dv-card-no">{pad(i)}</span>
                  <div className="dv-card-top">
                    <span className="dv-icon"><Icon /></span>
                    <span className="dv-label">{s.label}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="dv-chips">
                    {s.chips.map((c) => <span key={c}>{c}</span>)}
                  </div>
                  {data.cardCta && (
                    <div className="dv-card-foot">
                      <span>{data.cardCta}</span>
                      <span className="dv-arrow"><FiArrowUpRight /></span>
                    </div>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process({ data }: { data: DevPageData }) {
  const steps = data.steps;
  const listRef = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const list = listRef.current;
    if (!list || !("IntersectionObserver" in window)) return;
    const items = Array.from(list.querySelectorAll<HTMLElement>(".dv-step"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("dv-pre");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    items.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 90}ms`;
      el.classList.add("dv-pre");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [steps]);
  return (
    <section className="dv-section dv-dark">
      <div className="dv-wrap">
        <div className="dv-grid dv-cols-5-7">
          <div>
            <div className="dv-sticky">
              {data.processEyebrow && <p className="dv-eyebrow">{data.processEyebrow}</p>}
              {data.processTitle && <h2 className="dv-h2">{data.processTitle}</h2>}
              {data.processSub && <p className="dv-sub">{data.processSub}</p>}
              {data.processCta && (
                <Link href="/contact" className="dv-btn dv-btn-primary">{data.processCta} <FiArrowRight /></Link>
              )}
            </div>
          </div>
          <div>
            <ol className="dv-steps" ref={listRef}>
              {steps.map((s, i) => (
                <li key={s.title} className="dv-step">
                  <div className="dv-step-no"><span>{pad(i)}</span></div>
                  <div className="dv-step-card">
                    <div className="dv-step-head">
                      <h3>{s.title}</h3>
                      <small><FiCheck /> {s.status}</small>
                    </div>
                    <p>{s.text}</p>
                    <div className="dv-chips">
                      {s.chips.map((c) => <span key={c}>{c}</span>)}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Why({ data }: { data: DevPageData }) {
  return (
    <section className="dv-section">
      <div className="dv-wrap">
        <div className="dv-grid dv-cols-5-7 dv-gap-md">
          <div>
            <div className="dv-why">
              {data.whyEyebrow && <p className="dv-eyebrow">{data.whyEyebrow}</p>}
              <h2 className="dv-h2">{data.whyTitle}</h2>
              <p>{data.whyText}</p>
              <div className="dv-stack">
                {data.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
              {data.whyCta && (
                <Link href="/contact" className="dv-btn dv-btn-primary">{data.whyCta} <FiArrowRight /></Link>
              )}
            </div>
          </div>
          <div>
            <div className="dv-benefits">
              {data.benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title}>
                    <div className="dv-benefit">
                      <span className="dv-icon"><Icon /></span>
                      <h3>{b.title}</h3>
                      <p>{b.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq({ data }: { data: DevPageData }) {
  const items = data.faqs;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="dv-section dv-paper">
      <div className="dv-wrap">
        <div className="dv-grid dv-cols-5-7">
          <div>
            <div className="dv-sticky">
              {data.faqEyebrow && <p className="dv-eyebrow">{data.faqEyebrow}</p>}
              {data.faqTitle && <h2 className="dv-h2">{data.faqTitle}</h2>}
              {data.faqSub && <p className="dv-sub">{data.faqSub}</p>}
              {data.askTitle && (
                <div className="dv-ask">
                  <span className="dv-icon"><FiMessageSquare /></span>
                  <h3>{data.askTitle}</h3>
                  {data.askText && <p>{data.askText}</p>}
                  {data.askCta && (
                    <Link href="/contact" className="dv-btn dv-btn-primary">{data.askCta} <FiArrowRight /></Link>
                  )}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="dv-faqs">
              {items.map((f, i) => (
                <div key={f.q} className={`dv-faq ${open === i ? "is-open" : ""}`}>
                  <button type="button" className="dv-faq-btn" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                    <span className="dv-faq-num">{pad(i)}</span>
                    <span className="dv-faq-q">{f.q}</span>
                    <span className="dv-faq-plus"><FiPlus /></span>
                  </button>
                  <div className="dv-faq-body">
                    <div><p>{f.a}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta({ data }: { data: DevPageData }) {
  return (
    <section className="dv-cta">
      <div className="dv-cta-word" aria-hidden="true">
        <div className="dv-cta-word-track">
          {[0, 1].map((i) => (
            <span key={i} className="dv-cta-word-item">
              {`${data.bigWord} `.repeat(3)}
            </span>
          ))}
        </div>
      </div>
      <div className="dv-wrap">
        <h2>{data.ctaTitle}</h2>
        <p>{data.ctaText}</p>
        {data.ctaButton && (
          <Link href="/contact" className="dv-btn dv-btn-primary">{data.ctaButton} <FiArrowRight /></Link>
        )}
      </div>
    </section>
  );
}

export default function DevServicePage({ data }: { data: DevPageData }) {
  return (
    <div className="dv">
      <Hero data={data} />
      <StackStrip items={data.stack} />
      <Services data={data} />
      {/* <Process data={data} /> */}
      <Why data={data} />
      {/* <Faq data={data} /> */}
      <Cta data={data} />
    </div>
  );
}
