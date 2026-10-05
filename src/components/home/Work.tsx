"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Project = {
  tag: string;
  title: [string, string];
  text: string;
  img: string;
  alt: string;
};

const FEATURE: Project = {
  tag: "01 / SEARCH + CONTENT",
  title: ["Make expertise", "easier to discover"],
  text: "A demand strategy for a specialist service brand.",
  img: "/assets/img/all-img/home/home-about-1.avif",
  alt: "Analytics dashboard on a laptop",
};

const SIDE: Project[] = [
  {
    tag: "02 / PAID + CONVERSION",
    title: ["Make every click", "work harder"],
    text: "A clearer route from campaign to enquiry.",
    img: "/assets/img/all-img/home/home-about-2.avif",
    alt: "Customer making an online purchase",
  },
  {
    tag: "03 / SOCIAL + BRAND",
    title: ["Give people a reason", "to follow"],
    text: "A more consistent brand presence across channels.",
    img: "/assets/img/all-img/home/home-about-1.avif",
    alt: "Social media applications on a phone",
  },
];

function WorkCard({ project, feature = false }: { project: Project; feature?: boolean }) {
  return (
    <article className={`home-work__card ${feature ? "home-work__card--feature" : ""}`} data-reveal>
      <Image
        src={project.img}
        alt={project.alt}
        fill
        sizes={feature ? "(max-width: 991px) 100vw, 55vw" : "(max-width: 991px) 100vw, 45vw"}
        className="home-work__img"
      />
      <div className="home-work__content">
        <span className="home-work__tag">{project.tag}</span>
        <h3 className="home-work__card-title">
          {project.title[0]}
          <br />
          {project.title[1]}
        </h3>
        <p className="home-work__text">{project.text}</p>
      </div>
    </article>
  );
}

export default function Work() {
  const rootRef = useRef<HTMLElement>(null);

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
          scrollTrigger: {
            trigger: el,
            start: "top 91%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });

      gsap.to(".home-work__card--feature", {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-work__card--feature",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-work" id="work" aria-labelledby="work-title" ref={rootRef}>
      <Container>
        <Row className="home-work__head align-items-end">
          <Col md={7}>
            <p className="home-work__eyebrow" data-reveal>
              03 / The kind of work we do
            </p>
            <h2 id="work-title" className="home-work__title" data-reveal>
              Built around the
              <br />
              <em>real challenge</em>
            </h2>
          </Col>
          <Col md={5}>
            <p className="home-work__intro" data-reveal>
              These are example project directions, shown to explain our thinking. Client stories and verified
              outcomes can be added when available.
            </p>
          </Col>
        </Row>

        <Row className="home-work__grid g-3">
          <Col xs={12} lg className="home-work__col-feature">
            <WorkCard project={FEATURE} feature />
          </Col>
          <Col xs={12} lg className="home-work__col-side">
            <div className="home-work__stack">
              {SIDE.map((p) => (
                <WorkCard key={p.tag} project={p} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}