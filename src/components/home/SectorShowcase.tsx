// "use client";
// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Container, Row, Col } from "react-bootstrap";
// import { ArrowUpRight, ArrowLeft, ArrowRight, Plus } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// type Sector = {
//   label: string;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
//   services: string[];
//   theme: "retail" | "technology" | "healthcare" | "property";
// };

// const SECTORS: Sector[] = [
//   {
//     label: "Retail & commerce",
//     title: "Make every product discovery count",
//     description:
//       "Bring search, paid media and a simpler purchase journey together so interest has a clear path to checkout.",
//     image: "",
//     link: "Explore commerce opportunities",
//     services: ["Shopping search", "Performance campaigns", "Product storytelling", "Conversion design"],
//     theme: "retail",
//   },
//   {
//     label: "Technology & SaaS",
//     title: "Make complex products easier to choose",
//     description:
//       "Translate technical value into a useful story for every buyer, from first discovery to a confident demo request.",
//     image: "", 
//     link: "Explore technology growth",
//     services: ["AI search visibility", "Thought leadership", "Demand generation", "Conversion journeys"],
//     theme: "technology",
//   },
//   {
//     label: "Healthcare",
//     title: "Build trust before the first appointment",
//     description:
//       "Help people find clear answers, understand their options and feel confident taking the next step in their care.",
//     image: "",
//     link: "Explore healthcare growth",
//     services: ["Local search", "Helpful content", "Reputation signals", "Patient journeys"],
//     theme: "healthcare",
//   },
//   {
//     label: "Real estate",
//     title: "Turn local attention into better enquiries",
//     description:
//       "Connect place, property and intent through compelling campaigns and a clearer route to the right listing.",
//     image: "",
//     link: "Explore property growth",
//     services: ["Local visibility", "Listing content", "Paid lead generation", "Enquiry optimization"],
//     theme: "property",
//   },
// ];

// export default function SectorShowcase() {
//   const rootRef = useRef<HTMLElement>(null);
//   const focusNext = useRef(false);
//   const [current, setCurrent] = useState(1); 

//   const activate = (index: number) => setCurrent((index + SECTORS.length) % SECTORS.length);

//   useEffect(() => {
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
//     gsap.registerPlugin(ScrollTrigger);
//     const ctx = gsap.context(() => {
//       gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
//         gsap.from(el, {
//           y: 34,
//           duration: 0.85,
//           ease: "power3.out",
//           clearProps: "all",
//           scrollTrigger: { trigger: el, start: "top 91%", toggleActions: "play none none reverse", invalidateOnRefresh: true },
//         });
//       });
//     }, rootRef);
//     return () => ctx.revert();
//   }, []);

//   useEffect(() => {
//     if (!focusNext.current) return;
//     focusNext.current = false;
//     rootRef.current
//       ?.querySelector<HTMLButtonElement>(`[data-sector-panel="${current}"] [data-sector-direction="next"]`)
//       ?.focus();
//   }, [current]);

//   const onKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
//     if (!(e.target as HTMLElement).closest(".home-sector__toggle")) return;
//     e.preventDefault();
//     focusNext.current = true;
//     activate(current + (e.key === "ArrowRight" ? 1 : -1));
//   };

//   return (
//     <section className="home-sector" id="sector-showcase" aria-labelledby="sector-showcase-title" ref={rootRef}>
//       <Container >
//         <Row className="home-sector__head align-items-end">
//           <Col md={7}>
//             <p className="home-sector__eyebrow" data-reveal>
//               07A / Sector focus
//             </p>
//             <h2 id="sector-showcase-title" className="home-sector__title" data-reveal>
//               Every market has
//               <br />
//               <em>its own momentum</em>
//             </h2>
//           </Col>
//           <Col md={5}>
//             <p className="home-sector__intro" data-reveal>
//               Choose a sector to see how the right mix of visibility, storytelling and conversion can meet its
//               buyers where they are.
//             </p>
//           </Col>
//         </Row>

