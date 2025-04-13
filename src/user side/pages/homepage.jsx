import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from './fds/components/herosection'
import Navbardeshtop from './fds/components/navbar'
import ResponsiveDisplay from './fds/components/displaygraph'
import TalkeenSection from './fds/components/talkeensec'
import PricingSection from './fds/components/pricingsec'
import FAQSection from './fds/components/faqs'
import Footer from './fds/components/footer'
import ResponsiveLogos from './fds/components/icons'
import PricingPlans from './fds/components/pricecards'
import App from '../../App'
import Appsecond from './fds/App'

export default function Homepage() {
  return (
    <>

<Appsecond/>
{/* <Navbardeshtop/>
     <HeroSection/>
     <ResponsiveDisplay/>
     <ResponsiveLogos/>
     <TalkeenSection/>
     <PricingSection/>
     <PricingPlans/>
     <FAQSection/>
     <Footer/> */}
{/* <Link to={"/dashboard"} >Go to home page</Link> */}



    </>
  )
}
