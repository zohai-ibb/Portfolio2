import React, { useEffect, useState } from "react";
import Character from "../utils/character.jpg";
import GetInTouch from "./GetInTouch";
import { ParallaxLayer } from "@react-spring/parallax";

const Contact2 = () => {
  
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    let getInTouch = document.querySelector(".CgetInTouch");
    let contactNumber = document.querySelector(".CemailBtn");
    let contactEmail = document.querySelector(".CnumberBtn");

    function addMagnetEffect(element) {
      let originalTransform; // Store the original transform property
      let mouseX = 0;
      let mouseY = 0;
      const dampingFactor = 0.1; // Adjust damping factor as needed
      const scale = 1.5; // Adjust the scale factor to increase the effect area

      element.addEventListener("mouseenter", () => {
        element.style.transition = "transform 0.2s ease"; // Adjust the transition duration if needed
        originalTransform = element.style.transform; // Store the original transform
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
        element.style.transition = "transform 0.2s ease"; // Adjust the transition duration if needed
        element.style.transform = originalTransform; // Reset to the original transform
      });
    }
    

    addMagnetEffect(getInTouch);
    addMagnetEffect(contactNumber);
    addMagnetEffect(contactEmail);

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Ccontact">
      <div className="CworkTogether">
        <div className="CactualWorkTogether">
          <div className="CactualWorkTogetherInner">
            <img src={Character} alt="" />
            <span>Let's Work</span>
          </div>
          <span>together</span>
        </div>
        <div className="CarrowDown">
          <img src="tirshool.svg" alt="" />
        </div>
        <p className="Cline8"></p>
        <ParallaxLayer offset={0.8} speed={0.55} style={{ zIndex: 6 }}>
        <GetInTouch/>
        </ParallaxLayer>

        
      </div>
      <div className="CcontactButtons">
        <div className="CcontactButtonsInner CemailBtn Cfilling">
          <div>zachgreyrat@iconic.in</div>
        </div>
        <div className="CcontactButtonsInner CnumberBtn Cfilling">
          <div>+31 6 21 12 85 865</div>
        </div>
      </div>
      <div className="CcontactFooter">
        <div className="CcontactFooterLeft">
          <div className="Cversion">
            <div className="CactualVersion">VERSION</div>
            <div className="CfooterText">&copy; 2024 Edition</div>
          </div>
          <div className="ClocalTime">
            <div className="CactualLocalTimer">LOCAL TIME</div>
            <div className="CfooterText currentTime">{currentTime.toLocaleTimeString()} GMT+1</div>
          </div>
        </div>
        <div className="CcontactFooterRight">
          <div className="Csocial">Social</div>
          <div className="CsocialPlatform">
            <div
              className="footerText footerTextSocial link2"
              onClick={(event) => {
                event.preventDefault();
                window.open(
                  "https://www.linkedin.com/in/johaib-ansari-154b28249/",
                  "_blank"
                );
              }}
            >
              LinkedIn
            </div>
            <div
              className="footerText footerTextSocial link2"
              onClick={(event) => {
                event.preventDefault();
                window.open("https://github.com/zohai-ibb", "_blank");
              }}
            >
              Github
            </div>
            <div
              className="footerText footerTextSocial link2"
              onClick={(event) => {
                event.preventDefault();
                window.open(
                  "https://www.linkedin.com/in/johaib-ansari-154b28249/",
                  "_blank"
                );
              }}
            >
              Leetcode
            </div>
            <div
              className="footerText footerTextSocial link2"
              onClick={(event) => {
                event.preventDefault();
                window.open(
                  "https://www.instagram.com/zohaiibb_/?next=%2F",
                  "_blank"
                );
              }}
            >
              Instagram
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
