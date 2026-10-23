
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