//         <Row
//           className="home-sector__panels g-0"
//           aria-label="Explore sector opportunities"
//           onKeyDown={onKeyDown}
//           data-reveal
//         >
//           {SECTORS.map((s, i) => {
//             const active = i === current;
//             return (
//               <Col key={s.label} className={`home-sector__col ${active ? "is-active" : ""}`}>
//                 <article
//                   className={`home-sector__panel home-sector__panel--${s.theme}`}
//                   data-sector-panel={i}
//                   onClick={(e) => {
//                     if (!active && !(e.target as HTMLElement).closest("button, a")) activate(i);
//                   }}
//                 >
//                   <Image
//                     className="home-sector__image"
//                     src={s.image}
//                     alt=""
//                     fill
//                     sizes="(max-width: 700px) 100vw, 60vw"
//                   />
//                   <div className="home-sector__shade" aria-hidden="true" />

//                   <button
//                     type="button"
//                     className="home-sector__toggle"
//                     aria-expanded={active}
//                     aria-controls={`sector-content-${i}`}
//                     aria-label={`${active ? "Current sector: " : "Expand "}${s.label}`}
//                     disabled={active}
//                     onClick={() => activate(i)}
//                   >
//                     <span className="home-sector__marker" aria-hidden="true" />
//                     <span className="home-sector__label">{s.label}</span>
//                     <span className="home-sector__plus" aria-hidden="true">
//                       <Plus size={24} strokeWidth={1.6} />
//                     </span>
//                   </button>

//                   <div className="home-sector__content" id={`sector-content-${i}`} inert={!active}>
//                     <div className="home-sector__story">
//                       <h3>{s.title}</h3>
//                       <p>{s.description}</p>
//                       <Link href="#contact">
//                         {s.link}
//                         <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
//                       </Link>
//                     </div>

//                     <div className="home-sector__bottom">
//                       <div className="home-sector__services">
//                         <span>FOCUS AREAS</span>
//                         <ul>
//                           {s.services.map((service) => (
//                             <li key={service}>{service}</li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div className="home-sector__arrows">
//                         <button
//                           type="button"
//                           data-sector-direction="previous"
//                           aria-label="Previous sector"
//                           onClick={() => activate(current - 1)}
//                         >
//                           <ArrowLeft size={22} strokeWidth={2} />
//                         </button>
//                         <button
//                           type="button"
//                           data-sector-direction="next"
//                           aria-label="Next sector"
//                           onClick={() => activate(current + 1)}
//                         >
//                           <ArrowRight size={22} strokeWidth={2} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               </Col>
//             );
//           })}
//         </Row>
//       </Container>
//     </section>
//   );
// }


"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight, ArrowLeft, ArrowRight, Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Sector = {
  label: string;
  title: string;
  description: string;
  image: string;
  link: string;
  services: string[];
  theme: "retail" | "technology" | "healthcare" | "property";
};

const SECTORS: Sector[] = [
  {
    label: "Retail & commerce",
    title: "Make every product discovery count",
    description:
      "Bring search, paid media and a simpler purchase journey together so interest has a clear path to checkout.",
    image: "",
    link: "Explore commerce opportunities",
    services: ["Shopping search", "Performance campaigns", "Product storytelling", "Conversion design"],
    theme: "retail",
  },
  {
    label: "Technology & SaaS",
    title: "Make complex products easier to choose",
    description:
      "Translate technical value into a useful story for every buyer, from first discovery to a confident demo request.",
    image: "", // put the svg in public/assets/img/
    link: "Explore technology growth",
    services: ["AI search visibility", "Thought leadership", "Demand generation", "Conversion journeys"],
    theme: "technology",
  },
  {
    label: "Healthcare",
    title: "Build trust before the first appointment",
    description:
      "Help people find clear answers, understand their options and feel confident taking the next step in their care.",
    image: "",
    link: "Explore healthcare growth",
    services: ["Local search", "Helpful content", "Reputation signals", "Patient journeys"],
    theme: "healthcare",
  },
  {
    label: "Real estate",
    title: "Turn local attention into better enquiries",
    description:
      "Connect place, property and intent through compelling campaigns and a clearer route to the right listing.",
    image: "",
    link: "Explore property growth",
    services: ["Local visibility", "Listing content", "Paid lead generation", "Enquiry optimization"],
    theme: "property",
  },
  {
    label: "Real estate",
    title: "Turn local attention into better enquiries",
    description:
      "Connect place, property and intent through compelling campaigns and a clearer route to the right listing.",
    image: "",
    link: "Explore property growth",
    services: ["Local visibility", "Listing content", "Paid lead generation", "Enquiry optimization"],
    theme: "property",
  },
];

