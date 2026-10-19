// import { FiLayout, FiShield, FiShoppingCart, FiSmartphone, FiUsers } from "react-icons/fi";
// import { SiLaravel, SiReact, SiShopify, SiWordpress } from "react-icons/si";
// import DevServicePage, { DevPageData } from "./DevServicePage";

// const data: DevPageData = {
//   eyebrow: "Web Development",
//   title: "We build websites",
//   highlight: "that load fast & sell.",
//   description: "WordPress, Shopify, Laravel and Next.js sites, built clean, quick and ready to turn visitors into customers.",
//   file: "index.tsx",
//   code: [
//     [["c", "// your new homepage"]],
//     [["k", "export default function "], ["f", "Home"], ["", "() {"]],
//     [["", "  return ("]],
//     [["", "    <"], ["f", "Hero"], ["", " title="], ["s", '"Grow online"'], ["", " />"]],
//     [["", "    <"], ["f", "Store"], ["", " products={items} />"]],
//     [["", "  )"]],
//     [["", "}"]],
//     [["ok", "✓ Lighthouse 98 · mobile ready"]],
//   ],

  
//   stack: ["WordPress", "Shopify", "Laravel", "React", "Next.js", "Tailwind", "MySQL", "Stripe"],
//   services: [
//     { icon: SiWordpress, label: "WordPress", title: "WordPress Development", text: "Flexible sites you can update yourself, on clean and secure code.", chips: ["Custom themes", "Plugins", "Speed & security"] },
//     { icon: SiShopify, label: "Shopify", title: "Shopify Development", text: "Online stores that are easy to run and simple to buy from.", chips: ["Theme setup", "Payments", "Shipping & apps"] },
//     { icon: SiLaravel, label: "Laravel", title: "Laravel Development", text: "Secure, scalable web applications on the Laravel framework.", chips: ["Admin panels", "User roles", "REST APIs"] },
//     { icon: SiReact, label: "React / Next.js", title: "React.js / Next.js Development", text: "Fast, modern websites that rank well on search engines.", chips: ["SEO ready", "Components", "Fast loading"] },
//     { icon: FiShoppingCart, label: "E-Commerce", title: "E-Commerce Store Development", text: "Complete online stores ready to sell from day one.", chips: ["Cart & checkout", "Gateways", "Orders & stock"] },
//     { icon: FiLayout, label: "Landing Page", title: "Custom Landing Page Design", text: "Focused pages designed to turn ad traffic into enquiries.", chips: ["Clear call to action", "Built for ads", "Forms & tracking"] },
//   ],
//   steps: [
//     { title: "Discover", text: "We learn your business, audience and goals, then agree on the scope.", status: "scoped", chips: ["Goals & audience", "Sitemap", "Fixed scope"] },
//     { title: "Design", text: "You see the layout and look of your pages before any code is written.", status: "approved", chips: ["Wireframes", "Visual design", "Your approval"] },
//     { title: "Build", text: "We develop and test on real devices, sharing progress as we go.", status: "passed", chips: ["Clean code", "Device testing", "Regular updates"] },
//     { title: "Launch", text: "We go live, check speed and tracking, and stay on hand for support.", status: "deployed", chips: ["Go live", "Speed check", "Free support"] },
//   ],
//   whyTitle: "Websites built to work for your business",
//   whyText: "Clear updates, quality checks at every stage and a team that explains things in plain language.",
//   benefits: [
//     { icon: FiUsers, title: "One team, start to finish", text: "Design, development and launch handled by the same people." },
//     { icon: FiSmartphone, title: "Fast and mobile ready", text: "Pages built to load quickly on every screen size." },
//     { icon: FiLayout, title: "Easy to manage", text: "We train you to update pages, products and content yourself." },
//     { icon: FiShield, title: "30 days free support", text: "Fixes and questions covered after your site goes live." },
//   ],
//   faqs: [
//     { q: "How long does a website take?", a: "A landing page takes days; a full site or store a few weeks." },
//     { q: "Which platform should I choose?", a: "We recommend one only after learning your goals." },
//     { q: "Can I edit it myself?", a: "Yes, we train you to update content." },
//     { q: "Do you build SEO friendly sites?", a: "Yes. Pages are fast, clean and structured so search engines can read them." },
//     { q: "Will it work on mobile?", a: "Yes. Every page is designed and tested on phones, tablets and desktops." },
//   ],
//   bigWord: "Website",
//   ctaTitle: "Ready for a website that works harder?",
//   ctaText: "Tell us what you need. We reply with a clear plan and a free quote.",
// };

// export default function WebDevelopment() {
//   return <DevServicePage data={data} />;
// }


import { FiLayout, FiShoppingCart, FiSmartphone, FiTag, FiZap } from "react-icons/fi";
import { SiLaravel, SiReact, SiShopify, SiWordpress } from "react-icons/si";
import DevServicePage, { DevPageData } from "./DevServicePage";

