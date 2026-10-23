
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function About() {
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

      gsap.to(".home-about__images", {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-about__images",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-about" id="about" aria-labelledby="about-title" ref={rootRef}>
      <Container>
        <Row className="home-about__row align-items-center">
          <Col md={6}>
            <div className="home-about__images" data-reveal>
              <div className="home-about__primary">
                <Image
                  src="/assets/img/all-img/home/home-about-1.avif"
                  alt="Marketing team planning a campaign"
                  fill
                  sizes="(max-width: 768px) 83vw, 40vw"
                />
              </div>
              <div className="home-about__secondary">
                <Image
                  src="/assets/img/all-img/home/home-about-2.avif"
                  alt="Colleagues reviewing ideas together"
                  fill
                  sizes="(max-width: 768px) 45vw, 22vw"
                />
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="home-about__copy">
              <p className="home-about__eyebrow" data-reveal>
               About Debonaire Capital Asset
              </p>
              <h2 id="about-title" className="home-about__title" data-reveal>
                Your Vision
                <br />
                <em>Our Strategy</em>
                <br />
                Shared Growth
              </h2>
              <p className="home-about__text" data-reveal>
                Debonaire Capital Asset is a leading digital growth marketing agency that integrates marketing, technology, and business solutions in a strategic way so brands like yours can strive for progress with confidence. We convert complicated problems into easy solutions and effective online experiences. 

              </p>
              <p className="home-about__text" data-reveal>
              With the help of strategic digital marketing services, website, app and software development services and advanced AI solutions, we connect every element to your business goals. To bring remarkable results, we leverage creativity in implementation and analytical skills in optimisation. We also provide business operations & corporate support services and flexible co-sharing & workspace for rent.

              </p>
              <Link href="/about" className="home-about__link" data-reveal>
              Know more
                <ArrowUpRight size={18} strokeWidth={2.4} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}