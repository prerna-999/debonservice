


"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight, ArrowLeft, ArrowRight, Plus, Minus, Search, TrendingUp, FileText, MessageCircle, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Service = {
  title: string;
  description: string;
  href: string;
  service: string;
  image: string;
  icon: LucideIcon;
};

const SERVICES: Service[] = [
  {
    title: "SEO and AI SEO",
    description: "Increase visibility on search engines and AI platforms so customers can easily find your business.",
    href: "/digital-marketing/seo-ai-seo",
    service: "SEO and AI SEO",
    image: "/assets/img/all-img/home/home-about-1.avif",
    icon: Search,
  },
  {
    title: "Paid Media & Performance Marketing",
    description: "Make sure you reach the right people through advertising, influencer partnerships, and outreach campaigns.",
    href: "/digital-marketing/paid-media",
    service: "Paid Media & Performance Marketing",
    image: "/assets/img/all-img/home/home-about-1.avif",
    icon: TrendingUp,
  },
  {
    title: "Content & Social",
    description: "Create content, social experiences, and videos that effectively generate brand awareness and spur positive actions.",
    href: "/digital-marketing/content-social",
    service: "Content & Social",
    image: "/assets/img/all-img/home/home-about-1.avif",
    icon: FileText,
  },
  {
    title: "Customer Engagement",
    description: "Strengthen customer relationships with the help of personalised email and WhatsApp campaigns.",
    href: "/digital-marketing/customer-engagement",
    service: "Customer Engagement",
    image: "/assets/img/all-img/home/home-about-1.avif",
    icon: MessageCircle,
  },
  {
    title: "Reputation and Optimisation",
    description: "Create a great reputation for your brand by making your digital presence much more reliable.",
    href: "/digital-marketing/reputation-optimization",
    service: "Reputation and Optimisation",
    image: "/assets/img/all-img/home/home-about-1.avif",
    icon: ShieldCheck,
  },
];

