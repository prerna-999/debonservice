"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CSSProperties, ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  TbWorldWww,
  TbDeviceMobileCode,
  TbBrain,
  TbDeviceDesktop,
  TbSearch,
  TbBolt,
  TbDevices,
  TbApi,
  TbCloudUpload,
  TbMessageChatbot,
  TbSettingsAutomation,
  TbPlugConnected,
  TbShoppingCart,
  TbUsers,
  TbChartBar,
  TbBrandAndroid,
  TbBrandApple,
  TbClock,
  TbTicket,
} from "react-icons/tb";
import { Container, joinClasses } from "./Grid";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const contentItemStyle: CSSProperties = { marginTop: 20 };

type ServiceTabFeature = {
  icon: IconType;
  title: string;
  text: string;
};

type ServiceTabButton = {
  label: string;
  href: string;
};

type ServiceTab = {
  anchor: string;
  tabIcon: IconType;
  tabLabel: string;
  title: string;
  description: string;
  featureList: ServiceTabFeature[];
  cta: ServiceTabButton;
  visual: ReactNode;
};

type ServiceTabsSectionProps = {
  serviceTabList?: ServiceTab[];
  defaultActiveIndex?: number;
};

const Chip = ({
  icon: ChipIcon,
  label,
  position,
}: {
  icon: IconType;
  label: string;
  position: CSSProperties;
}) => (
  <div
    className="web-app-development-service-tabs-chip web-app-development-service-tabs-pop"
    style={position}
  >
    <ChipIcon />
    {label}
  </div>
);

const WebVisual = () => (
  <>
    <div className="web-app-development-service-tabs-win web-app-development-service-tabs-float">
      <div className="web-app-development-service-tabs-win-bar">
        <i />
        <i />
        <i />
        <em>yourbrand.com</em>
      </div>
      <div className="web-app-development-service-tabs-win-body">
        <div
          className="web-app-development-service-tabs-win-hero web-app-development-service-tabs-grow"
        />
        <div className="web-app-development-service-tabs-win-cols">
          {[1, 2, 3].map((cell) => (
            <div key={cell} className="web-app-development-service-tabs-pop" />
          ))}
        </div>
        <div
          className="web-app-development-service-tabs-win-line web-app-development-service-tabs-grow"
          style={{ width: "90%" }}
        />
        <div
          className="web-app-development-service-tabs-win-line web-app-development-service-tabs-grow"
          style={{ width: "65%" }}
        />
      </div>
    </div>
    <Chip icon={TbBolt} label="Loads in 1.2s" position={{ top: 18, right: 16 }} />
    <Chip icon={TbSearch} label="SEO score 98" position={{ bottom: 18, left: 16 }} />
  </>
);

const AppVisual = () => (
  <>
    <div className="web-app-development-service-tabs-phone web-app-development-service-tabs-float">
      <div className="web-app-development-service-tabs-phone-screen">
        <div className="web-app-development-service-tabs-phone-notch" />
        <div
          className="web-app-development-service-tabs-phone-card web-app-development-service-tabs-pop"
        >
          <span>Monthly orders</span>
          <b>1,284</b>
        </div>
        {[TbShoppingCart, TbUsers, TbChartBar].map((ItemIcon, itemIndex) => (
          <div
            key={itemIndex}
            className="web-app-development-service-tabs-phone-item web-app-development-service-tabs-pop"
          >
            <i>
              <ItemIcon />
            </i>
            <span />
          </div>
        ))}
      </div>
    </div>
    <Chip icon={TbBrandAndroid} label="Android" position={{ top: 22, left: 14 }} />
    <Chip icon={TbBrandApple} label="iOS" position={{ bottom: 26, right: 14 }} />
  </>
);

const AiVisual = () => (
  <>
    <div className="web-app-development-service-tabs-chat web-app-development-service-tabs-float">
      <div className="web-app-development-service-tabs-chat-head">
        <span className="web-app-development-service-tabs-chat-avatar">
          <TbMessageChatbot />
        </span>
        <div>
          Support assistant
          <small>Online</small>
        </div>
      </div>
      <div className="web-app-development-service-tabs-chat-messages">
        <div
          className="web-app-development-service-tabs-msg web-app-development-service-tabs-msg-user web-app-development-service-tabs-pop"
        >
          Where is my order?
        </div>
        <div
          className="web-app-development-service-tabs-msg web-app-development-service-tabs-msg-bot web-app-development-service-tabs-dots web-app-development-service-tabs-typing web-app-development-service-tabs-pop"
        >
          <i />
          <i />
          <i />
        </div>
        <div
          className="web-app-development-service-tabs-msg web-app-development-service-tabs-msg-bot web-app-development-service-tabs-pop"
        >
          Your order shipped today and arrives on Friday.
        </div>
      </div>
    </div>
    <Chip icon={TbClock} label="Replies in 2s" position={{ top: 16, right: 14 }} />
    <Chip icon={TbTicket} label="80% tickets automated" position={{ bottom: 16, left: 14 }} />
  </>
);

