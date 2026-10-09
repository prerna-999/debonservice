

"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight, ArrowLeft, ArrowRight, Plus, Minus, Search, Sparkles, Users, TrendingUp, ShieldCheck, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Service = {
  category: string;
  title: string;
  description: string;
  anchor: string;
  service: string;
  image: string;
  icon: LucideIcon;
};

const SERVICES: Service[] = [
  {
    category: "SEARCH",
    title: "Be found where intent begins",
    description: "Improve technical foundations and useful content so more of the right people find your business.",
    anchor: "organic-seo",
    service: "Organic Search Optimization",
    image: "/assets/img/all-img/home/home-about-1.avif",
    icon: Search,
  },
  {
    category: "AI DISCOVERY",
    title: "Be understood by answer engines",
    description: "Shape clear, credible information that helps your expertise surface in AI search experiences.",
    anchor: "ai-seo",
    service: "AI-Powered SEO",
    image: "/assets/img/all-img/home/home-about-1.avif",
    icon: Sparkles,
  },
  {
    category: "SOCIAL GROWTH",
    title: "Build an audience that stays",
    description: "Create a consistent social presence and a stronger relationship with your community.",
    anchor: "social-growth",
    service: "Social Media Growth Management",
    image: "/assets/img/all-img/home/home-about-1.avif",
    icon: Users,
  },
  {
    category: "PAID MEDIA",
    title: "Turn spend into measurable demand",
    description: "Connect focused paid campaigns with creative, tracking and a clear route to action.",
    anchor: "performance",
    service: "Performance Marketing",
    image: "/assets/img/all-img/home/home-about-1.avif",
    icon: TrendingUp,
  },
  {
    category: "CONVERSION",
    title: "Give every visit a better next step",
    description: "Reduce friction, sharpen your offer and strengthen the proof people need to choose you.",
    anchor: "conversion",
    service: "Conversion & Reputation",
    image: "/assets/img/all-img/home/home-about-1.avif",
    icon: ShieldCheck,
  },
  {
    category: "CONTENT",
    title: "Make your expertise useful everywhere",
    description: "Bring a clear story to search, social and campaigns with content built to help people act.",
    anchor: "content",
    service: "Content Creation",
    image: "/assets/img/all-img/home/home-about-1.avif",
    icon: FileText,
  },
];

const STEPS: { question: string; label: string; options: { text: string; match?: number }[] }[] = [
  {
    question: "1. Where is your growth right now?",
    label: "Current growth stage",
    options: [{ text: "Launching" }, { text: "Growing" }, { text: "Plateaued" }, { text: "Scaling" }],
  },
  {
    question: "2. What should improve first?",
    label: "Primary growth priority",
    options: [
      { text: "Search visibility", match: 0 },
      { text: "AI discovery", match: 1 },
      { text: "Social reach", match: 2 },
      { text: "Paid leads", match: 3 },
      { text: "Conversions", match: 4 },
      { text: "Content", match: 5 },
    ],
  },
  {
    question: "3. When would you like to begin?",
    label: "Preferred start time",
    options: [{ text: "This month" }, { text: "This quarter" }, { text: "Exploring options" }],
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

  // scroll reveal
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
      const select = document.querySelector<HTMLSelectElement>('#enquiry-form select[name="service"]');
      if (select) select.value = SERVICES[card].service;
      const message = document.querySelector<HTMLTextAreaElement>('#enquiry-form textarea[name="message"]');
      if (message && !message.value.trim()) {
        message.value = `Growth stage: ${nextAnswers[0] || "Not specified"}\nPriority: ${nextAnswers[1] || "Not specified"}\nStart: ${value}\nInterested in: ${SERVICES[card].service}`;
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
          <Col md={7}>
            <p className="home-finder__eyebrow" data-reveal>
              02A / Find your next move
            </p>
            <h2 id="service-finder-title" className="home-finder__title" data-reveal>
              Tell us the challenge
              <br />
              <em>Explore the right service</em>
            </h2>
          </Col>
          <Col md={5}>
            <p className="home-finder__intro" data-reveal>
              Answer three quick questions or browse the services. We will help you find a useful starting point
              for your growth plan.
            </p>
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
                            {done ? `A good place to start: ${SERVICES[activeCard].service}.` : ""}
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
                        key={s.anchor}
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
                          <span>{s.category}</span>
                        </div>

                        <div className="home-finder__card-copy">
                          <h3>{s.title}</h3>
                          <p>{s.description}</p>
                        </div>

                        <Link href={`#${s.anchor}`} className="home-finder__card-link" aria-label={`Explore ${s.service}`}>
                          {s.image ? <Image src={s.image} alt="" fill sizes="360px" /> : null}
                          <span>Explore service</span>
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