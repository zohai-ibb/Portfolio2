import React, { useEffect } from 'react';
import Netflix from '../utils/Screenshot (112).png';
import Spotify from '../utils/Screenshot (113).png';
import Estate from '../utils/Screenshot (134).png'
import Notepad from '../utils/notepad.PNG';
import DallE from '../utils/Screenshot (135).png'
import { useNavigate } from 'react-router-dom';


const Projects = () => {
  const navigate = useNavigate();

  const handleClickMoreWork = () =>{
    navigate('/work')
  }
  useEffect(() => {
    const addMagnetEffect = (element) => {
      let originalTransform;
      let mouseX = 0;
      let mouseY = 0;
      const dampingFactor = 0.1;
      const scale = 1.5;

      element.addEventListener('mouseenter', () => {
        element.style.transition = 'transform 0.2s ease';
        originalTransform = element.style.transform;
      });

      element.addEventListener('mousemove', (e) => {
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

      element.addEventListener('mouseleave', () => {
        element.style.transition = 'transform 0.2s ease';
        element.style.transform = originalTransform;
      });
    };

    const handleMouseMove = (event, divs, interestImg) => {
      const rect = divs.getBoundingClientRect();
      let x = event.clientX - rect.left - interestImg.offsetWidth / 2;
      let y = event.clientY - rect.top - interestImg.offsetHeight / 2;

      x = Math.max(0, Math.min(x, divs.clientWidth - interestImg.offsetWidth));
      y = Math.max(0, Math.min(y, divs.clientHeight - interestImg.offsetHeight));

      interestImg.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseEnter = (event, interestImg) => {
      interestImg.classList.remove('hide');
    };

    const handleMouseLeave = (event, interestImg) => {
      interestImg.classList.add('hide');
    };

    const divs1 = document.querySelector('.divs1');
    const divs2 = document.querySelector('.divs2');
    const divs3 = document.querySelector('.divs3');
    const divs4 = document.querySelector('.divs4');
    const divs5 = document.querySelector('.divs5');
    const interestImg1 = document.querySelector('.interestImg1');
    const interestImg2 = document.querySelector('.interestImg2');
    const interestImg3 = document.querySelector('.interestImg3');
    const interestImg4 = document.querySelector('.interestImg4');
    const interestImg5 = document.querySelector('.interestImg5');

    if (divs1 && divs2 && divs3 && divs4 && divs5 &&
        interestImg1 && interestImg2 && interestImg3 && interestImg4 && interestImg5) {
      const aboutHeadings = document.querySelectorAll('.aboutHeading');
      const aboutHeadings2 = document.querySelectorAll('.aboutHeading2');

      aboutHeadings.forEach((aboutHeading) => addMagnetEffect(aboutHeading));
      aboutHeadings2.forEach((aboutHeading) => addMagnetEffect(aboutHeading));

      divs1.addEventListener('mousemove', (event) =>
        handleMouseMove(event, divs1, interestImg1)
      );
      divs1.addEventListener('mouseenter', (event) =>
        handleMouseEnter(event, interestImg1)
      );
      divs1.addEventListener('mouseleave', (event) =>
        handleMouseLeave(event, interestImg1)
      );
      divs2.addEventListener("mousemove", (event) =>
        handleMouseMove(event, divs2, interestImg2)
      );
      divs2.addEventListener("mouseenter", (event) =>
        handleMouseEnter(event, interestImg2)
      );
      divs2.addEventListener("mouseleave", (event) =>
        handleMouseLeave(event, interestImg2)
      );
      divs3.addEventListener("mousemove", (event) =>
        handleMouseMove(event, divs3, interestImg3)
      );
      divs3.addEventListener("mouseenter", (event) =>
        handleMouseEnter(event, interestImg3)
      );
      divs3.addEventListener("mouseleave", (event) =>
        handleMouseLeave(event, interestImg3)
      );
      divs4.addEventListener("mousemove", (event) =>
        handleMouseMove(event, divs4, interestImg4)
      );
      divs4.addEventListener("mouseenter", (event) =>
        handleMouseEnter(event, interestImg4)
      );
      divs4.addEventListener("mouseleave", (event) =>
        handleMouseLeave(event, interestImg4)
      );
      divs5.addEventListener("mousemove", (event) =>
        handleMouseMove(event, divs5, interestImg5)
      );
      divs5.addEventListener("mouseenter", (event) =>
        handleMouseEnter(event, interestImg5)
      );
      divs5.addEventListener("mouseleave", (event) =>
        handleMouseLeave(event, interestImg5)
      );
    }

    return () => {
        
      divs1.removeEventListener('mousemove', handleMouseMove);
      divs1.removeEventListener('mouseenter', handleMouseEnter);
      divs1.removeEventListener('mouseleave', handleMouseLeave);

      divs2.removeEventListener('mousemove', handleMouseMove);
      divs2.removeEventListener('mouseenter', handleMouseEnter);
      divs2.removeEventListener('mouseleave', handleMouseLeave);

      divs3.removeEventListener('mousemove', handleMouseMove);
      divs3.removeEventListener('mouseenter', handleMouseEnter);
      divs3.removeEventListener('mouseleave', handleMouseLeave);

      divs4.removeEventListener('mousemove', handleMouseMove);
      divs4.removeEventListener('mouseenter', handleMouseEnter);
      divs4.removeEventListener('mouseleave', handleMouseLeave);

      divs5.removeEventListener('mousemove', handleMouseMove);
      divs5.removeEventListener('mouseenter', handleMouseEnter);
      divs5.removeEventListener('mouseleave', handleMouseLeave);

    };
  }, []); // Empty dependency array to ensure effect runs only once after mount

  return (
    <div>z
      <section className="showOFF">
        <div className="showOff">
          <div className="showOffText">
            <span className="spans">The combination of my passion for design, </span>
            <span className="spans">code & interaction positions me in a </span>
            <span className="spans">different place in the web design world.</span>
          </div>
          <div className="showOffAnimation">
            <div className="aboutHeading inner-circle fillingo">
              <div className="aboutHeading2 fillingo">
                <div>Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="line"></p>
      <section className="about">
        <div className="divs divs1" onClick={(event)=>{
          event.preventDefault();
          window.open("https://github.com/zohai-ibb/Mern-Estate", "_blank");
        }}>
          <div className="interest">ESTATE APP</div>
          <div className="interestAbout">Design and Development</div>
          <div className="interestImg interestImg1 hide"><img src={Estate} alt=""/></div>
        </div>
        <p className="line"></p>
        <div className="divs divs2" onClick={(event)=>{
          event.preventDefault();
          window.open("https://github.com/zohai-ibb/AI-Image-Generator", "_blank");
        }}>
          <div className="interest">AI IMG GENERATOR</div>
          <div className="interestAbout">Design & Development</div>
          <div className="interestImg interestImg2 hide"><img src={DallE} alt=""/></div>
        </div>
        <p className="line"></p>
        <div className="divs divs3" onClick={(event)=>{
          event.preventDefault();
          window.open("https://github.com/zohai-ibb/Spotify-Clone", "_blank");
        }}>
          <div className="interest">SPOTIFY CLONE</div>
          <div className="interestAbout">Design and Development</div>
          <div className="interestImg interestImg3 hide"><img src={Spotify} alt=""/></div>
        </div>
        <p className="line"></p>
        <div className="divs divs4" onClick={(event)=>{
          event.preventDefault();
          window.open("https://github.com/zohai-ibb/NETFLIXCLONE", "_blank");
        }}>
          <div className="interest">NETFLIX CLONE</div>
          <div className="interestAbout">Design and Development</div>
          <div className="interestImg interestImg4 hide"><img src={Netflix} alt=""/></div>
        </div>
        <p className="line"></p>
          <div className="divs divs5" onClick={(event)=>{
            event.preventDefault();
            window.open("https://github.com/zohai-ibb/NotepadClone", "_blank");
          }}>
            <div className="interest">NOTEPAD CLONE</div>
            <div className="interestAbout">Design and Development</div>
            <div className="interestImg interestImg5 hide"><img src={Notepad} alt=""/></div>
          </div>
          <p className="line"></p>
        <p className="line"></p>
        <div className="exploreMore fillingo" onClick={handleClickMoreWork}>
          <div onClick={(event)=>{
            event.preventDefault();
            window.open("https://github.com/zohai-ibb?tab=repositories", "_blank");
          }}>More work<span className="superScript"> 5+</span></div>
        </div>
      </section>
      <p className="line89"></p>
    </div>
  );
};

export default Projects;
