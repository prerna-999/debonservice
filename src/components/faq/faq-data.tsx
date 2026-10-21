"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

const FAQS: FaqItem[] = [
  {
    question: "What services does Debonaire Capital Assets offer?",
    answer:
      "We offer digital marketing, website and app development, AI solutions, business support services and flexible workspaces, all under one roof.",
  },
  {
    question: "How can your digital marketing services help my business?",
    answer:
      "We help your business reach more people, build its online presence and connect with potential customers through SEO, social media, paid ads and content marketing.",
  },
  {
    question: "Can you build a website or app for my business?",
    answer:
      "Yes! We build websites, online stores, web applications and mobile apps based on your business needs.",
  },
  {
    question: "How can AI solutions help my business?",
    answer:
      "AI can help with everyday tasks, customer questions, data analysis and personalised recommendations. We help you find practical ways to use it in your business.",
  },
  {
    question: "Do you offer business and accounting support?",
    answer:
      "Yes! We offer services such as bookkeeping, accounting, corporate support, business planning and branding to help you manage important business needs.",
  },
  {
    question: "What types of workspaces can I rent?",
    answer:
      "You can explore private offices, desks, meeting rooms, commercial spaces and factory or industrial spaces, depending on your requirements.",
  },
  {
    question: "Can I choose a workspace for a short period?",
    answer:
      "Yes! Flexible rental options may be available by the hour, day, week or month, depending on the space. Contact us to find an option that suits you.",
  },
];

export default function Faq() {
  // Index of the open item. null = all closed.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="faq" id="faq" aria-label="Frequently asked questions">
      <div className="faq__inner">

        <ul className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <li
                key={item.question}
                className={`faq__item${isOpen ? " is-open" : ""}`}
              >
                <h3 className="faq__heading">
                  <button
                    type="button"
                    id={buttonId}
                    className="faq__question"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                  >
                    <span className="faq__number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="faq__question-text">{item.question}</span>
                    <span className="faq__icon" aria-hidden="true">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      >
                        <path d="M5 12h14" />
                        <path className="faq__icon-v" d="M12 5v14" />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq__panel"
                >
                  <div className="faq__panel-inner">
                    <p className="faq__answer">{item.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}