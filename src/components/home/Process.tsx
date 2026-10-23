
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