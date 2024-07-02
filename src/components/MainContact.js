import React, { useEffect, useState } from 'react'
import Character from '../utils/character.jpg'
import { useNavigate } from 'react-router-dom';

const MainContact = () => {
  const [sending, setSending] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "a22ea432-4fb5-46e6-a0b9-931b8988aa54");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    if (res.success) {
      console.log("Success", res);
    }
    setSending(false);
    navigate('/feedback');
  };

    useEffect(()=>{
        let getInTouch = document.querySelector(".getInTouch")

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
  const intervalId = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return () => clearInterval(intervalId);
    }, [])

    
  return (
    <div>
      <div className="contact">
      <div className="workTogether">
        <div className="actualWorkTogether">
          <span>Let's start a</span>
          <span>project together</span>
        </div>
        <div className="arrowDown8"><img src={Character} alt="" /></div>
        <p className="line8"></p>
      </div>
      <div className="containerDetail">
        <div className="actualContainerDetail">
      <form onSubmit={onSubmit}>
          <div className="questionAnswer">
            <div className="question">
              <span className="serialNumber">01</span>
              <span>What's your name?</span>
            </div>
            <div className="answer">
              <input type="text" name="name" placeholder="Zach Greyrat *"/>
            </div>
          </div>
          <p className="line4"></p>
          <div className="questionAnswer">
            <div className="question">
              <span className="serialNumber">02</span>
              <span>What's your email?</span>
            </div>
            <div className="answer">
              <input type="email" name="email" placeholder="zach@greyrat.com *"/>
            </div>
          </div>
          <p className="line4"></p>
          <div className="questionAnswer">
            <div className="question">
              <span className="serialNumber">03</span>
              <span>What's the name of your organization?</span>
            </div>
            <div className="answer">
              <input type="text" name="Orgranistion" placeholder="Zach & Frnds &copy;"/>
            </div>
          </div>
          <p className="line4"></p>
          <div className="questionAnswer">
            <div className="question">
              <span className="serialNumber">04</span>
              <span>What services are you looking for?</span>
            </div>
            <div className="answer">
              <input type="text" name="Service" size="30" placeholder="Web Designing, Web Development..."/>
            </div>
          </div>
          <p className="line4"></p>
          <div className="questionAnswer">
            <div className="question">
              <span className="serialNumber">05</span>
              <span>Your message</span>
            </div>
            <div className="answer">
              <textarea rows="2" cols="45" type="text" name="message" size="30" placeholder="Hello Zach, Can you help me with..."/>
            </div>
          </div>
          <p className="line4"></p>
          <button type="submit" className="getInTouch filling2">
            <div className="getInTouch2">{sending?"Sending...":"Send"}</div>
          </button>
      </form>
        </div>
      </div>

      <div className="contactFooter">
        <div className="contactFooterLeft">
          <div className="version">
            <div className="actualVersion">VERSION</div>
            <div className="footerText">&copy; 2024 Edition</div>
          </div>
          <div className="localTime">
            <div className="actualLocalTimer">LOCAL TIME</div>
            <div className="footerText">{currentTime.toLocaleTimeString()} GMT+1</div>
          </div>
        </div>
        <div className="contactFooterRight">
          <div className="social">Social</div>
          <div className="socialPlatform">
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
      </div>
    </div>
    </div>
  )
}

export default MainContact
