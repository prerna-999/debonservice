import ScrollFx from "./ScrollFx";
import Hero from "./Hero";
import Services from "./Services";
import Finder from "./Finder";
import Process from "./Process";
import Technologies from "./Technologies";
import Outcomes from "./Outcomes";
import Faq from "./Faq";
import Cta from "./Cta";

export default function ITTechnology() {
  return (
    <main className="it-page">
      <ScrollFx />
      <Hero />
      <Services />
      <Finder />
      <Process />
      <Technologies />
      <Outcomes />
      <Faq />
      <Cta />
    </main>
  );
}
