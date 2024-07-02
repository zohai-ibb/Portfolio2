import React, { useEffect } from "react";
import skillUp from "../utils/skilliup.jpg";
import skillIp2 from "../utils/skillup2.jpg";
import JavaCerti from "../utils/Java Certificate.jpg";
import js from "../utils/js.jpg";
import Reactjs from "../utils/reactjs.jpg";

const Certificates = () => {

  useEffect(() => {
    let upperSlide = document.querySelector(".slideUpper");
    let downSlide = document.querySelector(".slideDown");
    let workMore = document.querySelector(".workMore");
    let currentLeftValue;

    workMore.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        currentLeftValue = parseFloat(
          window
            .getComputedStyle(upperSlide)
            .getPropertyValue("left")
            .replace("px", "")
        );
        upperSlide.style.left = currentLeftValue - 40 + "px";
        console.log(currentLeftValue);
      } else {
        currentLeftValue = parseFloat(
          window
            .getComputedStyle(upperSlide)
            .getPropertyValue("left")
            .replace("px", "")
        );
        upperSlide.style.left = currentLeftValue + 40 + "px";
        console.log(currentLeftValue);
      }
    });
    workMore.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        console.log(currentLeftValue);
        currentLeftValue = parseFloat(
          window
            .getComputedStyle(downSlide)
            .getPropertyValue("left")
            .replace("px", "")
        );
        downSlide.style.left = currentLeftValue + 40 + "px";
        console.log(currentLeftValue);
      } else {
        currentLeftValue = parseFloat(
          window
            .getComputedStyle(downSlide)
            .getPropertyValue("left")
            .replace("px", "")
        );
        downSlide.style.left = currentLeftValue - 40 + "px";
      }
    });
  }, []);

  return (
    <div>
      <section class="workMore">
        <div class="slide slideUpper">
          <div class="slideImages">
            <img src={JavaCerti} alt="" />
          </div>
          <div class="slideImages">
            <img src={skillUp} alt="" />
          </div>
          <div class="slideImages">
            <img src={skillIp2} alt="" />
          </div>
          <div class="slideImages">
            <img src={js} alt="" />
          </div>
          <div class="slideImages">
            <img src={skillUp} alt="" />
          </div>
        </div>
        <div class="slide slideDown">
          <div class="slideImages">
            <img src={JavaCerti} alt="" />
          </div>
          <div class="slideImages">
            <img src={JavaCerti} alt="" />
          </div>
          <div class="slideImages">
            <img src={Reactjs} alt="" />
          </div>
          <div class="slideImages">
            <img src={JavaCerti} alt="" />
          </div>
          <div class="slideImages">
            <img src={skillIp2} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