const defaultServiceTabList: ServiceTab[] = [
  {
    anchor: "web-development",
    tabIcon: TbWorldWww,
    tabLabel: "Web development",
    title: "Websites That Work as Hard as You Do",
    description:
      "We build fast, user-friendly websites that look great and work smoothly across devices. From business websites to e-commerce stores, we create online experiences that support your goals and help your business grow.",
    featureList: [
      { icon: TbDevices, title: "Responsive by Design", text: "Websites that work seamlessly across mobiles, tablets and desktops." },
      { icon: TbBolt, title: "Built for Speed", text: "Fast-loading pages that make browsing easier for your visitors." },
      { icon: TbDeviceDesktop, title: "Easy to Navigate", text: "Simple, user-friendly layouts that help people find what they need." },
      { icon: TbSearch, title: "SEO-Friendly Structure", text: "Built with search engine best practices to support your online visibility." },
    ],
    cta: { label: "Let's Build Your Website", href: "/web-development" },
    visual: <WebVisual />,
  },
  {
    anchor: "software-app-development",
    tabIcon: TbDeviceMobileCode,
    tabLabel: "Software and app development",
    title: "Software & App Development Built Around Your Needs",
    description:
      "We develop custom software and mobile apps that solve real business problems and make everyday tasks easier. From streamlining operations to improving customer experiences, we build solutions that grow with your business.",
    featureList: [
      { icon: TbDeviceMobileCode, title: "Custom-Built Solutions", text: "Software and apps designed around your unique business needs." },
      { icon: TbDeviceDesktop, title: "Simple, User-Friendly Design", text: "Easy-to-use interfaces that make every interaction smoother." },
      { icon: TbCloudUpload, title: "Built to Scale", text: "Flexible solutions that adapt as your business grows." },
      { icon: TbApi, title: "Seamless Integrations", text: "Connect your apps and software with the tools you already use." },
    ],
    cta: { label: "Let's Build Your Solution", href: "/software-app-development" },
    visual: <AppVisual />,
  },
  {
    anchor: "ai-solutions",
    tabIcon: TbBrain,
    tabLabel: "AI solutions",
    title: "AI Solutions That Make Work Easier",
    description:
      "We build AI tools that help your business save time, handle tasks and serve customers better. From chatbots to custom AI systems, we make technology useful for your everyday business needs.",
    featureList: [
      { icon: TbBrain, title: "Made for Your Business", text: "AI solutions designed around your needs and goals." },
      { icon: TbSettingsAutomation, title: "Save Time on Routine Tasks", text: "Automate repetitive work and focus on what matters most." },
      { icon: TbMessageChatbot, title: "Better Customer Support", text: "Help customers get quick answers and useful recommendations." },
      { icon: TbPlugConnected, title: "Works With Your Existing Tools", text: "Connect AI with your current systems and software." },
    ],
    cta: { label: "Let's Build Your AI Solution", href: "/ai-solutions" },
    visual: <AiVisual />,
  },
];

