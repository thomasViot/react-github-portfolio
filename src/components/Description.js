import React from 'react'
import ProfileImage from "../assets/moi.jpg"
import "../styles/DescriptionStyle.css"
import {Link} from "react-router-dom";

const Description = () => {

  
  return (
    <div className='description'>

        <div className='text-zone'>
            <div className='text-zone-wrapper'>
              <h2 className='intro'>Hello, My name is</h2>
              
              <h1 className='name'>Thomas Viot</h1>
              
              <div className='title'>
                <div className='title-wrapper'>
                  <div className='title-item'>Student at ENSEIRB-MATMECA</div>
                  <div className='title-item'>Front-end Developer</div>
                  <div className='title-item'>Video Maker</div>
                  <div className='title-item'>Athlete</div>
                </div>
              </div>

              <div className='button-container'>
                <Link to="/react-github-portfolio/Contact" className='button'>Hire me</Link>
              </div>
              
            </div>
        </div>

        
          <div className='pictures'>
              <img className='firstPlanImage' src={ProfileImage} alt="profile" ></img>
          </div>
        
        
          
        
        
    </div>
  )
}

export default Description