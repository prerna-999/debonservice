
import ServicePage, { ServicePageData } from "./ServicePage";

const data: ServicePageData = {
  eyebrow: "SEO & AI SEO",
  title: "AI SEO for Better ",
  highlight: "Visibility Across Search",
  description:
    "At Debonaire Capital Assets, our team helps brands stay ahead of the curve with innovative AI SEO strategies. Our AI services improve businesses’ discoverability within both traditional search engines and AI chatbots.",
  visual: "search",
  chips: ["#1 local result", "Cited in AI answer"],
  stats: [
    { value: "AEO + GEO", label: "Built for AI Search" },
    { value: "360°", label: "A Complete Search Strategy" },
    { value: "Data-Led", label: "Decisions Backed by Insights" },
    { value: "Ongoing", label: "Optimisation That Evolves" },
  ],

  practicesTitle: "Our AI SEO growth solutions",
  // faqEyebrow: "FAQs",
  faqTitle: "Frequently Asked Questions About AI SEO Services",

  practices: [
    {
      title: "Answer Engine Optimisation (AEO) Services",
      text: "By utilising our combined AEO and GEO services, you can rank for customer questions across AI search engines.",
      points: ["Build Website Authority", "Optimise FAQs & Structured Data", "Improve AI Answer Visibility"],
    },
    {
      title: "Generative Engine Optimisation (GEO) Services",
      text: "Through our GEO service, we assist AI engines in understanding your brand, providing citations for your brand, and building trust in your brand.",
      points: ["Optimise Content Structure & Entities", "Build Topical Authority", "Strengthen Digital Visibility in AI Search"],
    },
    {
      title: "AI SEO Services for ChatGPT",
      text: "We can enhance your brand’s presence online through recommendations from ChatGPT as well as via search engines.",
      points: ["Create AI-Compatible Content Strategies", "Build Trust & Topical Authority", "Improve ChatGPT Discoverability"],
    },
    {
      title: "AI SEO Services for Google AI Overviews",
      text: "The AI Overview feature in Google Search shows where many searches performed by users are starting to culminate. Here’s what we do:",
      points: ["Optimise Content & Entity Structure", "Align Content with User Intent", "Improve AI Overview Placement"],
    },
    {
      title: "AI SEO Services for Gemini",
      text: "To ensure your business meets the criteria for Google’s next-generation AI applications based on the Gemini architecture, our team provides your content with an ecosystem.",
      points: ["Improve Content Context & Clarity", "Build Trust & Topical Expertise", "Boost Visibility in Google Gemini"],
    },
    {
      title: "AI SEO Services for Perplexity",
      text: "When providing responses with citations, Perplexity places a strong emphasis on reliable and authoritative resources. We help you:",
      points: ["Strengthen Website Authority", "Improve AI Citation Potential", "Build Trust Through GEO Strategies"],
    },
  ],
  process: [],
  why: {
    title: "Why Choose Debonaire Capital Assets?",
    text: "We are your one-stop solution for AI, AEO, and GEO SEO services! We specialise in all aspects of AI SEO, including:",
    points: [
      "Creating Powerful AI Visibility-Focused SEO Strategies",
      "Optimising Content for Use in ChatGPT, Gemini, and Perplexity",
      "Future-Proof SEO Strategies",
      "Developing AI Content Strategies",
      "Implementing AEO and GEO",
      "Ongoing Monitoring, Optimisation, and Reporting",
    ],
  },
  faqs: [
    {
      q: "What do you mean by AI-based SEO Services?",
      a: "AI-based SEO Services help businesses increase their visibility on AI-powered platforms such as ChatGPT, Google AI Reviews, Gemini, and Perplexity by simply providing optimised content for authority purposes and structuring their websites correctly.",
    },
    {
      q: "What is the difference between SEO, AEOs and GEO?",
      a: "Search Engine Optimisation is utilised to gain more exposure on search engines. In AEO, we create content that is a direct answer to a searcher’s question. In GEO, we create content that helps AI to recognise information, identify it correctly and recommend it.",
    },
    {
      q: "How does AI SEO help businesses to appear on ChatGPT and Google AI Reviews?",
      a: "AI SEO improves content quality, authority and reliability; that is how it boosts the chances of your company being referenced in AI-generated solutions becomes higher.",
    },
  ],
  marquee: "Rank",
  ctaTitle: "Stop Circling, Start Soaring!",
  ctaText: "We help you find a clearer direction and build momentum towards growth with united efforts.",
};

export default function SeoAiSeo() {
  return <ServicePage data={data} />;
}