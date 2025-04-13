import React from "react";
import Navbar from "./components/navbar";
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
     <HeroSection/>
     <ResponsiveDisplay/>
     <ResponsiveLogos/>
     <TalkeenSection/>
     <PricingSection/>
     <PricingPlans/>
     <FAQSection/>
     <Footer/>
    </div>

  )
  
}
export default Appsecond
