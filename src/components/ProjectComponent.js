import React from 'react'
import CardComponent from './CardComponent'
import ProfileImage from "../assets/moi.jpg"
import Project1 from "../assets/projet1.png"
import Tinder from "../assets/tinder.png"
import Question from "../assets/question.png"
import Reddit from "../assets/reddit.png"
import Casino from "../assets/casino.png"
import "../styles/Cardparents.css"

const ProjectComponent = () => {
  return (
    <div>
        <h2 className='titlePage'>Here are some projects that I made during my studies</h2>
        <div className='cards'>   
            <CardComponent title="Personnal Portfolio" image={ProfileImage} body="Creation of a portfolio with React framework"></CardComponent> 
            <CardComponent title="Basalt APP" image={Project1} body=" Security application for distributed system"></CardComponent> 
            <CardComponent title="Tinder clone APP" image={Tinder} body="Clone of the Tinder app with react native"></CardComponent>
        </div>

        <div className='cards'>   
            <CardComponent title="Quizz APP" image={Question} body="Development of a quiz app with flutter and dart"></CardComponent> 
            <CardComponent title="Reddit clone" image={Reddit} body="Reddit clone with server-side with NodeJs"></CardComponent>
            <CardComponent title="Casino website" image={Casino} body="Creation of a casino with cryptocurrencies"></CardComponent> 
        </div>
        
    </div>
  )
}

export default ProjectComponent