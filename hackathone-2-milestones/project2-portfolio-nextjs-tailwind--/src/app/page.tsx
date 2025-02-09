"use client";
import Hero from "@/app/components/hero"
import AboutMe from "./about-me/page";
import Skills from "./skills/page";
import Services from "./services/page";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactMe from './contact-me/page';
function Home() {
   useEffect (()=>{   {/* useEffect Function For AOS SCROLL ANIMATION */} 
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  },[]);
  return (
    // ALL IN MAIN DIV FOR SCROLLING ROUTES
      <main>
          <Hero />           {/* HERO SECTION */}
          <AboutMe />        {/* ABOUT-ME PAGE */}
          <Skills />         {/* SKILLS PAGE */}
          <Services />       {/* SERVICES PAGE */}
          <ContactMe />      {/* CONTACT PAGE */}
      </main>
  
  );
}

export default Home;