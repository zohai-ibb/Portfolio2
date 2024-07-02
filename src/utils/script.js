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
function updateRevolvingImagesClockWise(imageSelector, center, radius, speed) {
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
updateRevolvingImagesClockWise(".revolving-image1", center1, radius1, speed1);
let center2 = { x: 300, y: 300 }; // Center of the outer circle
let radius2 = 250; // Radius of the outer circle
let speed2 = 0.012; // Angular speed
updateRevolvingImagesClockWise(".revolving-image2", center2, radius2, speed2);

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
  window.open("https://developer.mozilla.org/en-US/docs/Web/HTML", "_blank");
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
