"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
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
            Independent digital growth agency <span className="home-hero__dot" /> India · Global
          </p>

          <h1 id="hero-title" className="home-hero__title" ref={titleRef} onPointerMove={onPointerMove} data-reveal>
            Be found
            <br />
            Be chosen
            <br />
            <span>Keep growing</span>
          </h1>

          <p className="home-hero__lead" data-reveal>
            SEO, AI search, paid media and content designed to work as one. We help ambitious businesses turn
            visibility into valuable conversations.
          </p>

          <div className="home-hero__actions" data-reveal>
            <Link href="#audit" className="home-hero__btn">
              Explore a visibility review
              <ArrowUpRight size={20} strokeWidth={2.2} />
            </Link>
            <Link href="#work" className="home-hero__link">
              See our approach
              <ArrowDown size={18} strokeWidth={2.2} />
            </Link>
          </div>

          <div className="home-hero__tags" data-reveal>
            <span>Strategy</span>
            <i />
            <span>Creative</span>
            <i />
            <span>Performance</span>
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
            <span>THE DEBON METHOD / 01</span>
            <strong>
              Attention
              <br />
              into action
            </strong>
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="40" />
              <path d="M29 57L47 72L73 34" />
            </svg>
          </div>

          <div className="home-hero__vertical">GROWTH IS A DIRECTION, NOT A DASHBOARD</div>
        </div>
      </div>
    </section>
  );
}