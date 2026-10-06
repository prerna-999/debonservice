"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const INSIGHTS = [
  {
    tag: "SEARCH STRATEGY",
    title: "What should a useful SEO roadmap measure first?",
    text: "Start with the signals that connect visibility to business value.",
    img: "/assets/img/all-img/home/home-about-1.avif",
    alt: "Search analytics on a computer",
  },
  {
    tag: "AI DISCOVERY",
    title: "How can a brand become easier for AI search to understand?",
    text: "Clear expertise and well structured information are practical foundations.",
    img: "/assets/img/all-img/home/home-about-2.avif",
    alt: "Abstract representation of artificial intelligence",
  },
  {
    tag: "CONVERSION",
    title: "What makes a landing page worth a second look?",
    text: "A strong promise, useful proof and a simple next step.",
    img: "/assets/img/all-img/home/home-about-1.avif",
    alt: "Digital commerce purchase experience",
  },
];

export default function Insights() {
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
    <section className="home-insights" id="insights" aria-labelledby="insights-title" ref={rootRef}>
      <Container>
        {/* ---- Heading ---- */}
        <Row className="home-insights__head align-items-end">
          <Col md={7}>
            <p className="home-insights__eyebrow" data-reveal>
              13 / Insights
            </p>
            <h2 id="insights-title" className="home-insights__title" data-reveal>
              Questions shaping
              <br />
              <em>tomorrow&apos;s marketing</em>
            </h2>
          </Col>
          <Col md={5}>
            <p className="home-insights__intro" data-reveal>
              Starting points for conversations about search, content and performance. Full articles can be added
              when your editorial library is ready.
            </p>
          </Col>
        </Row>

        <Row className="home-insights__grid">
          {INSIGHTS.map((item) => (
            <Col key={item.tag} xs={12} sm={6} lg={4}>
              <article className="home-insights__card" data-reveal>
                <div className="home-insights__image">
                  <Image src={item.img} alt={item.alt} fill sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw" />
                </div>
                <div className="home-insights__body">
                  <span className="home-insights__tag">{item.tag}</span>
                  <h3 className="home-insights__card-title">{item.title}</h3>
                  <p className="home-insights__text">{item.text}</p>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}