const ServiceTabsSection = ({
  serviceTabList = defaultServiceTabList,
  defaultActiveIndex = 0,
}: ServiceTabsSectionProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(defaultActiveIndex);
  const sectionRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const [isPillReady, setIsPillReady] = useState(false);

  useEffect(() => {
    const openTabFromHash = () => {
      const hashAnchor = window.location.hash.replace("#", "");
      const matchedTabIndex = serviceTabList.findIndex(
        (serviceTab) => serviceTab.anchor === hashAnchor
      );
      if (matchedTabIndex === -1) return;
      setActiveTabIndex(matchedTabIndex);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    openTabFromHash();
    window.addEventListener("hashchange", openTabFromHash);
    return () => window.removeEventListener("hashchange", openTabFromHash);
  }, [serviceTabList]);

  useIsoLayoutEffect(() => {
    const bar = barRef.current;
    const pill = pillRef.current;
    if (!bar || !pill) return;

    const tabButtonList = bar.querySelectorAll<HTMLButtonElement>("[role='tab']");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const placePill = (isInstant: boolean) => {
      const activeButton = tabButtonList[activeTabIndex];
      if (!activeButton) return;
      gsap.to(pill, {
        x: activeButton.offsetLeft,
        y: activeButton.offsetTop,
        width: activeButton.offsetWidth,
        height: activeButton.offsetHeight,
        duration: isInstant ? 0 : 0.55,
        ease: "power3.inOut",
        overwrite: true,
      });
    };

    placePill(isFirstRender.current || prefersReducedMotion);
    setIsPillReady(true);

    const handleResize = () => placePill(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTabIndex]);

  useIsoLayoutEffect(() => {
    const panel = panelRef.current;
    const bar = barRef.current;
    const section = sectionRef.current;
    if (!panel || !bar || !section) return;

    const isFirst = isFirstRender.current;
    isFirstRender.current = false;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const q = gsap.utils.selector(panel);
    const cls = (name: string) => `.web-app-development-service-tabs-${name}`;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        paused: isFirst,
      });

      if (isFirst) {
        timeline.from(bar, { y: 28, autoAlpha: 0, duration: 0.7 }, 0);
      }

      timeline
        .from(
          q(cls("in")),
          {
            y: 16,
            autoAlpha: 0,
            duration: 0.5,
            stagger: 0.07,
            clearProps: "opacity,visibility,transform",
          },
          0.05
        )
        .from(q(cls("stage")), { scale: 0.96, autoAlpha: 0, duration: 0.6 }, 0.1)
        .from(
          q(cls("grow")),
          { scaleX: 0, transformOrigin: "left", duration: 0.6, stagger: 0.1 },
          0.35
        )
        .from(
          q(cls("pop")),
          { scale: 0.8, y: 8, autoAlpha: 0, duration: 0.45, stagger: 0.1, ease: "back.out(1.7)" },
          0.45
        );

      gsap.to(q(cls("float")), {
        y: -6,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      if (q(cls("msg-user")).length) {
        timeline
          .from(q(cls("msg-user")), { y: 10, autoAlpha: 0, scale: 0.9, duration: 0.4, ease: "back.out(1.6)" }, 0.9)
          .from(q(cls("dots")), { autoAlpha: 0, duration: 0.25 }, 1.4)
          .to(q(cls("dots")), { autoAlpha: 0, height: 0, padding: 0, marginTop: -9, duration: 0.3 }, 3)
          .from(
            q(`${cls("msg-bot")}:not(${cls("dots")})`),
            { y: 10, autoAlpha: 0, scale: 0.9, duration: 0.4, ease: "back.out(1.6)" },
            3.1
          );

        gsap.to(q(`${cls("dots")} i`), {
          y: -3,
          opacity: 1,
          duration: 0.35,
          stagger: 0.15,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }

      if (isFirst) {
        ScrollTrigger.create({
          trigger: section,
          start: "top 75%",
          once: true,
          onEnter: () => timeline.play(),
        });
      }
    }, panel);

    return () => ctx.revert();
  }, [activeTabIndex]);

  const activeService = serviceTabList[activeTabIndex];

  return (
    <section
      ref={sectionRef}
      id="service-tabs"
      className="web-app-development-service-tabs-section"
    >
      <Container>
        <div
          ref={barRef}
          className={joinClasses(
            "web-app-development-service-tabs-bar",
            isPillReady && "web-app-development-service-tabs-bar-pill-ready"
          )}
          role="tablist"
        >
          <span
            ref={pillRef}
            className="web-app-development-service-tabs-pill"
            aria-hidden="true"
          />
          {serviceTabList.map((serviceTab, tabIndex) => {
            const TabIcon = serviceTab.tabIcon;
            const isActive = tabIndex === activeTabIndex;
            return (
              <button
                key={serviceTab.anchor}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={joinClasses(
                  "web-app-development-service-tabs-button",
                  isActive && "web-app-development-service-tabs-button-active"
                )}
                onClick={() => setActiveTabIndex(tabIndex)}
              >
                <TabIcon className="web-app-development-service-tabs-button-icon" />
                {serviceTab.tabLabel}
              </button>
            );
          })}
        </div>

        <div
          key={activeService.anchor}
          ref={panelRef}
          role="tabpanel"
          className="web-app-development-service-tabs-panel"
        >
          <div className="web-app-development-service-tabs-content">
            <h2
              className="web-app-development-service-detail-title web-app-development-service-tabs-in"
              style={contentItemStyle}
            >
              {activeService.title}
            </h2>
            <p
              className="web-app-development-service-detail-description web-app-development-service-tabs-in"
              style={contentItemStyle}
            >
              {activeService.description}
            </p>

            <div
              className="web-app-development-service-detail-feature-grid"
              style={contentItemStyle}
            >
              {activeService.featureList.map((feature) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="web-app-development-service-detail-feature-item web-app-development-service-tabs-in"
                  >
                    <span className="web-app-development-service-detail-feature-icon">
                      <FeatureIcon />
                    </span>
                    <div>
                      <b>{feature.title}</b>
                      <span>{feature.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="web-app-development-service-tabs-cta-group web-app-development-service-tabs-in"
              style={contentItemStyle}
            >
              <a
                href={activeService.cta.href}
                className="web-app-development-service-tabs-cta-primary"
              >
                {activeService.cta.label}
              </a>
            </div>
          </div>

          <div className="web-app-development-service-tabs-stage">
            {activeService.visual}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceTabsSection;