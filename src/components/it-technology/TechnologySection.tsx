"use client";

import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiWordpress,
  SiPython,
  SiFlutter,
  SiMongodb,
} from "react-icons/si";
import { Container } from "./Grid";
import SectionHeading from "./SectionHeading";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// useLayoutEffect in the browser (no flash), useEffect on the server (no warning)
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Technology = {
  icon: IconType;
  label: string;
};

type TechnologySectionProps = {
  eyebrow?: string;
  title?: string;
  technologyList?: Technology[];
};

const technologyList: Technology[] = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiWordpress, label: "WordPress" },
  { icon: SiPython, label: "Python" },
  { icon: SiFlutter, label: "Flutter" },
  { icon: SiMongodb, label: "MongoDB" },
];

const TechnologySection = ({
  eyebrow = "Technologies",
  title = "Tools we build with",
  technologyList: items = technologyList,
}: TechnologySectionProps) => {
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

      revealOnScroll(q(".web-app-development-technology-chip"), { y: 16, scale: 0.92 }, 0.05);
    });

    return () => mm.revert();
  }, []);

  return (
  <section ref={sectionRef} className="web-app-development-technology-section">
    <Container>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="web-app-development-technology-list">
        {items.map((technology) => {
          const TechnologyIcon = technology.icon;
          return (
            <span key={technology.label} className="web-app-development-technology-chip">
              <TechnologyIcon className="web-app-development-technology-chip-icon" />
              {technology.label}
            </span>
          );
        })}
      </div>
    </Container>
  </section>
  );
};

export default TechnologySection;
