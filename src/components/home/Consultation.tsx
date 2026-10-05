// "use client";
// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import { Container } from "react-bootstrap";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function Consultation() {
//   const rootRef = useRef<HTMLElement>(null);

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
//           scrollTrigger: {
//             trigger: el,
//             start: "top 91%",
//             toggleActions: "play none none reverse",
//             invalidateOnRefresh: true,
//           },
//         });
//       });
//     }, rootRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="home-consultation" id="consultation" aria-labelledby="consult-title" ref={rootRef}>
//       <Container fluid className="home-consultation__container">
//         <div className="home-consultation__layout">
//           <div>
//             <p className="home-consultation__eyebrow" data-reveal>
//               Ready to move?
//             </p>
//             <h2 id="consult-title" className="home-consultation__title" data-reveal>
//               Let&apos;s make the next
//               <br />
//               decision <em>clearer</em>
//             </h2>
//           </div>

//           <div data-reveal>
//             <p className="home-consultation__text">
//               Tell us the growth problem in front of you. We will help identify where better visibility, better creative
//               or a better conversion path can make a difference.
//             </p>
//             <Link href="#contact" className="home-consultation__btn">
//               Talk with our team <span aria-hidden="true">↗</span>
//             </Link>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }


"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Consultation() {
  const rootRef = useRef<HTMLElement>(null);

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
          scrollTrigger: {
            trigger: el,
            start: "top 91%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-consultation" id="consultation" aria-labelledby="consult-title" ref={rootRef}>
      <Container fluid className="home-consultation__container">
        <div className="home-consultation__layout">
          {/* ---- Heading ---- */}
          <div>
            <p className="home-consultation__eyebrow" data-reveal>
              Ready to move?
            </p>
            <h2 id="consult-title" className="home-consultation__title" data-reveal>
              Let&apos;s make the next
              <br />
              decision <em>clearer</em>
            </h2>
          </div>

          <div data-reveal>
            <p className="home-consultation__text">
              Tell us the growth problem in front of you. We will help identify where better visibility, better creative
              or a better conversion path can make a difference.
            </p>
            <Link href="#contact" className="home-consultation__btn">
              Talk with our team <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}