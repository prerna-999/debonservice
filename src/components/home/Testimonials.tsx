"use client";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REVIEWS = [
  {
    text: "The team brought clarity to our marketing and made every recommendation feel connected to a real business goal.",
    initials: "AM",
    name: "Aarav Mehta",
    role: "Founder · D2C Brand",
  },
  {
    text: "What stood out was the balance of creative thinking and practical execution. We always knew what the next step was.",
    initials: "NS",
    name: "Neha Sharma",
    role: "Marketing Lead · Growth Company",
  },
  {
    text: "Reporting became much easier to understand, and the work started to feel like a genuine extension of our own team.",
    initials: "RK",
    name: "Rohan Kapoor",
    role: "Director · Professional Services",
  },
];

const SPEED = 34; // px per second: slow, calm loop
const GAP = 18;

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="home-reviews__group" aria-hidden={hidden ? "true" : undefined}>
      {REVIEWS.map((r) => (
        <article className="home-reviews__card" key={r.name}>
          <div className="home-reviews__card-top">
            <span className="home-reviews__quote" aria-hidden="true">
              &ldquo;
            </span>
            <div className="home-reviews__stars" role="img" aria-label={hidden ? undefined : "5 out of 5 stars"}>
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
              ))}
            </div>
          </div>
          <blockquote className="home-reviews__text">{r.text}</blockquote>
          <footer className="home-reviews__author">
            <span className="home-reviews__avatar" aria-hidden="true">
              {r.initials}
            </span>
            <span>
              <strong>{r.name}</strong>
              <small>{r.role}</small>
            </span>
          </footer>
        </article>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const state = useRef({ offset: 0, glide: 0, resumeAt: 0, paused: false, lastTime: 0 });

  const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const groupEl = () => trackRef.current?.querySelector<HTMLElement>(".home-reviews__group");
  const loopWidth = () => (groupEl()?.getBoundingClientRect().width ?? 0) + GAP;
  const cardStep = () => {
    const card = groupEl()?.querySelector<HTMLElement>(".home-reviews__card");
    return card ? card.getBoundingClientRect().width + GAP : 340;
  };
  const wrap = () => {
    const w = loopWidth();
    if (!w) return;
    state.current.offset = ((state.current.offset % w) + w) % w;
  };
  const paint = () => {
    if (trackRef.current) trackRef.current.style.transform = `translate3d(${-state.current.offset}px, 0, 0)`;
  };

  useEffect(() => {
    if (reduceMotion()) return;
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
    let raf = 0;
    const s = state.current;

    const tick = (time: number) => {
      if (!s.lastTime) s.lastTime = time;
      const delta = Math.min(time - s.lastTime, 40);
      s.lastTime = time;

      if (Math.abs(s.glide) > 0.5) {
        const move = s.glide * 0.14;
        s.offset += move;
        s.glide -= move;
        wrap();
        paint();
      } else {
        s.glide = 0;
        if (!s.paused && time >= s.resumeAt && !reduceMotion()) {
          s.offset += (SPEED * delta) / 1000;
          wrap();
          paint();
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", wrap);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", wrap);
    };
  }, []);

  const click = (direction: 1 | -1) => {
    const s = state.current;
    s.resumeAt = performance.now() + 4000;
    if (reduceMotion()) {
      s.offset += direction * cardStep();
      wrap();
      paint();
    } else {
      s.glide += direction * cardStep();
    }
  };

  const pause = () => {
    state.current.paused = true;
  };
  const resume = () => {
    state.current.paused = false;
    state.current.lastTime = performance.now();
  };

  return (
    <section className="home-reviews" id="testimonials" aria-labelledby="testimonials-title" ref={rootRef}>
      <Container>
        <Row className="home-reviews__head align-items-end">
          <Col md={7}>
            <p className="home-reviews__eyebrow" data-reveal>
              10 / Client feedback
            </p>
            <h2 id="testimonials-title" className="home-reviews__title" data-reveal>
              Good work should
              <br />
              leave a <em>good impression</em>
            </h2>
          </Col>
          <Col md={5}>
            <p className="home-reviews__intro" data-reveal>
              Real words from clients are one of the clearest ways to show what a thoughtful marketing partnership
              feels like.
            </p>
          </Col>
        </Row>

        {/* ---- Sliding cards ---- */}
        <div
          className="home-reviews__stage"
          id="testimonial-stage"
          ref={stageRef}
          aria-label="Client testimonials"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
          data-reveal
        >
          <div className="home-reviews__track" ref={trackRef}>
            <Group />
            <Group hidden />
          </div>
        </div>

        <div className="home-reviews__controls" role="group" aria-label="Testimonial navigation">
          <button type="button" className="home-reviews__arrow home-reviews__arrow--prev" aria-controls="testimonial-stage" aria-label="Previous testimonial" onClick={() => click(-1)}>
            <ArrowLeft size={20} strokeWidth={2} />
          </button>
          <button type="button" className="home-reviews__arrow home-reviews__arrow--next" aria-controls="testimonial-stage" aria-label="Next testimonial" onClick={() => click(1)}>
            <ArrowRight size={20} strokeWidth={2} />
          </button>
        </div>
      </Container>
    </section>
  );
}