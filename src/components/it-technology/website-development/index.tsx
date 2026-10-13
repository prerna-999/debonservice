import Hero, { HeroStrip, Stats } from "./Hero";
import Services, { Devices, TechStrip } from "./Services";
import Process, { Faq } from "./Process";
import Outcomes, { Cases, Testimonials } from "./Outcomes";
import Cta from "./Cta";

export default function WebsiteDevelopment() {
  return (
    <div className="wd">
      <Hero />
      <HeroStrip />
      <Stats />
      <Devices />
      <Services />
      <TechStrip />
      <Cases />
      <Process />
      <Outcomes />
      <Testimonials />
      <Faq />
      <Cta />
    </div>
  );
}
