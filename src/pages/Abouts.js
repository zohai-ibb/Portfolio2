import React from "react";
import Front from "../components/Front.js";
import About from "../components/About.js";
import Service from "../components/Service.js";
import Certificates from "../components/Certificates.js";
import Contact2 from "../components/Contact2.js";
import "../components/Front.css";
import "../components/About.css";
import "../components/Service.css";
import "../components/Certificates.css";
import "../components/Contact.css";
import Hamburger from "../components/Hamburger.js";
import Skills from "../components/Skills.js";
import "../components/Skills.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Abouts = () => {
  return (
    <div>
      <Hamburger/>
      <Parallax pages={3.588}>
        <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 2 }}>
          <Front pageName="About" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9999} speed={1} style={{ zIndex: 3 }}>
          <About />
        </ParallaxLayer >
        <ParallaxLayer offset={1} speed={1.4} style={{ zIndex: 4 }}>
          <Service />
        </ParallaxLayer>
        <ParallaxLayer offset={1.9999} speed={1.4} style={{ zIndex: 5 }}>
          <Certificates />
        </ParallaxLayer >
        <ParallaxLayer offset={2} speed={0.6} style={{ zIndex: 6 }}>
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer offset={2.999} speed={0.7} style={{ zIndex: 7 }}>
          <Contact2/>
        </ParallaxLayer>
      </Parallax>z
    </div>
  );
};

export default Abouts;
