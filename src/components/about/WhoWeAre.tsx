


"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STATS = [
  { value: 230, suffix: "+", label: "Projects" },
  { value: 5, suffix: "+", label: "Years" },
];

export default function WhoWeAre() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 34,
          autoAlpha: 0,
          duration: 0.85,
          delay: Number(el.dataset.delay || 0),
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: { trigger: el, start: "top 91%", toggleActions: "play none none reverse", invalidateOnRefresh: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const o = { v: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () =>
            gsap.to(o, { v: end, duration: 1.8, ease: "power2.out", onUpdate: () => (el.textContent = Math.round(o.v) + suffix) }),
        });
      });
      gsap.from(".about-who__line", { scaleY: 0, transformOrigin: "top", duration: 1.2, ease: "power3.inOut", scrollTrigger: { trigger: ".about-who__stats", start: "top 85%" } });
      gsap.from(".about-who__circle", { scale: 0, duration: 1, ease: "back.out(1.6)", scrollTrigger: { trigger: ".about-who__visual", start: "top 80%" } });
      gsap.fromTo(".about-who__photo", { y: 24 }, { y: -24, ease: "none", scrollTrigger: { trigger: ".about-who__visual", start: "top bottom", end: "bottom top", scrub: 1 } });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-who" id="who" aria-labelledby="who-title" ref={rootRef}>
      <Container>
        <Row className="align-items-center">
          <Col xl={5} lg={6}>
            <div className="about-who__copy">
              <div>
                 <h2 id="who-title" className="about-title" data-reveal>
                   Your Digital Growth & <em>Business Support Partner</em>
               </h2>
                <p className="about-text" data-reveal>
                  Debonaire Capital Assets is a full-service Digital Marketing &amp; Technology solutions company helping businesses build stronger digital brands, generate qualified leads, find flexible workspaces and accelerate sustainable growth. From high-performance websites and software solutions to SEO, AI SEO, social media, performance marketing, content, branding, analytics, and affordable workspaces, we provide end-to-end support tailored to each client&apos;s business objectives.
                </p>
              </div>
            </div>
          </Col>

          <Col xl={2} lg={6}>
            <div className="about-who__stats">
              <span className="about-who__line" aria-hidden="true" />
              {STATS.map((s, i) => (
                <div key={s.label} className="about-who__stat" data-reveal data-delay={i * 0.1}>
                  <b data-count={s.value} data-suffix={s.suffix}>{s.value}{s.suffix}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Col>

          <Col xl={5} lg={12}>
            <div className="about-who__visual" data-reveal>
              <span className="about-who__circle" aria-hidden="true" />
              <div className="about-who__photo">
                <Image src="/assets/img/all-img/home/home-about-1.avif" alt="Our team collaborating" fill sizes="(max-width: 992px) 90vw, 36vw" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}