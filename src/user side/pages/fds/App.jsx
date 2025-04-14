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
import SalesSection from "./components/SalesSection ";
import ToolkitSection from "./components/ToolkitSection ";
import SalesHeroSection from "./components/SalesHeroSection ";

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
     <SalesSection/>
     <ToolkitSection/>
     <PricingSection/>
     <section id="pricing">
     <PricingPlans/>
  {/* content */}
</section>

<section id="about">
     <FAQSection/>
  {/* content */}
</section>

     <SalesHeroSection/>
     <Footer/>
    </div>

  )
  
}
export default Appsecond