export default function SectorShowcase() {
  const rootRef = useRef<HTMLElement>(null);
  const focusNext = useRef(false);
  const [current, setCurrent] = useState(1); // Technology & SaaS opens first

  const activate = (index: number) => setCurrent((index + SECTORS.length) % SECTORS.length);

  // scroll reveal
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 34,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: { trigger: el, start: "top 91%", toggleActions: "play none none reverse", invalidateOnRefresh: true },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  // after an arrow-key switch, move focus to the new panel's "next" button
  useEffect(() => {
    if (!focusNext.current) return;
    focusNext.current = false;
    rootRef.current
      ?.querySelector<HTMLButtonElement>(`[data-sector-panel="${current}"] [data-sector-direction="next"]`)
      ?.focus();
  }, [current]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    if (!(e.target as HTMLElement).closest(".home-sector__toggle")) return;
    e.preventDefault();
    focusNext.current = true;
    activate(current + (e.key === "ArrowRight" ? 1 : -1));
  };

  return (
    <section className="home-sector" id="sector-showcase" aria-labelledby="sector-showcase-title" ref={rootRef}>
      <Container fluid className="home-sector__container">
        {/* ---- Heading ---- */}
        <Row className="home-sector__head align-items-end">
          <Col md={7}>
            <p className="home-sector__eyebrow" data-reveal>
              07A / Sector focus
            </p>
            <h2 id="sector-showcase-title" className="home-sector__title" data-reveal>
              Every market has
              <br />
              <em>its own momentum</em>
            </h2>
          </Col>
          <Col md={5}>
            <p className="home-sector__intro" data-reveal>
              Choose a sector to see how the right mix of visibility, storytelling and conversion can meet its
              buyers where they are.
            </p>
          </Col>
        </Row>

        {/* ---- Panels (accordion) ---- */}
        <Row
          className="home-sector__panels g-0"
          aria-label="Explore sector opportunities"
          onKeyDown={onKeyDown}
          data-reveal
        >
          {SECTORS.map((s, i) => {
            const active = i === current;
            return (
              <Col key={s.label} className={`home-sector__col ${active ? "is-active" : ""}`}>
                <article
                  className={`home-sector__panel home-sector__panel--${s.theme}`}
                  data-sector-panel={i}
                  onClick={(e) => {
                    if (!active && !(e.target as HTMLElement).closest("button, a")) activate(i);
                  }}
                >
                  <Image
                    className="home-sector__image"
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 100vw, 60vw"
                  />
                  <div className="home-sector__shade" aria-hidden="true" />

                  <button
                    type="button"
                    className="home-sector__toggle"
                    aria-expanded={active}
                    aria-controls={`sector-content-${i}`}
                    aria-label={`${active ? "Current sector: " : "Expand "}${s.label}`}
                    disabled={active}
                    onClick={() => activate(i)}
                  >
                    <span className="home-sector__marker" aria-hidden="true" />
                    <span className="home-sector__label">{s.label}</span>
                    <span className="home-sector__plus" aria-hidden="true">
                      <Plus size={28} strokeWidth={1.3} />
                    </span>
                  </button>

                  <div className="home-sector__content" id={`sector-content-${i}`} inert={!active}>
                    <div className="home-sector__story">
                      <h3>{s.title}</h3>
                      <p>{s.description}</p>
                      <Link href="#contact">
                        {s.link}
                        <ArrowUpRight size={15} strokeWidth={2.4} aria-hidden="true" />
                      </Link>
                    </div>

                    <div className="home-sector__bottom">
                      <div className="home-sector__services">
                        <span>FOCUS AREAS</span>
                        <ul>
                          {s.services.map((service) => (
                            <li key={service}>{service}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="home-sector__arrows">
                        <button
                          type="button"
                          data-sector-direction="previous"
                          aria-label="Previous sector"
                          onClick={() => activate(current - 1)}
                        >
                          <ArrowLeft size={26} strokeWidth={1.5} />
                        </button>
                        <button
                          type="button"
                          data-sector-direction="next"
                          aria-label="Next sector"
                          onClick={() => activate(current + 1)}
                        >
                          <ArrowRight size={26} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}