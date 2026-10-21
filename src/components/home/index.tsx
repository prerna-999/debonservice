import HeroBanner from "./HeroBanner";
import SignalBar from "./SignalBar";
import About from "./About";
import Services from "./Services";
import ServiceFinder from "./ServiceFinder";
import SectorShowcase from "./SectorShowcase";
import Proof from "./Proof";
import Work from "./Work";
import Consultation from "./Consultation";
import Process from "./Process";
import Why from "./Why";
import Industries from "./Industries";
import Social from "./Social";
// import Testimonials from "./Testimonials";
import Faq from "./Faq";
// import Insights from "./Insights";
import Contact from "./Contact";
const HomePage =()=>{
    return(<>
    <HeroBanner/>
    <SignalBar/>
    <About/>
    <Services/>
    <ServiceFinder/>
    <SectorShowcase/>
     <Proof/>
     <Work/>
     <Consultation/>
     <Process/>
      <Why/>
       <Industries/> 
    <Social/>
    {/* <Testimonials/> */}
    <Faq/>
    {/* <Insights/> */}
    <Contact/>
        </>
    )
}
export default HomePage;