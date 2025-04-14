import React from "react";
import Navbar from "./components/navbar";
import '../css/appjsx.css'
import HeroSection from "./components/herosection";
import ResponsiveDisplay from "./components/displaygraph";
import ResponsiveLogos from "./components/icons";
import TalkeenSection from "./components/talkeensec";
import PricingSection from './components/pricingsec'
import PricingPlans from "./components/pricecards";
import FAQSection from "./components/faqs";
import Footer from "./components/footer";

function Appsecond() {
  return(
    <div>

     <Navbar/>

     <section id="Hometext">
  <HeroSection />
</section>

     <ResponsiveDisplay/>
     {/* <ResponsiveLogos/> */}
     <TalkeenSection/>
     <PricingSection/>
     <section id="pricing">
     <PricingPlans/>
  {/* content */}
</section>

<section id="about">
     <FAQSection/>
  {/* content */}
</section>

     <Footer/>
    </div>

  )
  
}
export default Appsecond