const data: DevPageData = {
  eyebrow: "Web Development",
  title: "We Develop Websites",
  highlight: "That Move Business Forward",
  description: "We create competitive websites with unmatched customisation scope, great speed, utmost technical security and a perfect UI/UX strategy. Go beyond traditional websites with ordinary features.",
  file: "index.tsx",
  code: [
    [["c", "// your new homepage"]],
    [["k", "export default function "], ["f", "Home"], ["", "() {"]],
    [["", "  return ("]],
    [["", "    <"], ["f", "Hero"], ["", " title="], ["s", '"Grow online"'], ["", " />"]],
    [["", "    <"], ["f", "Store"], ["", " products={items} />"]],
    [["", "  )"]],
    [["", "}"]],
    [["ok", "✓ Lighthouse 98 · mobile ready"]],
  ],
  stack: ["WordPress", "Shopify", "Laravel", "React", "Next.js", "Tailwind"],

  servicesTitle: "Web Development Solutions for Every Need",
  servicesSub: "Achieve everything your website needs to succeed with Debonaire’s wide range of website development solutions.",
  faqEyebrow: "Questions",
  faqTitle: "Things people ask first",
  faqSub: "Quick answers to the questions we hear most often.",

  heroCta: "Get a free project quote",
  whyCta: "Get a free quote",
  askTitle: "Still have a question?",
  askText: "Tell us what you need and our team will get back to you.",
  askCta: "Talk to our team",
  ctaButton: "Talk to our team",

  services: [
    {
      icon: SiWordpress,
      label: "WordPress",
      title: "WordPress Development",
      text: "We blend strategy, creativity, and technology to create scalable WordPress websites tailored to your unique business goals. Platforms we craft look great and perform even better.",
      chips: ["Custom Design", "SEO-Friendly", "Scalable Websites"],
    },
    {
      icon: SiShopify,
      label: "Shopify",
      title: "Shopify Development",
      text: "Whether you're launching a new Shopify store or just revamping an existing one, partner with Debonaire Shopify development services to build powerful, high-converting Shopify websites tailored to your brand.",
      chips: ["Store Setup", "Brand Customisation", "Sales Optimisation"],
    },
    {
      icon: SiLaravel,
      label: "Laravel",
      title: "Laravel Development",
      text: "At Debonaire Capital Assets, our developers build fast, secure, and scalable web solutions using Laravel. Our reliable applications are specifically tailored for startups, enterprises, and E-commerce businesses.",
      chips: ["Secure Applications", "High Performance", "Easy Scalability"],
    },
    {
      icon: SiReact,
      label: "React / Next.js",
      title: "React.js / Next.js Development",
      text: "In today’s competitive digital world, your web application needs to be fast, scalable, SEO and user-friendly. At Debonaire Capital Assets, our developers combine the power of Next.js and ReactJS to deliver high performance.",
      chips: ["Fast Loading", "SEO-Friendly", "Responsive Design"],
    },
    {
      icon: FiShoppingCart,
      label: "E-Commerce",
      title: "E-Commerce Store Development",
      text: "We build e-commerce websites that are fast, easy to use, and designed to increase sales. From third-party integrations to WooCommerce and Shopify solutions, we do it all.",
      chips: ["Online Stores", "Secure Payments", "Sales Growth"],
    },
    {
      icon: FiLayout,
      label: "Landing Page",
      title: "Custom Landing Page Design",
      text: "Our team specialize in designing custom landing pages that look good but also convert. Whether you’re running a paid ad campaign, launching a product, or capturing leads, our landing pages turn visitors into customers.",
      chips: ["Conversion-Focused", "Clear Messaging", "Lead Generation"],
    },
  ],
  steps: [],
  whyTitle: "Why Build Your Website with Debonaire Capital Assets?",
  whyText: "We combine creativity, technology, and strategy to deliver websites that are fast, user-friendly, and built to rank. Whether you need a business site, an e-commerce platform, or a complete brand presence, we ensure every project is customised to your goals.",
  benefits: [
    { icon: FiLayout, title: "Brand-Focused Designs", text: "Personalised and user-friendly websites." },
    { icon: FiSmartphone, title: "SEO-Ready & Responsive", text: "Built for search and all devices." },
    { icon: FiZap, title: "Performance That Delivers", text: "Websites and stores built for results." },
    { icon: FiTag, title: "Budget-Friendly Packages", text: "Quick delivery and ongoing support." },
  ],
  faqs: [
    { q: "How long does a website take?", a: "A landing page takes days; a full site or store a few weeks." },
    { q: "Which platform should I choose?", a: "We recommend one only after learning your goals." },
    { q: "Can I edit it myself?", a: "Yes, we train you to update content." },
    { q: "Do you build SEO friendly sites?", a: "Yes. Pages are fast, clean and structured so search engines can read them." },
    { q: "Will it work on mobile?", a: "Yes. Every page is designed and tested on phones, tablets and desktops." },
  ],
  bigWord: "Website",
  ctaTitle: "Stop Circling, Start Soaring!",
  ctaText: "We help you find a clearer direction and build momentum towards growth with united efforts.",
};

export default function WebDevelopment() {
  return <DevServicePage data={data} />;
}