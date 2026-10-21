// import ServicePage, { ServicePageData } from "./ServicePage";

// const data: ServicePageData = {
//   eyebrow: "Content & Social",
//   title: "Be the brand",
//   highlight: "people keep seeing.",
//   description:
//     "Content that attracts, engages and converts. We plan, create and post it, and reply to your audience so you do not have to.",
//   visual: "social",
//   chips: ["New followers", "Reels that get shared"],
//   stats: [
//     { value: "4", label: "Content types: posts, video, blogs, email" },
//     { value: "1", label: "Calendar planned a month ahead" },
//     { value: "Daily", label: "Replies to comments and messages" },
//     { value: "Monthly", label: "Audience and reach report" },
//   ],
//   practices: [
//     {
//       title: "Social Media Management",
//       text: "Grow and manage your audience across social platforms.",
//       points: ["Content calendar and posting", "Community replies and engagement", "Audience growth reporting"],
//     },
//     {
//       title: "Short Video & Graphics",
//       text: "Visuals that stop the scroll and explain your offer fast.",
//       points: ["Reels and short videos", "Branded post and story designs", "Carousels and infographics"],
//     },
//     {
//       title: "Blogs & Articles",
//       text: "Useful articles that bring in search traffic and build trust.",
//       points: ["Topics based on customer questions", "Written to rank and to be read", "Refreshed when information changes"],
//     },
//     {
//       title: "Email & Newsletters",
//       text: "Stay in front of people who already know you.",
//       points: ["Newsletter copy and design", "Offer and launch emails", "Open and click reporting"],
//     },
//   ],
//   process: [
//     { title: "Audit", text: "We review your profiles, content and competitors to find what is missing." },
//     { title: "Plan", text: "You get a content calendar with themes, formats and posting days." },
//     { title: "Launch", text: "We create and publish, and you approve before anything goes live." },
//     { title: "Improve", text: "We check what people respond to and make more of it." },
//   ],
//   why: {
//     title: "Content that earns attention",
//     text: "We focus on posts people actually respond to, and on the enquiries that follow.",
//     points: [
//       "One team for strategy, creative and community replies.",
//       "Monthly numbers on reach, engagement and enquiries.",
//       "No long lock-in. You approve content before it is posted.",
//     ],
//   },
//   faqs: [
//     { q: "Which platforms do you manage?", a: "Mainly Instagram, Facebook, LinkedIn and YouTube. We pick the ones where your customers spend time." },
//     { q: "Do I have to approve every post?", a: "You can. We share the calendar in advance, and you decide how much review you want." },
//     { q: "Can you reply to comments for us?", a: "Yes. We reply in your brand voice and pass real enquiries to you straight away." },
//   ],
//   marquee: "Create",
//   ctaTitle: "Ready to grow your audience?",
//   ctaText: "Tell us about your business and goals. We will reply with a free growth plan.",
// };

// export default function ContentSocial() {
//   return <ServicePage data={data} />;
// }


import ServicePage, { ServicePageData } from "./ServicePage";

const data: ServicePageData = {
  eyebrow: "Content & Social",
  title: "Content That Connects. ",
  highlight: "Social That Engages.",
  description:
    "From meaningful content to engaging social media, we help your brand share its story, connect with the right people and build lasting relationships.",
  visual: "social",
  chips: ["New followers", "Reels that get shared"],
  stats: [
    { value: "Multi-Format", label: "Content That Connects" },
    { value: "30 Days", label: "Monthly Content Calendar Planning" },
    { value: "Daily", label: "Conversations That Keep Going" },
    { value: "Monthly", label: "Reach & Performance Insights" },
  ],

  practicesTitle: "Content and Social Media That Grow Your Brand",
  practicesSub: "We create purposeful content and manage your social presence strategically to make your brand memorable.",
  faqEyebrow: "Frequently Asked Questions",
  faqTitle: "Got Questions About Content & Social Media?",
  faqSub: "Here are a few things you might want to know before getting started.",

  practices: [
    {
      title: "Content Marketing",
      text: "We create content that answers questions, shares your expertise and tells your brand’s story. From blogs to website copy, every piece is made to connect with your audience and give them something valuable.",
      points: ["Helpful Blogs & Articles", "Website & Brand Content", "Content Planning & Strategy"],
    },
    {
      title: "Social Media Marketing",
      text: "We help your brand show up consistently on social media with content people can relate to. From everyday posts to paid campaigns, we help you reach new people, build relationships and keep your audience engaged.",
      points: ["Organic Posts & Community Engagement", "Paid Social Media Campaigns", "Social Media Planning & Management"],
    },
    {
      title: "Video Marketing (Reels, Ads & Explainers)",
      text: "We turn your ideas into videos that are easy to watch, understand and remember. From quick reels to promotional ads and explainer videos, we help you show people what your brand does and why it matters.",
      points: ["Reels & Short-Form Videos", "Promotional Video Ads", "Explainer & Brand Videos"],
    },
  ],
  process: [
    { title: "Discover", text: "We learn about your business, audience and goals, then decide which content and platforms fit best." },
    { title: "Plan", text: "You get a monthly content calendar with topics, formats and posting dates, ready for your approval." },
    { title: "Create", text: "We write, design and shoot your content, then publish it and keep the conversation going with your audience." },
    { title: "Improve", text: "We review reach, engagement and enquiries each month and focus more on what works." },
  ],
  why: {
    title: "Why Choose Debonaire for Content, Social & Video Marketing Services?",
    text: "We bring strategy, creativity and regular reporting together, so your content works as hard as you do.",
    points: [
      "Boosts organic traffic through SEO-optimized content",
      "Builds brand credibility and trust",
      "Higher engagement rates",
      "Better customer relationships",
      "Creative Planning",
      "Flexible Shoot Locations",
    ],
  },
  faqs: [
    {
      q: "What type of content can Debonaire create for my business?",
      a: "We create blogs, website content, articles and other brand content that helps you share your message, answer customer questions and communicate what makes your business different.",
    },
    {
      q: "Can you manage both organic and paid social media marketing?",
      a: "Yes! We deliver regular social media posts, audience engagement, and paid campaigns to help your business reach new people and stay connected with existing followers.",
    },
    {
      q: "What types of videos can you create for my brand?",
      a: "We create short-form videos and reels, promotional ads and explainer videos to help you showcase your products or services, share ideas and make your message easier to understand.",
    },
  ],
  marquee: "Create",
  ctaTitle: "Stop Circling, Start Soaring!",
  ctaText: "We help you find a clearer direction and build momentum towards growth with united efforts.",
};

export default function ContentSocial() {
  return <ServicePage data={data} />;
}