import Hero from "./Hero";
import Flow from "./Flow";
import Services from "./Services";

// import Cases from "./Cases";
// import Process from "./Process";
// import Faq from "./Faq";
import About from "./About";
import Cta from "./Cta";

export default function BusinessOperations() {
  return (
    <>
      <Hero />
       <Flow />
      <Services />
      {/* <Cases />
      <Process /> */}
      {/* <Faq /> */}
        <About />
      <Cta />
    </>
  );
}
