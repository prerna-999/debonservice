// import ServicePage, { ServicePageData } from "./ServicePage";

// const data: ServicePageData = {
//   eyebrow: "Paid Media & Performance Marketing",
//   title: "Pay for results,",
//   highlight: "not for clicks.",
//   description:
//     "Google and Meta campaigns built around a clear cost per lead. We test every week and move budget to what brings customers.",
//   visual: "ads",
//   chips: ["Lower cost per lead", "Weekly ad tests"],
//   stats: [
//     { value: "2", label: "Main platforms: Google and Meta" },
//     { value: "Weekly", label: "Testing of ads and budgets" },
//     { value: "1", label: "Number that matters: cost per lead" },
//     { value: "0", label: "Hidden fees on ad spend" },
//   ],
//   practices: [
//     {
//       title: "Google Ads",
//       text: "Reach people at the moment they search for what you sell.",
//       points: ["Search and local campaign setup", "Keyword and negative keyword control", "Call and form tracking"],
//     },
//     {
//       title: "Meta Ads",
//       text: "Put your offer in front of the right people on Facebook and Instagram.",
//       points: ["Audience and creative testing", "Lead forms and website campaigns", "Retargeting past visitors"],
//     },
//     {
//       title: "Ad Creative",
//       text: "Ads that get attention and give people a reason to act.",
//       points: ["Static and short video ads", "Copy tested in several versions", "Refreshing ads before they wear out"],
//     },
//     {
//       title: "Tracking & Reporting",
//       text: "Know what every rupee of your budget is doing.",
//       points: ["Cost per lead tracking", "Conversion and call tracking set up", "Simple monthly report with next steps"],
//     },
//   ],
//   process: [
//     { title: "Audit", text: "We review your current ads, tracking, website and competitors." },
//     { title: "Plan", text: "You get channels, budget split and the cost per lead to aim for." },
//     { title: "Launch", text: "We build and run campaigns, keeping you updated at every stage." },
//     { title: "Improve", text: "We test weekly and put more budget into what brings leads." },
//   ],
//   why: {
//     title: "Ad spend with a clear return",
//     text: "We keep your numbers clear and accountable, so you always know what your ads are doing.",
//     points: [
//       "One team for strategy, creative and reporting.",
//       "Reports on leads, cost and return, not vanity metrics.",
//       "No long lock-in. You can see every campaign in your own account.",
//     ],
//   },
//   faqs: [
//     { q: "How much should I spend on ads?", a: "It depends on your market and goals. We suggest a starting budget in your plan and adjust it as results come in." },
//     { q: "Do I own the ad accounts?", a: "Yes. Your accounts stay in your name, and you can see everything at any time." },
//     { q: "How soon will I see leads?", a: "Campaigns can bring first leads within days. Results get steadier as we test and improve over the first weeks." },
//   ],
//   marquee: "Perform",
//   ctaTitle: "Ready to turn ad spend into leads?",
//   ctaText: "Tell us about your business and goals. We will reply with a free growth plan.",
// };

// export default function PaidMedia() {
//   return <ServicePage data={data} />;
// }


import ServicePage, { ServicePageData } from "./ServicePage";

const data: ServicePageData = {
  eyebrow: "Paid Media & Performance Marketing",
  title: "Make Every Click and ",
  highlight: "Connection Count.",
  description:
    "We bring paid advertising, influencer marketing and outreach together to help your business reach new audiences, build trust and attract potential customers.",
  visual: "ads",
  chips: ["Lower cost per lead", "Weekly ad tests"],
  stats: [
    { value: "Multi-Platform", label: "Ads Where Your Audience Is" },
    { value: "Weekly", label: "Testing, Learning & Improving" },
    { value: "1 Goal", label: "Better Leads for Your Business" },
    { value: "Clear", label: "Transparent Ad Spend" },
  ],

  practicesTitle: "Our Paid Media & Performance Marketing Solutions",
  practicesSub: "We combine targeted ads and meaningful partnerships to help your brand reach the right people.",
  faqEyebrow: "Frequently Asked Questions",
  faqTitle: "A Few Things You Might Be Wondering",
  faqSub: "Find simple answers to common questions about our advertising and outreach services.",

  practices: [
    {
      title: "PPC Advertising (Google, Meta & YouTube)",
      text: "We help your business reach potential customers through ads on Google, Facebook, Instagram and YouTube. From setting up campaigns to improving performance, we focus on making your ad budget work harder and driving more relevant enquiries.",
      points: ["Targeted Ad Campaigns", "Ad Budget & Performance Optimisation", "Lead Generation & Conversion Tracking"],
    },
    {
      title: "Influencer & Outreach Marketing",
      text: "We help your brand connect with relevant influencers, creators and potential partners who can introduce your business to new audiences. From finding the right people to managing outreach, we focus on building genuine connections that help your brand get noticed and trusted.",
      points: ["Influencer & Creator Partnerships", "Brand Collaborations & Outreach", "Audience Reach & Brand Awareness"],
    },
  ],
  process: [
    { title: "Discover", text: "We review your current ads, tracking, website and competitors, and learn what a good lead means for your business." },
    { title: "Plan", text: "You get a clear plan with platforms, budget split and the cost per lead to aim for." },
    { title: "Launch", text: "We build and run your campaigns, keeping you updated at every stage." },
    { title: "Improve", text: "We test ads and budgets every week and move more spend to what brings leads." },
  ],
  why: {
    title: "Why Choose Debonaire for Paid Media & Performance Marketing?",
    text: "We help you reach the right people, make better use of your budget and build connections that bring your brand closer to potential customers.",
    points: [
      "Reach the Right Audience",
      "Make Your Budget Count",
      "Know What’s Working",
      "Keep Improving Your Ads",
      "Connect with the Right Creators",
      "Clear & Honest Reporting",
    ],
  },
  faqs: [
    {
      q: "Can you help my business advertise on Google, Facebook and Instagram?",
      a: "Yes! We help you run ads on Google, Facebook, Instagram and YouTube. We first understand your business and your audience, then help you choose the platforms that make the most sense for you.",
    },
    {
      q: "How can influencer and outreach marketing help my brand?",
      a: "It helps more people discover your business through creators, influencers and relevant partners. We help you find the right people to work with so your brand can reach new audiences and build genuine connections.",
    },
    {
      q: "How will I know if my ads are bringing results?",
      a: "We keep track of how your ads are performing, how many enquiries you're getting and what each lead costs. We'll share what's working, what needs improvement and where your budget may be better spent.",
    },
  ],
  marquee: "Perform",
  ctaTitle: "Stop Circling, Start Soaring!",
  ctaText: "We help you find a clearer direction and build momentum towards growth with united efforts.",
};

export default function PaidMedia() {
  return <ServicePage data={data} />;
}