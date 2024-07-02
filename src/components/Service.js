import React from 'react'
import Meet from '../utils/meet.jpg'
import { useNavigate } from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate();

  const handleGo = () =>{
    navigate('/contact')
  }

  return (
    <div>z
      <section class="helpYou">
        <div class="helpYouUpper">
          <div class="helpYouUpperin helpYouUpper1">
            <div class="helpYouButton helpYouButtonimg"><img src={Meet} alt=""/></div>
            <div class="Unique">Unique</div>
            <div class="Ideas">Ideas</div>
          </div>
          <div class="helpYouUpperin helpYouUpper2">
            <div class="forYour">For Your</div>
            <div class="Business">Business.</div>
            <div class="helpYouButton">WHAT I DO?</div>
          </div>
        </div>
        <div class="helpYouLower">
          <div class="serviceCard">
            <div class="serviceCardHeading">Branding</div>
            <div class="serviceCardDescription">Establish a strong and memorable brand identity through cohesive visual elements and messaging, reflecting your unique values and resonating with your target audience.</div>
            <div class="serviceCardBtn" onClick={handleGo}>Go</div>
          </div>
          <div class="serviceCard">
            <div class="serviceCardHeading">Design</div>
            <div class="serviceCardDescription">Craft visually captivating and intuitive user interfaces tailored to your brand identity, ensuring a seamless and engaging experience for your audience.</div>
            <div class="serviceCardBtn" onClick={handleGo}>Go</div>
          </div>
          <div class="serviceCard">
            <div class="serviceCardHeading">Development</div>
            <div class="serviceCardDescription">Build robust and scalable web solutions using cutting-edge technologies, customized to meet your specific business requirements and exceed expectations.</div>
            <div class="serviceCardBtn" onClick={handleGo}>Go</div>
          </div>
          <div class="serviceCard">
            <div class="serviceCardHeading">Testing</div>
            <div class="serviceCardDescription"> Ensure the reliability and functionality of your web solutions through rigorous testing procedures, identifying and resolving any issues to deliver a seamless user experience.</div>
            <div class="serviceCardBtn" onClick={handleGo}>Go</div>
          </div>
        </div>
      </section>
      <p class="line"></p>
    </div>
  )
}

export default Service
