"use client";

import type { IconType } from "react-icons";
import { FiGlobe, FiSmartphone, FiCpu, FiCheck, FiArrowRight } from "react-icons/fi";
import { Container, Row, Col } from "./Grid";
import SectionHeading from "./SectionHeading";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type ServiceOverview = {
  anchor: string;
  icon: IconType;
  title: string;
  description: string;
  pointList: string[];
};

type ServiceOverviewSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  serviceList?: ServiceOverview[];
};

const serviceOverviewList: ServiceOverview[] = [
  {
    anchor: "web-development",
    icon: FiGlobe,
    title: "Web development",
    description:
      "Fast, responsive websites and web apps that turn visitors into customers.",
    pointList: ["Business websites", "E-commerce stores", "CMS and WordPress"],
  },
  {
    anchor: "software-app-development",
    icon: FiSmartphone,
    title: "Software and app development",
    description:
      "Custom software and mobile apps built to scale with your business.",
    pointList: ["Android and iOS apps", "SaaS platforms", "Admin dashboards"],
  },
  {
    anchor: "ai-solutions",
    icon: FiCpu,
    title: "AI solutions",
    description:
      "Automate repetitive work and add intelligence to your product.",
    pointList: ["Chatbots and agents", "Workflow automation", "AI integrations"],
  },
];

const ServiceOverviewSection = ({
  eyebrow = "What we do",
  title = "Three services, one team",
  description = "Everything you need to launch, scale, and automate your digital business.",
  serviceList = serviceOverviewList,
}: ServiceOverviewSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  // GSAP: scroll-in reveal for this section (skipped if the visitor prefers reduced motion)
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

      revealOnScroll(q(".web-app-development-service-overview-card"), { y: 32 }, 0.1);
    });

    return () => mm.revert();
  }, []);

  return (
  <section ref={sectionRef} className="web-app-development-service-overview-section">
    <Container>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <Row>
        {serviceList.map((service) => {
          const ServiceIcon = service.icon;
          return (
            <Col key={service.anchor} xs={12} md={6} lg={4}>
              <article className="web-app-development-service-overview-card">
                <span className="web-app-development-service-overview-icon">
                  <ServiceIcon />
                </span>
                <h3 className="web-app-development-service-overview-title">
                  {service.title}
                </h3>
                <p className="web-app-development-service-overview-description">
                  {service.description}
                </p>
                <ul className="web-app-development-service-overview-list">
                  {service.pointList.map((point) => (
                    <li
                      key={point}
                      className="web-app-development-service-overview-list-item"
                    >
                      <FiCheck />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={`#${service.anchor}`}
                  className="web-app-development-service-overview-link"
                >
                  Learn more
                  <FiArrowRight />
                </a>
              </article>
            </Col>
          );
        })}
      </Row>
    </Container>
  </section>
  );
};

export default ServiceOverviewSection;
