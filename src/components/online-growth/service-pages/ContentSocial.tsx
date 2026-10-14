import ServicePage, { ServicePageData } from "./ServicePage";

const data: ServicePageData = {
  eyebrow: "Content & Social",
  title: "Be the brand",
  highlight: "people keep seeing.",
  description:
    "Content that attracts, engages and converts. We plan, create and post it, and reply to your audience so you do not have to.",
  visual: "social",
  chips: ["New followers", "Reels that get shared"],
  stats: [
    { value: "4", label: "Content types: posts, video, blogs, email" },
    { value: "1", label: "Calendar planned a month ahead" },
    { value: "Daily", label: "Replies to comments and messages" },
    { value: "Monthly", label: "Audience and reach report" },
  ],
  practices: [
    {
      title: "Social Media Management",
      text: "Grow and manage your audience across social platforms.",
      points: ["Content calendar and posting", "Community replies and engagement", "Audience growth reporting"],
    },
    {
      title: "Short Video & Graphics",
      text: "Visuals that stop the scroll and explain your offer fast.",
      points: ["Reels and short videos", "Branded post and story designs", "Carousels and infographics"],
    },
    {
      title: "Blogs & Articles",
      text: "Useful articles that bring in search traffic and build trust.",
      points: ["Topics based on customer questions", "Written to rank and to be read", "Refreshed when information changes"],
    },
    {
      title: "Email & Newsletters",
      text: "Stay in front of people who already know you.",
      points: ["Newsletter copy and design", "Offer and launch emails", "Open and click reporting"],
    },
  ],
  process: [
    { title: "Audit", text: "We review your profiles, content and competitors to find what is missing." },
    { title: "Plan", text: "You get a content calendar with themes, formats and posting days." },
    { title: "Launch", text: "We create and publish, and you approve before anything goes live." },
    { title: "Improve", text: "We check what people respond to and make more of it." },
  ],
  why: {
    title: "Content that earns attention",
    text: "We focus on posts people actually respond to, and on the enquiries that follow.",
    points: [
      "One team for strategy, creative and community replies.",
      "Monthly numbers on reach, engagement and enquiries.",
      "No long lock-in. You approve content before it is posted.",
    ],
  },
  faqs: [
    { q: "Which platforms do you manage?", a: "Mainly Instagram, Facebook, LinkedIn and YouTube. We pick the ones where your customers spend time." },
    { q: "Do I have to approve every post?", a: "You can. We share the calendar in advance, and you decide how much review you want." },
    { q: "Can you reply to comments for us?", a: "Yes. We reply in your brand voice and pass real enquiries to you straight away." },
  ],
  marquee: "Create",
  ctaTitle: "Ready to grow your audience?",
  ctaText: "Tell us about your business and goals. We will reply with a free growth plan.",
};

export default function ContentSocial() {
  return <ServicePage data={data} />;
}