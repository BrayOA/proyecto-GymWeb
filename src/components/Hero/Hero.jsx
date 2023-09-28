import React from 'react'
import './Hero.css'
import hero_images from '../../assets/hero_image.png'
import hero_images_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import Header from '../Header/Header'
const Hero = () => {
  return (
    <div className= "hero">
      <div className="left-h">
         <Header />
        {/* the best add */}
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
          </div>

          {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text' >Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora quod exercitationem sit. Voluptas tenetur.
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>+100</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>menbers joined</span>
          </div>   
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
          {/* hero buttons */}
          <div className="hero-buttons">
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
          </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
        </div>
        {/* hero images */}
        <img src={hero_images} alt="" className='hero-image'/>
        <img src={hero_images_back} alt="" className='hero-image-back'/>
        {/* calories */}
        <div className="calories">
          <img src={Calories} alt="" />
            <div>
              <span>Calories</span>
              <span>220.kcal</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero
