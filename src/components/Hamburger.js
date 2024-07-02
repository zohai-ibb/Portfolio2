import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Hamburger = () => {
  useEffect(() => {
    let hamburgerCircle = document.querySelector(".HamburgerCircle");
    let hamburgerCircle2 = document.querySelector(".HamburgerCircle2");
    let Home = document.querySelector(".Home");
    let Work = document.querySelector(".Work");
    let About = document.querySelector(".About");
    let Contact = document.querySelector(".Contact");

    const addMagnetEffect = (element) => {
      let originalTransform;
      let mouseX = 0;
      let mouseY = 0;
      const dampingFactor = 0.1;
      const scale = 1.5;

      element.addEventListener("mouseenter", () => {
        element.style.transition = "transform 0.2s ease";
        originalTransform = element.style.transform;
      });

      element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect();
        mouseX = (e.clientX - rect.left - rect.width / 2) * scale;
        mouseY = (e.clientY - rect.top - rect.height / 2) * scale;
        requestAnimationFrame(updateTransform);
      });

      function updateTransform() {
        const dx = mouseX - element.clientWidth / 2;
        const dy = mouseY - element.clientHeight / 2;
        const tx = dx * dampingFactor;
        const ty = dy * dampingFactor;
        element.style.transform = `translate(${tx}px, ${ty}px)`;
      }

      element.addEventListener("mouseleave", () => {
        element.style.transition = "transform 0.2s ease";
        element.style.transform = originalTransform;
      });
    };

    addMagnetEffect(hamburgerCircle);
    addMagnetEffect(hamburgerCircle2);
    addMagnetEffect(Home);
    addMagnetEffect(Work);
    addMagnetEffect(About);
    addMagnetEffect(Contact);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        className={isOpen ? "hamburger open" : "hamburger"}
        onClick={handleClick}
      >
        <div className="HamburgerCircle fillingHam  ">
          <div className="HamburgerCircle2">
            <div className="Hline Hline1"></div>
            <div className="Hline Hline2"></div>
            <div className="Hline Hline3"></div>
          </div>
        </div>
        <nav
          onClick={handleNavClick}
          className={isOpen ? "nav-bar active" : "nav-bar"}
        >
          <ul>
            <div className="navbarAddon">
              <span className="navigationNavbar">Navigation</span>
              <span className="navigationLine"></span>
            </div>
            <li className={location.pathname === "/" ? "Home active" : "Home"}>
              <Link to="/"><p>Home</p></Link>
            </li>
            <li
              className={
                location.pathname === "/about" ? "About active" : "About"
              }
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={location.pathname === "/work" ? "Work active" : "Work"}
            >
              <Link to="/work">Work</Link>
            </li>
            <li
              className={
                location.pathname === "/contact" ? "Contact active" : "Contact"
              }
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="CCcontactFooterRight">
            <div className="CCsocial">Social</div>
            <div className="CCsocialPlatform">
            <div className="footerText footerTextSocial link2" onClick={(event)=>{
                event.preventDefault();
                window.open("https://www.linkedin.com/in/johaib-ansari-154b28249/", "_blank");
            }}>LinkedIn</div>
            <div className="footerText footerTextSocial link2" onClick={(event)=>{
                event.preventDefault();
                window.open("https://github.com/zohai-ibb", "_blank");
            }}>Github</div>
            <div className="footerText footerTextSocial link2" onClick={(event)=>{
                event.preventDefault();
                window.open("https://www.linkedin.com/in/johaib-ansari-154b28249/", "_blank");
            }}>Leetcode</div>
            <div className="footerText footerTextSocial link2" onClick={(event)=>{
                event.preventDefault();
                window.open("https://www.instagram.com/zohaiibb_/?next=%2F", "_blank");
            }}>Instagram</div>
            </div>
          </div>  
        </nav>
      </div>
    </>
  );
};

export default Hamburger;
