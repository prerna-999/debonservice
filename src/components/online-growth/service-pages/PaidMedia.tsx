import ServicePage, { ServicePageData } from "./ServicePage";

const data: ServicePageData = {
  eyebrow: "Paid Media & Performance Marketing",
  title: "Pay for results,",
  highlight: "not for clicks.",
  description:
    "Google and Meta campaigns built around a clear cost per lead. We test every week and move budget to what brings customers.",
  visual: "ads",
  chips: ["Lower cost per lead", "Weekly ad tests"],
  stats: [
    { value: "2", label: "Main platforms: Google and Meta" },
    { value: "Weekly", label: "Testing of ads and budgets" },
    { value: "1", label: "Number that matters: cost per lead" },
    { value: "0", label: "Hidden fees on ad spend" },
  ],
  practices: [
    {
      title: "Google Ads",
      text: "Reach people at the moment they search for what you sell.",
      points: ["Search and local campaign setup", "Keyword and negative keyword control", "Call and form tracking"],
    },
    {
      title: "Meta Ads",
      text: "Put your offer in front of the right people on Facebook and Instagram.",
      points: ["Audience and creative testing", "Lead forms and website campaigns", "Retargeting past visitors"],
    },
    {
      title: "Ad Creative",
      text: "Ads that get attention and give people a reason to act.",
      points: ["Static and short video ads", "Copy tested in several versions", "Refreshing ads before they wear out"],
    },
    {
      title: "Tracking & Reporting",
      text: "Know what every rupee of your budget is doing.",
      points: ["Cost per lead tracking", "Conversion and call tracking set up", "Simple monthly report with next steps"],
    },
  ],
  process: [
    { title: "Audit", text: "We review your current ads, tracking, website and competitors." },
    { title: "Plan", text: "You get channels, budget split and the cost per lead to aim for." },
    { title: "Launch", text: "We build and run campaigns, keeping you updated at every stage." },
    { title: "Improve", text: "We test weekly and put more budget into what brings leads." },
  ],
  why: {
    title: "Ad spend with a clear return",
    text: "We keep your numbers clear and accountable, so you always know what your ads are doing.",
    points: [
      "One team for strategy, creative and reporting.",
      "Reports on leads, cost and return, not vanity metrics.",
      "No long lock-in. You can see every campaign in your own account.",
    ],
  },
  faqs: [
    { q: "How much should I spend on ads?", a: "It depends on your market and goals. We suggest a starting budget in your plan and adjust it as results come in." },
    { q: "Do I own the ad accounts?", a: "Yes. Your accounts stay in your name, and you can see everything at any time." },
    { q: "How soon will I see leads?", a: "Campaigns can bring first leads within days. Results get steadier as we test and improve over the first weeks." },
  ],
  marquee: "Perform",
  ctaTitle: "Ready to turn ad spend into leads?",
  ctaText: "Tell us about your business and goals. We will reply with a free growth plan.",
};

export default function PaidMedia() {
  return <ServicePage data={data} />;
}