const STEPS: { question: string; label: string; options: { text: string; match?: number }[] }[] = [
  {
    question: "1. Where is your growth right now?",
    label: "Current growth stage",
    options: [
      { text: "Just getting started" },
      { text: "Growing but need direction" },
      { text: "Ready to scale faster" },
      { text: "Looking to improve results" },
    ],
  },
  {
    question: "2. What would you like to improve first?",
    label: "Primary growth priority",
    options: [
      { text: "AI for SEO", match: 0 },
      { text: "Performance Marketing", match: 1 },
      { text: "Content Creation", match: 2 },
      { text: "Social Media Content Creation", match: 2 },
      { text: "App development" },
      { text: "Website Development" },
    ],
  },
  {
    question: "3. When would you like to get started?",
    label: "Preferred start time",
    options: [
      { text: "Right away" },
      { text: "Within the next 2–4 weeks" },
      { text: "Within the next 1–3 months" },
      { text: "Just exploring my options" },
    ],
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function ServiceFinder() {
  const rootRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const animatingRef = useRef(false);

  const [openStep, setOpenStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [activeCard, setActiveCard] = useState(0);
  const [done, setDone] = useState(false);

  const priorityOption = STEPS[1].options.find((o) => o.text === answers[1]);
  const hasMatch = typeof priorityOption?.match === "number";

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

  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    let raf = 0;

    const onScroll = () => {
      if (animatingRef.current) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const first = cardRefs.current[0];
        if (!first) return;
        const max = vp.scrollWidth - vp.clientWidth;
        if (vp.scrollLeft >= max - 2) {
          setActiveCard(SERVICES.length - 1);
          return;
        }
        let best = 0;
        let dist = Infinity;
        cardRefs.current.forEach((c, i) => {
          if (!c) return;
          const d = Math.abs(c.offsetLeft - first.offsetLeft - vp.scrollLeft);
          if (d < dist) {
            dist = d;
            best = i;
          }
        });
        setActiveCard(best);
      });
    };

    vp.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      vp.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      gsap.killTweensOf(vp);
    };
  }, []);

  const stopAnimation = () => {
    const vp = viewportRef.current;
    if (!vp) return;
    gsap.killTweensOf(vp);
    animatingRef.current = false;
    vp.classList.remove("is-animating");
  };

  const goToCard = (index: number, move = false) => {
    const next = Math.max(0, Math.min(index, SERVICES.length - 1));
    setActiveCard(next);
    if (!move) return;
    const viewport = viewportRef.current;
    const first = cardRefs.current[0];
    const target = cardRefs.current[next];
    if (!viewport || !first || !target) return;

    const left = target.offsetLeft - first.offsetLeft;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      viewport.scrollLeft = left;
      return;
    }

    animatingRef.current = true;
    viewport.classList.add("is-animating");
    gsap.to(viewport, {
      scrollLeft: left,
      duration: 0.8,
      ease: "power3.inOut",
      overwrite: true,
      onComplete: () => {
        animatingRef.current = false;
        viewport.classList.remove("is-animating");
      },
    });
  };

  const answer = (stepIndex: number, value: string, match?: number) => {
    const nextAnswers = { ...answers, [stepIndex]: value };
    setAnswers(nextAnswers);

    let card = activeCard;
    if (stepIndex === 1 && typeof match === "number") {
      card = match;
      goToCard(match, true);
    }

    if (stepIndex < 2) {
      setOpenStep(stepIndex + 1);
    } else {
      setDone(true);
      const chosen = STEPS[1].options.find((o) => o.text === nextAnswers[1]);
      const matched = typeof chosen?.match === "number";

      const select = document.querySelector<HTMLSelectElement>('#enquiry-form select[name="service"]');
      if (select && matched) select.value = SERVICES[card].service;

      const message = document.querySelector<HTMLTextAreaElement>('#enquiry-form textarea[name="message"]');
      if (message && !message.value.trim()) {
        message.value =
          `Growth stage: ${nextAnswers[0] || "Not specified"}\n` +
          `Priority: ${nextAnswers[1] || "Not specified"}\n` +
          `Start: ${value}` +
          (matched ? `\nInterested in: ${SERVICES[card].service}` : "");
      }
    }
  };

  const step = (dir: 1 | -1) => goToCard((activeCard + dir + SERVICES.length) % SERVICES.length, true);

  const onViewportKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    step(e.key === "ArrowRight" ? 1 : -1);
  };

  return (
    <section className="home-finder" id="service-finder" aria-labelledby="service-finder-title" ref={rootRef}>
      <Container>
        <Row className="home-finder__head align-items-end">
          <Col md={12}>
            <h2 id="service-finder-title" className="home-finder__title" data-reveal>
              Good Digital Marketing Solutions
              <br />
              <em>For Great Momentum</em>
            </h2>
          </Col>
        </Row>

        <Row className="home-finder__layout" data-reveal>
          <Col lg={5}>
            <div className="home-finder__brief" aria-label="Quick growth brief">
              <div className="home-finder__brief-top">
                <span>YOUR GROWTH BRIEF</span>
                <span>{pad(openStep + 1)} / 03</span>
              </div>

              {STEPS.map((s, i) => {
                const open = openStep === i;
                return (
                  <div key={s.question} className={`home-finder__step ${open ? "is-open" : ""}`}>
                    <button
                      type="button"
                      className="home-finder__step-head"
                      aria-expanded={open}
                      onClick={() => setOpenStep(i)}
                    >
                      <span>{s.question}</span>
                      {open ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
                    </button>

                    <div className="home-finder__step-body" inert={!open}>
                      <div className="home-finder__options" role="group" aria-label={s.label}>
                        {s.options.map((o) => (
                          <button
                            key={o.text}
                            type="button"
                            aria-pressed={answers[i] === o.text}
                            className={answers[i] === o.text ? "is-selected" : ""}
                            onClick={() => answer(i, o.text, o.match)}
                          >
                            {o.text}
                          </button>
                        ))}
                      </div>

                      {i === 2 && (
                        <>
                          <p className="home-finder__result" aria-live="polite">
                            {done
                              ? hasMatch
                                ? `A good place to start: ${SERVICES[activeCard].service}.`
                                : "Thanks! Share your brief and we will suggest the right starting point."
                              : ""}
                          </p>
                          {done && (
                            <Link href="#contact" className="home-finder__cta">
                              Discuss your brief
                              <ArrowUpRight size={18} strokeWidth={2.4} />
                            </Link>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>

          {/* ---- Service cards (carousel) ---- */}
          <Col lg={7} className="home-finder__carousel-col">
            <div className="home-finder__carousel" aria-label="Explore our services">
              <div
                className="home-finder__viewport"
                ref={viewportRef}
                tabIndex={0}
                aria-label="Service cards. Scroll horizontally or use the arrow buttons."
                onKeyDown={onViewportKey}
                onWheel={stopAnimation}
                onPointerDown={stopAnimation}
                onTouchStart={stopAnimation}
              >
                <div className="home-finder__track">
                  {SERVICES.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <article
                        key={s.href}
                        ref={(el) => {
                          cardRefs.current[i] = el;
                        }}
                        className="home-finder__card"
                        onFocus={() => goToCard(i)}
                      >
                        <div className="home-finder__card-top">
                          <span className="home-finder__card-icon" aria-hidden="true">
                            <Icon size={20} strokeWidth={1.8} />
                          </span>
                        </div>

                        <div className="home-finder__card-copy">
                          <h3>{s.title}</h3>
                          <p>{s.description}</p>
                        </div>

                        <Link href={s.href} className="home-finder__card-link" aria-label={`Explore ${s.service}`}>
                          {s.image ? <Image src={s.image} alt="" fill sizes="360px" /> : null}
                          <span>Explore More</span>
                          <span className="home-finder__card-arrow" aria-hidden="true">
                            <ArrowUpRight size={20} strokeWidth={2} />
                          </span>
                        </Link>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="home-finder__controls">
                <div>
                  <button type="button" aria-label="Previous service" onClick={() => step(-1)}>
                    <ArrowLeft size={22} />
                  </button>
                  <button type="button" aria-label="Next service" onClick={() => step(1)}>
                    <ArrowRight size={22} />
                  </button>
                </div>
                <span className="home-finder__counter" aria-live="polite">
                  {pad(activeCard + 1)} / {pad(SERVICES.length)}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}