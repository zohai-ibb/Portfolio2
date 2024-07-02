import "../components/Header.css";
import "../components/About.css";
import "../components/Projects.css";
import "../components/Contact.css";
import Header from "../components/Header.js";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Contact from "../components/Contact.js";
import Hamburger from "../components/Hamburger.js";
import "../components/Hamburger.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
  return (
    <div>
      <Hamburger/>
      <Parallax pages={3}>
      <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 2 }}>
        <Header />
      </ParallaxLayer>
      <ParallaxLayer offset={0.9999} speed={1} style={{ zIndex: 3 }}>
        <About />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1.4} style={{ zIndex: 4 }}>
        <Projects />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.8} style={{ zIndex: 5 }}>
        <Contact />
      </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
