"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight } from "lucide-react";
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
          scrollTrigger: { trigger: el, start: "top 91%", toggleActions: "play none none reverse", invalidateOnRefresh: true },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="home-consult" aria-labelledby="consult-title" ref={rootRef}>
      <Container>
        <Row className="home-consult__row align-items-end">
          <Col lg={8}>
            <p className="home-consult__eyebrow" data-reveal>
              Ready to move?
            </p>
            <h2 id="consult-title" className="home-consult__title" data-reveal>
              Let&apos;s make the next
              <br />
              decision <em>clearer</em>
            </h2>
          </Col>

          <Col lg={4}>
            <div data-reveal>
              <p className="home-consult__text">
                Tell us the growth problem in front of you. We will help identify where better visibility, better
                creative or a better conversion path can make a difference.
              </p>
              <Link href="#contact" className="home-consult__btn">
                Talk with our team
                <ArrowUpRight size={20} strokeWidth={2.4} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}