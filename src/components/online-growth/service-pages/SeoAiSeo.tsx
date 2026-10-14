import ServicePage, { ServicePageData } from "./ServicePage";

const data: ServicePageData = {
  eyebrow: "SEO & AI SEO",
  title: "Get found on Google.",
  highlight: "Get recommended by AI.",
  description:
    "People now search in two places: search engines and AI answers. We make your business easy to find in both, and show you the numbers every month.",
  visual: "search",
  chips: ["#1 local result", "Cited in AI answer"],
  stats: [
    { value: "2", label: "Search worlds covered: Google and AI" },
    { value: "4", label: "Simple steps from audit to results" },
    { value: "Monthly", label: "Clear reports on rankings and leads" },
    { value: "0", label: "Long lock-in contracts" },
  ],
  practices: [
    {
      title: "Technical SEO",
      text: "Fix what stops search engines from reading and ranking your site.",
      points: ["Full technical audit and site fixes", "Page speed and mobile checks", "Clean structure and search-friendly markup"],
    },
    {
      title: "Content & Keywords",
      text: "Publish pages that match what your customers actually search for.",
      points: ["Keyword and competitor research", "Service and blog pages that rank", "Updating older pages that lost traffic"],
    },
    {
      title: "Local SEO",
      text: "Show up when people nearby look for what you offer.",
      points: ["Google Business Profile set up and managed", "Local listings and reviews", "Map and near me search tracking"],
    },
    {
      title: "AI-Powered SEO",
      text: "Get discovered in AI search results and answer engines, so your business is the one that gets recommended.",
      points: ["Content structured for AI answers", "Brand mentions on trusted sources", "Tracking your visibility in AI search"],
    },
  ],
  process: [
    { title: "Audit", text: "We review your website, search presence and competitors to find the biggest gaps." },
    { title: "Plan", text: "You get a clear keyword and content plan with the results to expect." },
    { title: "Launch", text: "We fix, write and publish, keeping you updated at every stage." },
    { title: "Improve", text: "We track rankings and leads each month and focus on what works." },
  ],
  why: {
    title: "SEO you can measure",
    text: "We keep reporting simple, so you always know what your SEO spend is doing.",
    points: [
      "One team for technical fixes, content and reporting.",
      "Clear monthly numbers on traffic, rankings and enquiries.",
      "No long lock-in. We keep your business by delivering results.",
    ],
  },
  faqs: [
    { q: "How long does SEO take to work?", a: "Most sites see early movement within a few months. We share a realistic timeline in your plan after the audit." },
    { q: "What is AI SEO?", a: "It is the work of making your business easy for AI assistants and answer engines to find, understand and recommend." },
    { q: "Do I need to change my website?", a: "Only if the audit shows it is holding you back. We tell you exactly what to change and why." },
  ],
  marquee: "Rank",
  ctaTitle: "Ready to be found online?",
  ctaText: "Tell us about your business and goals. We will reply with a free growth plan.",
};

export default function SeoAiSeo() {
  return <ServicePage data={data} />;
}