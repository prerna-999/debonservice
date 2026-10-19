



"use client";

import { Container, Row, Col } from "./Grid";
import SectionHeading from "./SectionHeading";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type ProcessStep = {
  title: string;
  description: string;
};

type ProcessSectionProps = {
  eyebrow?: string;
  title?: string;
  stepList?: ProcessStep[];
};

const processStepList: ProcessStep[] = [
  { title: "Get the Idea Rolling", description: "We understand your goals, ideas and requirements before we start building." },
  { title: "Plan Before We Build", description: "We map out the design, features and technology that fit your needs." },
  { title: "Build, Test, Perfect", description: "We bring your idea to life, test every detail and fine-tune it along the way." },
  { title: "Launch and Let It Fly", description: "We get your website or app ready to go live and help you take the next step." },
];

const ProcessSection = ({
  eyebrow = "Our Process",
  title = "From “What If?” to “It’s Live!”",
  stepList = processStepList,
}: ProcessSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const q = gsap.utils.selector(section);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const heading = q(".web-app-development-section-heading")[0];
      if (heading) {
        gsap.from(heading, {
          y: 24, autoAlpha: 0, duration: 0.7, ease: "power3.out", clearProps: "opacity,visibility,transform",
          scrollTrigger: { trigger: heading, start: "top 88%", once: true },
        });
      }

      const revealOnScroll = (targetList: Element[], from: gsap.TweenVars, stagger: number) => {
        if (!targetList.length) return;
        gsap.set(targetList, { autoAlpha: 0, ...from });
        ScrollTrigger.batch(targetList, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1, x: 0, y: 0, scale: 1,
              duration: 0.7, stagger, ease: "power3.out",
              overwrite: true, clearProps: "opacity,visibility,transform",
            }),
        });
      };

      revealOnScroll(q(".web-app-development-process-card"), { y: 32 }, 0.1);
    });

    return () => mm.revert();
  }, []);

  return (
  <section ref={sectionRef} className="web-app-development-process-section">
    <Container>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <Row>
        {stepList.map((step, stepIndex) => (
          <Col key={step.title} xs={12} sm={6} lg={3}>
            <article className="web-app-development-process-card">
              <span className="web-app-development-process-card-number">
                {stepIndex + 1}
              </span>
              <h3 className="web-app-development-process-card-title">{step.title}</h3>
              <p className="web-app-development-process-card-description">
                {step.description}
              </p>
            </article>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
  );
};

export default ProcessSection;