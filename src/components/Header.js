import React, { useEffect } from "react";
import character from "../utils/character.jpg";
import tirsool from "../utils/tirshool.svg";
import chakka from "../utils/chakka.svg";
import { Link } from 'react-router-dom'


const Header = () => {
  useEffect(() => {
    function addMagnetEffect(element) {
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
    }

    const logos = document.querySelectorAll(".logo");
    const items = document.querySelectorAll(".item");

    logos.forEach((logo) => {
      addMagnetEffect(logo);
    });
    items.forEach((item) => {
      addMagnetEffect(item);
    });

    const logo = document.querySelector(".logo");
    let textUpdated = false;

    function splitText(text) {
      return text.split("");
    }

    function updateText(text) {
      textUpdated = true;
      let letters = splitText(text);
      let index = 0;

      function addLetter() {
        if (index < letters.length) {
          const lastAlphabet = logo.textContent[logo.textContent.length - 1];
          if(lastAlphabet !== letters[index]){
            logo.textContent += letters[index];
            index++;
            setTimeout(addLetter, 50);
          }
        } else {
          textUpdated = false;
        }
      }
      addLetter();
    }

    logo.addEventListener("mouseenter", () => {
      if (!textUpdated) {
        logo.textContent = "";
        updateText("\u00A9Johaib Ansari");
      }
    });

    logo.addEventListener("mouseout", () => {
      if (!textUpdated) {
        logo.textContent = "";
        updateText("\u00A9Code by Johaib");
      }
    });

    // Clean-up function
    return () => {
      logos.forEach((logo) => {
        logo.removeEventListener("mouseenter", addMagnetEffect);
        logo.removeEventListener("mouseleave", addMagnetEffect);
      });

      items.forEach((item) => {
        item.removeEventListener("mouseenter", addMagnetEffect);
        item.removeEventListener("mouseleave", addMagnetEffect);
      });
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <header>
      <div className="bgImg">
        <img src={character} alt="" />
      </div>
      <div className="head">
        <div className="logo">&copy;Code by Johaib</div>
        <nav>
          <ul className="list">
            <li className="item">
              <Link to="/about" className="link">
                {" "}
                About{" "}
              </Link>
            </li>
            <li className="item">
              <Link to="/work" className="link">
                {" "}
                Work{" "}
              </Link>
            </li>
            <li className="item">
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="Arrow">
        <img src={tirsool} alt="" />
      </div>
      <div className="hangerNav">
        <div className="hangerNavHanger">
          <div className="hangerNavHangerText">
            <span>Located</span>
            <span>in the</span>
            <span>New Delhi</span>
          </div>
          <div className="hangerNavHangerGlobe">
            <img src={chakka} alt="" />
          </div>
        </div>
        <div className="hangerNavText">
          <div className="hangerNavTextText">
            <span>Freelance</span>
            <span>Designer and Developer</span>
          </div>
        </div>
      </div>
      <div className="bigName">- Johaib Ansari</div>
      <div className="bigName2">- Johaib Ansari</div>
    </header>
  );
};

export default Header;
