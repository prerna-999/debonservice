"use client";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IMG = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const PHOTOS = [
  "photo-1460925895917-afdab827c52f",
  "photo-1551836022-d5d88e9218df",
  "photo-1556761175-b413da4baf72",
  "photo-1556742049-0cfed4f6a45d",
  "photo-1552664730-d307ca884978",
  "photo-1497366811353-6870744d04b2",
];

const INDUSTRIES = [
  { title: "Real estate", text: "Local discovery and qualified property enquiries." },
  { title: "Healthcare & clinics", text: "Helpful information and trust through the care journey." },
  { title: "Education & coaching", text: "Clear programmes and stronger student interest." },
  { title: "E-commerce", text: "Product discovery and more effective purchase paths." },
  { title: "Professional services", text: "Authority, clarity and meaningful enquiries." },
  { title: "Hospitality & travel", text: "Inspiration that leads to confident booking." },
  { title: "Local businesses", text: "More visibility where nearby customers are looking." },
  { title: "Technology & SaaS", text: "Simpler stories for complex products and buying teams." },
];

export default function Industries() {
  const rootRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const previewImgRef = useRef<HTMLImageElement>(null);
  const moveX = useRef<((v: number) => void) | null>(null);
  const moveY = useRef<((v: number) => void) | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!reduce) {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 34,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: { trigger: el, start: "top 91%", toggleActions: "play none none reverse", invalidateOnRefresh: true },
          });
        });
      }

      if (previewRef.current) {
        gsap.set(previewRef.current, { xPercent: -50, yPercent: -50, autoAlpha: 0, scale: 0.75 });
        moveX.current = gsap.quickTo(previewRef.current, "x", { duration: 0.25, ease: "power3.out" });
        moveY.current = gsap.quickTo(previewRef.current, "y", { duration: 0.25, ease: "power3.out" });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const canPreview = () => window.matchMedia("(min-width: 1200px) and (hover: hover) and (pointer: fine)").matches;

  const onEnter = (i: number) => {
    if (!canPreview() || !previewRef.current || !previewImgRef.current) return;
    previewImgRef.current.src = IMG(PHOTOS[i % PHOTOS.length], 680);
    gsap.to(previewRef.current, { autoAlpha: 1, scale: 1, duration: 0.22, overwrite: "auto" });
  };
  const onMove = (e: React.MouseEvent) => {
    if (!canPreview()) return;
    moveX.current?.(e.clientX + 18);
    moveY.current?.(e.clientY + 18);
  };
  const onLeave = () => {
    if (!previewRef.current) return;
    gsap.to(previewRef.current, { autoAlpha: 0, scale: 0.75, duration: 0.18, overwrite: "auto" });
  };

  return (
    <section className="home-industries" id="industries" aria-labelledby="industries-title" ref={rootRef}>
      <Container >
        <Row className="home-industries__head align-items-end">
          <Col md={7}>
            <p className="home-industries__eyebrow" data-reveal>
              07 / Industries
            </p>
            <h2 id="industries-title" className="home-industries__title" data-reveal>
              Marketing shaped by
              <br />
              <em>your industry</em>
            </h2>
          </Col>
          <Col md={5}>
            <p className="home-industries__intro" data-reveal>
              We adapt channel choices and messages to the way buyers research and decide in each market.
            </p>
          </Col>
        </Row>

        <Row className="home-industries__grid g-0">
          {INDUSTRIES.map((item, i) => (
            <Col
              key={item.title}
              xs={12}
              sm={6}
              md={3}
              className="home-industries__cell"
              onMouseEnter={() => onEnter(i)}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
            >
              <article
                className="home-industries__card"
                style={{ ["--card-image" as string]: `url("${IMG(PHOTOS[i % PHOTOS.length], 680)}")` }}
                data-reveal
              >
                <span className="home-industries__num">{String(i + 1).padStart(2, "0")}</span>
                <div className="home-industries__body">
                  <h3 className="home-industries__card-title">{item.title}</h3>
                  <p className="home-industries__text">{item.text}</p>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="home-industries__preview" ref={previewRef} aria-hidden="true">
        <img ref={previewImgRef} alt="" />
      </div>
    </section>
  );
}