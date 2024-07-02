import React from "react";
import download from "../utils/download.svg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleKnowmoreClick = () => {
    navigate("/about");
  };

  return (
    <div>
      <section className="newAbout">
        <div className="newAboutHeading">
          <div className="newAboutHeading2">
            <p>
              About <span>Me</span>
            </p>
          </div>
        </div>
        <div className="newAboutME">
          <div className="newAboutMEInfo">
            <h2>INFORMATION ABOUT ME</h2>
            <span className="infoAboutME infoAboutME1">
              As a second-year Computer Engineering Diploma student at Central
              University Jamia Millia Islamia, I have acquired a comprehensive
              skill set encompassing languages such as C, C++, Java, HTML, CSS,
              and JavaScript. Additionally, I have hands-on experience in MERN
              stack development, honing my abilities in software development and
              web development through coursework and projects. With a strong
              foundation in both theoretical concepts and practical
              applications, I possess adept problem-solving skills and a knack
              for staying updated with industry trends.
            </span>
            <div
              className="downloadCV"
              onClick={(event) => {
                event.preventDefault();
                window.open(
                  "https://drive.google.com/file/d/1-CkmXB7IKN8_8ZKB3v3MP-h6I8WGU3u4/view",
                  "_blank"
                );
              }}
            >
              <p>DOWNLOAD CV</p>
              <img src={download} alt="" />
            </div>
          </div>
          <div className="cardsInfo">
            <div className="cards">
              <div className="cardsNumber">5+</div>
              <div className="cardsProject">- Major Project</div>
            </div>
            <div className="cards">
              <div className="cardsNumber">8+</div>
              <div className="cardsProject">- Minor Project</div>
            </div>
            <div className="cards">
              <div className="cardsNumber">10+</div>
              <div className="cardsProject">Certificates</div>
            </div>
            <div className="cards">
              <div className="cardsNumber">500+</div>
              <div className="cardsProject">- LinkedIn</div>
            </div>
          </div>
        </div>
        <div className="knowMore" onClick={handleKnowmoreClick}>
          <div>Know work</div>
        </div>
      </section>
      <p className="line"></p>
    </div>
  );
};

export default About;
