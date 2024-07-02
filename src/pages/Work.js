import React from "react";
import Front from "../components/Front.js";
import Projects from "../components/Projects.js";
import MoreProjects from "../components/MoreProjects.js";
import Contact from "../components/Contact.js";
import "../components/Front.css";
import "../components/Projects.css";
import "../components/MoreProjects.css";
import "../components/Contact.css";
import Hamburger from "../components/Hamburger.js";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Work = () => {
  return (
    <div>
      
      <Hamburger/>

      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 2 }}>
          <Front pageName="Works" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9999} speed={1.2} style={{ zIndex: 3 }}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={1.999} speed={1.4} style={{ zIndex: 4 }}>
          <MoreProjects />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8} style={{ zIndex: 5 }}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Work;
