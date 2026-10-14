"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiChevronDown } from "react-icons/fi";
import { Container, joinClasses } from "./Grid";
import SectionHeading from "./SectionHeading";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// useLayoutEffect in the browser (no flash), useEffect on the server (no warning)
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Faq = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  eyebrow?: string;
  title?: string;
  faqList?: Faq[];
  defaultOpenIndex?: number;
};

const faqItemList: Faq[] = [
  {
    question: "How long does a website take?",
    answer:
      "A business website usually takes 2 to 4 weeks. Larger e-commerce and custom web apps take longer, and we share a clear timeline after the discovery call.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every project includes post-launch support, and we offer monthly maintenance plans for updates, security, and performance.",
  },
  {
    question: "Can you build a custom mobile app?",
    answer:
      "Yes. We build Android and iOS apps, including cross-platform apps with a single codebase, along with the backend and APIs they need.",
  },
  {
    question: "How can AI help my business?",
    answer:
      "AI can answer customer questions, automate repetitive tasks, and turn your data into insights. We start with one workflow and expand from there.",
  },
];

const FaqSection = ({
  eyebrow = "FAQ",
  title = "Common questions",
  faqList = faqItemList,
  defaultOpenIndex = 0,
}: FaqSectionProps) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(defaultOpenIndex);

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

      revealOnScroll(q(".web-app-development-faq-list > *"), { y: 20 }, 0.08);
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="web-app-development-faq-section">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="web-app-development-faq-list">
          {faqList.map((faq, faqIndex) => {
            const isOpen = openFaqIndex === faqIndex;
            return (
              <div
                key={faq.question}
                className={joinClasses(
                  "web-app-development-faq-item",
                  isOpen && "web-app-development-faq-item-open"
                )}
              >
                <button
                  type="button"
                  className="web-app-development-faq-question-button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : faqIndex)}
                >
                  {faq.question}
                  <FiChevronDown className="web-app-development-faq-question-icon" />
                </button>
                <div className="web-app-development-faq-answer-wrapper">
                  <p className="web-app-development-faq-answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
