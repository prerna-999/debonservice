
import ServicePage, { ServicePageData } from "./ServicePage";

const data: ServicePageData = {
  eyebrow: "CRO & ORM",
  title: "CRO & ORM Services ",
  highlight: "That Actually Works",
  description:
    "We help businesses to make the most of all traffic arriving at their sites via Conversion Rate Optimisation (CRO). Our Online Reputation Management (ORM) services assist businesses in developing brand trust through improved online branding and managing customer reviews to create positive customer-published comments about you.",
  visual: "reviews",
  chips: ["5 star review", "Profile verified"],
  stats: [
    { value: "All-in-One", label: "Review Monitoring" },
    { value: "Timely", label: "Thoughtful Responses" },
    { value: "Multi-Platform", label: "Wider Online Coverage" },
    { value: "Monthly", label: "Reputation Insights" },
  ],

  practicesTitle: "Make Every Visit Count With Our CRO & ORM Solutions",
  // faqEyebrow: "Frequently Asked Questions",
  faqTitle: "Frequently Asked Questions About CRO & ORM Services",

  practices: [
    {
      title: "Conversion Rate Optimisation (CRO)",
      text: "We focus on increasing customer satisfaction, website performance and conversion rates to enhance overall experience.",
      points: ["Test & Optimise Landing Pages", "Improve User Experience & Messaging", "Increase Leads & Conversions"],
    },
    {
      title: "Online Reputation Management (ORM)",
      text: "Our ORM services help in managing and creating a positive online impression of your company.",
      points: ["Monitor Online Reviews & Brand Mentions", "Manage Customer Feedback & Reviews", "Build Brand Trust & Credibility"],
    },
  ],
  process: [],
  why: {
    title: "Why choose Debonaire Capital Assets for CRO & ORM services?",
    text: "",
    points: [
      "Proven CRO agency",
      "Data-first CRO company",
      "Conversion specialists",
      "Smart trust strategies",
      "Crisis-ready team",
      "Ethical review handling",
    ],
  },
  faqs: [
    {
      q: "What are the key responsibilities of a CRO agency?",
      a: "CRO agency helps to increase your website’s conversion rate, which means more leads, sales, and sign-ups. The process of improving the conversion rate is entirely based on data analysis, testing, and UX insights.",
    },
    {
      q: "What does an ORM company do?",
      a: "An ORM agency in Mohali helps to monitor, enhance, and safeguard the online representation of your company.",
    },
    {
      q: "How long does it take to improve a Website’s Conversion Rate?",
      a: "You can see initial improvements within 2-4 weeks after making changes and implementing the strategy to your website’s user interface. You will see a significant increase in conversion rates after up to 2-3 months of testing changes to your website’s overall look and feel.",
    },
  ],
  marquee: "Trust",
  ctaTitle: "Stop Circling, Start Soaring!",
  ctaText: "We help you find a clearer direction and build momentum towards growth with united efforts.",
};

export default function ReputationOptimization() {
  return <ServicePage data={data} />;
}