import Hero from "./Hero";
import Marquee from "./Marquee";
import About from "./About";
import Services from "./Services";
// import Brief from "./Brief";
import Why from "./Why";
import Process from "./Process";
// import Faq from "./Faq";
import Cta from "./Cta";

export default function CorporateSupport() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      {/* <Brief /> */}
      <Why />
        <Process />
      {/* <Faq /> */}
      <Cta />
    </>
  );
}
