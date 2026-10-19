"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiChevronDown } from "react-icons/fi";
import { Container, joinClasses } from "./Grid";
import SectionHeading from "./SectionHeading";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

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
    question: "How do I know which website or app I need?",
    answer:
      "It depends on what you want to achieve. Tell us your idea, and we'll help you choose the right solution for your business.",
  },
  {
    question: "How long does it take to build a website or app?",
    answer:
      "It depends on the features, design and complexity of your project. We'll discuss the timeline with you before development begins.",
  },
  {
    question: "Can you improve my existing website or app?",
    answer:
      "Absolutely! We can update the design, add new features, fix issues or improve how it works to better suit your needs.",
  },
  {
    question: "Will my website or app work on different devices?",
    answer:
      "Yes, we'll build it to work smoothly across the devices and screen sizes relevant to your project, so users can access it with ease.",
  },
];

const FaqSection = ({
  eyebrow = "FAQ",
  title = "Got Questions? We've Got Answers.",
  faqList = faqItemList,
  defaultOpenIndex = 0,
}: FaqSectionProps) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(defaultOpenIndex);

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