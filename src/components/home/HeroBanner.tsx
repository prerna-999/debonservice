
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroBanner() {
  const rootRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLHeadingElement>) => {
    const el = titleRef.current;
    if (!el) return;
    const b = el.getBoundingClientRect();
    el.style.setProperty("--mask-x", `${e.clientX - b.left}px`);
    el.style.setProperty("--mask-y", `${e.clientY - b.top}px`);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el, i) => {
        gsap.from(el, {
          y: 34,
          autoAlpha: 0,
          duration: 0.85,
          delay: i * 0.08,
          ease: "power3.out",
          clearProps: "all",
        });
      });

      gsap.fromTo(
        ".home-hero__photo img",
        { yPercent: -4, scale: 1.06 },
        {
          yPercent: 4,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: ".home-hero__visual",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-hero" aria-labelledby="hero-title" ref={rootRef}>
      <div className="home-hero__grid" aria-hidden="true" />

      <div className="home-hero__shell home-hero__layout">
        <div className="home-hero__copy">
          <p className="home-hero__eyebrow" data-reveal>
            Globally Recognised Digital Growth Marketing Partner
          </p>

          <h1
            id="hero-title"
            className="home-hero__title"
            ref={titleRef}
            onPointerMove={onPointerMove}
            data-reveal
          >
            Stop Working in Silos.
            <br />
            <span>Start Growing as One.</span>
          </h1>

          <p className="home-hero__lead" data-reveal>
            Your marketing strategies, advanced technology and AI expertise work
            better together.
          </p>

          <div className="home-hero__actions" data-reveal>
            <Link href="tel:+919876543210" className="home-hero__btn">
              Get a Free Audit Report
              <ArrowUpRight size={20} strokeWidth={2.2} />
            </Link>
            <Link href="/contact" className="home-hero__link">
              Book a Free Consultation
              <CalendarCheck size={18} strokeWidth={2.2} />
            </Link>
          </div>
        </div>

        <div className="home-hero__visual">
          <div className="home-hero__photo">
            <Image
              src="/assets/img/all-img/home/banner.avif"
              alt="A team discussing a digital strategy"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 44vw"
            />
          </div>

          <div className="home-hero__card">
            <span>THE DEBON METHOD</span>
            <strong>
              Connect
              <br />
              the Dots
            </strong>
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="40" />
              <path d="M29 57L47 72L73 34" />
            </svg>
          </div>

          <div className="home-hero__vertical">START GROWING AS ONE</div>
        </div>
      </div>
    </section>
  );
}