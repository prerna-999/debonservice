// "use client";
// import { useEffect, useRef } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const STEPS = [
//   { title: "Discover", text: "Understand your business, audience, competitors and existing performance." },
//   { title: "Plan", text: "Prioritise the channels and messages most likely to move your goal." },
//   { title: "Build", text: "Launch content, campaigns and customer journeys with tracking in place." },
//   { title: "Improve", text: "Test, review, report and scale what the evidence supports." },
// ];

// export default function Process() {
//   const rootRef = useRef<HTMLElement>(null);
//   const gridRef = useRef<HTMLDivElement>(null);
//   const pathRef = useRef<SVGPathElement>(null);

//   useEffect(() => {
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
//     // gsap.registerPlugin(ScrollTrigger);

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

//       const path = pathRef.current;
//       if (!path) return;
//       const length = path.getTotalLength();
//       gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

//       const mm = gsap.matchMedia();
//       mm.add("(min-width: 1200px)", () => {
//         gsap.to(path, {
//           strokeDashoffset: 0,
//           ease: "none",
//           scrollTrigger: {
//             trigger: rootRef.current,
//             start: "top top",
//             end: "bottom bottom",
//             scrub: 0.6,
//             invalidateOnRefresh: true,
//           },
//         });
//       });
//       mm.add("(max-width: 1199px)", () => {
//         gsap.to(path, {
//           strokeDashoffset: 0,
//           ease: "none",
//           scrollTrigger: {
//             trigger: gridRef.current,
//             start: "top 85%",
//             end: "bottom 55%",
//             scrub: 0.6,
//             invalidateOnRefresh: true,
//           },
//         });
//       });
//     }, rootRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="home-process" id="process" aria-labelledby="process-title" ref={rootRef}>
//       <Container  className="home-process__container">
//         <Row className="home-process__head align-items-end">
//           <Col md={7}>
//             <p className="home-process__eyebrow" data-reveal>
//               05 / How we work
//             </p>
//             <h2 id="process-title" className="home-process__title" data-reveal>
//               From first question
//               <br />
//               to <em>forward motion</em>
//             </h2>
//           </Col>
//           <Col md={5}>
//             <p className="home-process__intro" data-reveal>
//               Our process keeps the work focused while leaving room to learn from the market as it changes.
//             </p>
//           </Col>
//         </Row>

//         <div className="home-process__grid" ref={gridRef}>
//           <div className="home-process__line" aria-hidden="true">
//             <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
//               <path ref={pathRef} d="M0 50H1000" />
//             </svg>
//           </div>

//           <Row className="home-process__steps">
//             {STEPS.map((step, i) => (
//               <Col key={step.title} xs={12} sm={6} xl={3}>
//                 <article className="home-process__step" data-reveal>
//                   <span className="home-process__num">{String(i + 1).padStart(2, "0")}</span>
//                   <h3 className="home-process__step-title">{step.title}</h3>
//                   <p className="home-process__text">{step.text}</p>
//                 </article>
//               </Col>
//             ))}
//           </Row>
//         </div>
//       </Container>
//     </section>
//   );
// }


"use client";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STEPS = [
  {
    title: "Spill the Big Idea.",
    text: "Tell us where you are and where you want to go. We will figure out what will work for you and what won’t. You brew the vision; we spill beans the right way.",
  },
  {
    title: "Find the Missing Piece.",
    text: "We will dig deeper to challenge assumptions and unveil the hidden opportunities. We know exactly how to find the missing piece of your maze.",
  },
  {
    title: "Put the Pieces Together.",
    text: "We put all the missing pieces together. We provide selective martech services, advanced AI solutions, business support and high-potential workspaces.",
  },
  {
    title: "Make Your Next Move.",
    text: "We launch, learn & optimise your next move. Our futuristic planning helps you turn the basic plan on paper into visible progress leading to new possibilities.",
  },
];

export default function Process() {
  const rootRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const steps = gsap.utils.toArray<HTMLElement>(".home-process__step");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      steps.forEach((el) => el.classList.add("is-active"));
      if (fillRef.current) gsap.set(fillRef.current, { scaleY: 1 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 34,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: el,
            start: "top 91%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });

      // timeline line fills while scrolling
      gsap.fromTo(
        fillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 65%",
            end: "bottom 65%",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        }
      );

      // each step lights up when it reaches the reading area
      steps.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 65%",
          onEnter: () => el.classList.add("is-active"),
          onLeaveBack: () => el.classList.remove("is-active"),
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-process" id="process" aria-labelledby="process-title" ref={rootRef}>
      <Container>
        <Row className="home-process__row">
          <Col lg={5}>
            <div className="home-process__sticky">
              <p className="home-process__eyebrow" data-reveal>
                Here’s how we work.
              </p>
              <h2 id="process-title" className="home-process__title" data-reveal>
                Good Things Don&apos;t Just Happen.
                <br />
                <em>Here&apos;s How We Make Them.</em>
              </h2>
              <p className="home-process__intro" data-reveal>
                We are there with you at every step!
              </p>
            </div>
          </Col>

          <Col lg={7}>
            <div className="home-process__list" ref={listRef}>
              <div className="home-process__track" aria-hidden="true">
                <div className="home-process__fill" ref={fillRef} />
              </div>

              {STEPS.map((step, i) => (
                <article className="home-process__step" key={step.title}>
                  <span className="home-process__num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="home-process__body">
                    <h3 className="home-process__step-title">{step.title}</h3>
                    <p className="home-process__text">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}