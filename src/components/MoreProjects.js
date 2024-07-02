import React, { useEffect } from "react";
import Kaki from '../utils/kaki.png'
import Enchat from '../utils/Screenshot (114).png'
import TTT from '../utils/ttt.png'
import RPS from '../utils/rps.png'
import Bootstrap from '../utils/Screenshot (141).png'
import Netflix from '../utils/Screenshot (112).png';
import Spotify from '../utils/Screenshot (113).png';
import Estate from '../utils/Screenshot (134).png'

const MoreProjects = () => {

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
            <img src={Kaki} alt="" />
          </div>
          <div class="slideImages">
            <img src={Enchat} alt="" />
          </div>
          <div class="slideImages">
            <img src={RPS} alt="" />
          </div>
          <div class="slideImages">
            <img src={TTT} alt="" />
          </div>
          <div class="slideImages">
            <img src={Kaki} alt="" />
          </div>
        </div>
        <div class="slide slideDown">
          <div class="slideImages">
            <img src={Bootstrap} alt="" />
          </div>
          <div class="slideImages">
            <img src={Netflix} alt="" />
          </div>
          <div class="slideImages">
            <img src={Spotify} alt="" />
          </div>
          <div class="slideImages">
            <img src={Estate} alt="" />
          </div>z
          <div class="slideImages">
            <img src={Bootstrap} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreProjects;
