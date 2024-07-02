import React, { useEffect } from "react";
import C from "../utils/c.png";
import Cpp from "../utils/cpp.png";
import Java from "../utils/java.png";
import HTML from "../utils/html.png";
import CSS from "../utils/css.png";
import Js from "../utils/js.png";
import Express from "../utils/express-js.png";
import Reacts from "../utils/react.png";
import Node from "../utils/node.png";
import Android from "../utils/androidstudio.png";
import Vscode from "../utils/vscode.png";
import IntelliJ from "../utils/ijidea.png";
import Git from "../utils/git.png";
import Github from "../utils/github.png";
import MySql from "../utils/mySql.png";
import Sql from "../utils/sql.png";
import Firebase from "../utils/firebase.png";
import MongoDb from "../utils/mongodb.png";

const Skills = () => {
  useEffect(() => {
    let cIcon = document.querySelector(".c");
    let cppIcon = document.querySelector(".cpp");
    let javaIcon = document.querySelector(".java");
    let htmlIcon = document.querySelector(".html");
    let cssIcon = document.querySelector(".css");
    let jsIcon = document.querySelector(".js");
    let expressIcon = document.querySelector(".express");
    let nodeIcon = document.querySelector(".node");
    let reactIcon = document.querySelector(".react");
    let vscodeIcon = document.querySelector(".vscode");
    let gitIcon = document.querySelector(".git");
    let githubIcon = document.querySelector(".github");
    let ijideaIcon = document.querySelector(".ijidea");
    let androidstudioIcon = document.querySelector(".androidstudio");
    let mysqlIcon = document.querySelector(".mysql");
    let vscodeIcon2 = document.querySelector(".vscode2");
    let gitIcon2 = document.querySelector(".git2");
    let githubIcon2 = document.querySelector(".github2");
    let ijideaIcon2 = document.querySelector(".ijidea2");
    let androidstudioIcon2 = document.querySelector(".androidstudio2");
    let sqlIcon = document.querySelector(".sql");
    let firebaseIcon = document.querySelector(".firebase");
    let mongodbIcon = document.querySelector(".mongodb");
    let sqlIcon2 = document.querySelector(".sql2");
    let firebaseIcon2 = document.querySelector(".firebase2");
    let mongodbIcon2 = document.querySelector(".mongodb2");
    let sqlIcon3 = document.querySelector(".sql3");
    let firebaseIcon3 = document.querySelector(".firebase3");
    let mongodbIcon3 = document.querySelector(".mongodb3");
    /**************** Adding Link to each icon ******************************/

    //ClockWise
    function updateRevolvingImagesClockWise(
      imageSelector,
      center,
      radius,
      speed
    ) {
      let images = document.querySelectorAll(imageSelector);
      let angle = 0; // Initial angle

      function update() {
        let angleIncrement = (2 * Math.PI) / images.length; // Angle increment for each image

        images.forEach(function (image, index) {
          let x = center.x + radius * Math.cos(angle + angleIncrement * index); // Calculate x position
          let y = center.y + radius * Math.sin(angle + angleIncrement * index); // Calculate y position

          image.setAttribute("x", x - image.getAttribute("width") / 2); // Update x position of image
          image.setAttribute("y", y - image.getAttribute("height") / 2); // Update y position of image
        });

        angle += speed; // Update angle for rotation

        if (angle > 2 * Math.PI) {
          // Reset angle when it reaches full circle
          angle -= 2 * Math.PI;
        }
        requestAnimationFrame(update); // Call update function recursively
      }
      update();
    }

    let center = { x: 300, y: 300 }; // Center of the outer circle
    let radius = 250; // Radius of the outer circle
    let speed = 0.005; // Angular speed
    updateRevolvingImagesClockWise(".revolving-image", center, radius, speed);
    let center1 = { x: 300, y: 300 }; // Center of the outer circle
    let radius1 = 250; // Radius of the outer circle
    let speed1 = 0.005; // Angular speed
    updateRevolvingImagesClockWise(
      ".revolving-image1",
      center1,
      radius1,
      speed1
    );
    let center2 = { x: 300, y: 300 }; // Center of the outer circle
    let radius2 = 250; // Radius of the outer circle
    let speed2 = 0.012; // Angular speed
    updateRevolvingImagesClockWise(
      ".revolving-image2",
      center2,
      radius2,
      speed2
    );

    /**********************************************************************************/

    cIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://www.cprogramming.com/", "_blank");
    });

    cppIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://cplusplus.com/doc/tutorial/", "_blank");
    });

    javaIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://www.java.com/en/", "_blank");
    });

    htmlIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open(
        "https://developer.mozilla.org/en-US/docs/Web/HTML",
        "_blank"
      );
    });

    cssIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank");
    });

    jsIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://www.javascript.com/", "_blank");
    });

    expressIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://expressjs.com/", "_blank");
    });

    nodeIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://nodejs.org/en", "_blank");
    });

    reactIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://react.dev/", "_blank");
    });

    vscodeIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://code.visualstudio.com/", "_blank");
    });

    gitIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://github.com/", "_blank");
    });

    githubIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://git-scm.com/", "_blank");
    });

    ijideaIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://www.jetbrains.com/idea/", "_blank");
    });

    androidstudioIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://developer.android.com/studio", "_blank");
    });

    mysqlIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://www.mysql.com/", "_blank");
    });

    vscodeIcon2.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://code.visualstudio.com/", "_blank");
    });

    gitIcon2.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://github.com/", "_blank");
    });

    githubIcon2.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://git-scm.com/", "_blank");
    });

    ijideaIcon2.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://www.jetbrains.com/idea/", "_blank");
    });

    androidstudioIcon2.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://developer.android.com/studio", "_blank");
    });

    sqlIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://www.mysql.com/", "_blank");
    });

    firebaseIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://firebase.google.com/", "_blank");
    });

    mongodbIcon.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://www.mongodb.com/", "_blank");
    });

    sqlIcon2.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://www.mysql.com/", "_blank");
    });

    firebaseIcon2.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://firebase.google.com/", "_blank");
    });

    mongodbIcon2.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://www.mongodb.com/", "_blank");
    });
    sqlIcon3.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://www.mysql.com/", "_blank");
    });

    firebaseIcon3.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://firebase.google.com/", "_blank");
    });

    mongodbIcon3.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://www.mongodb.com/", "_blank");
    });
  }, []);
  return (
    <div>
      <section className="skills">
        <div className="skillHeading">SKILLS</div>
        <div className="skillTopic skillTopic1 hide">
          <span className="spanning">L</span>
          <span className="spanning">A</span>
          <span className="spanning">N</span>
          <span className="spanning">G</span>
          <span className="spanning">U</span>
          <span className="spanning">A</span>
          <span className="spanning">G</span>
          <span className="spanning">E</span>
        </div>
        <div className="skillTopic skillTopic4 hide">
          <span className="spanning">F</span>
          <span className="spanning">R</span>
          <span className="spanning">A</span>
          <span className="spanning">M</span>
          <span className="spanning">E</span>
          <span className="spanning">W</span>
          <span className="spanning">O</span>
          <span className="spanning">R</span>
          <span className="spanning">K</span>
        </div>
        <div className="skillTopic skillTopic2 hide">
          <span className="spanning">P</span>
          <span className="spanning">L</span>
          <span className="spanning">A</span>
          <span className="spanning">T</span>
          <span className="spanning">F</span>
          <span className="spanning">O</span>
          <span className="spanning">R</span>
          <span className="spanning">M</span>
        </div>
        <div className="skillTopic skillTopic3 spanning hide">DATABASE</div>
        <div className="skillLeft">
          <svg width="700" height="700" className="itemShadow">
            <circle
              cx="300"
              cy="300"
              r="250"
              stroke="black"
              stroke-width="2"
              fill="none"
              id="circle"
            />
            <image
              xlinkHref={C}
              className="revolving-image c"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Cpp}
              className="revolving-image cpp"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Java}
              className="revolving-image java"
              width="70"
              height="70"
            />
            <image
              xlinkHref={HTML}
              className="revolving-image html"
              width="70"
              height="70"
            />
            <image
              xlinkHref={CSS}
              className="revolving-image css"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Js}
              className="revolving-image js"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Express}
              className="revolving-image express"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Node}
              className="revolving-image node"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Reacts}
              className="revolving-image react"
              width="70"
              height="70"
            />
          </svg>
        </div>
        <div className="skillRight">
          <svg width="700" height="700" className="itemShadow">
            <circle
              cx="300"
              cy="300"
              r="250"
              stroke="black"
              stroke-width="2"
              fill="none"
            />
            <image
              xlinkHref={Vscode}
              className="revolving-image1 vscode"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Git}
              className="revolving-image1 git"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Github}
              className="revolving-image1 github"
              width="70"
              height="70"
            />
            <image
              xlinkHref={IntelliJ}
              className="revolving-image1 ijidea"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Android}
              className="revolving-image1 androidstudio"
              width="70"
              height="70"
            />
            <image
              xlinkHref={MySql}
              className="revolving-image1 mysql"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Vscode}
              className="revolving-image1 vscode2"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Git}
              className="revolving-image1 git2"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Github}
              className="revolving-image1 github2"
              width="70"
              height="70"
            />
            <image
              xlinkHref={IntelliJ}
              className="revolving-image1 ijidea2"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Android}
              className="revolving-image1 androidstudio2"
              width="70"
              height="70"
            />
          </svg>
        </div>
        <div className="skillMid">
          <svg width="700" height="700" className="itemShadow">
            <circle
              cx="300"
              cy="300"
              r="250"
              stroke="black"
              stroke-width="2"
              fill="none"
            />
            <image
              xlinkHref={Sql}
              className="revolving-image2 sql"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Firebase}
              className="revolving-image2 firebase"
              width="70"
              height="70"
            />
            <image
              xlinkHref={MongoDb}
              className="revolving-image2 mongodb"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Sql}
              className="revolving-image2 sql2"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Firebase}
              className="revolving-image2 firebase2"
              width="70"
              height="70"
            />
            <image
              xlinkHref={MongoDb}
              className="revolving-image2 mongodb2"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Sql}
              className="revolving-image2 sql3"
              width="70"
              height="70"
            />
            <image
              xlinkHref={Firebase}
              className="revolving-image2 firebase3"
              width="70"
              height="70"
            />
            <image
              xlinkHref={MongoDb}
              className="revolving-image2 mongodb3"
              width="70"
              height="70"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Skills;
