import React from 'react'
import CardComponent from './CardComponent'
import ProfileImage from "../assets/moi.png";
import Project1 from "../assets/projet1.png";
import Tinder from "../assets/tinder.png";
import Question from "../assets/question.png";
import Casino from "../assets/casino.png";
import Robot from "../assets/robot.png";
import "../styles/Cardparents.css";

const ProjectComponent = () => {
  return (
    <div>
      <h2 className="titlePage">
        Here are some projects that I made during my studies
      </h2>
      <div className="cards">
        <CardComponent
          title="MadeByMe website"
          image={Robot}
          body="Creation of a website for startup MadeByMe"
        ></CardComponent>
        <CardComponent
          title="Basalt APP"
          image={Project1}
          body=" Security application for distributed system"
        ></CardComponent>
        <CardComponent
          title="Casino website"
          image={Casino}
          body="Creation of a casino with cryptocurrencies"
        ></CardComponent>
      </div>

      <div className="cards">
        <CardComponent
          title="Quizz APP"
          image={Question}
          body="Development of a quiz app with flutter and dart"
        ></CardComponent>
        <CardComponent
          title="Tinder clone APP"
          image={Tinder}
          body="Clone of the Tinder app with react native"
        ></CardComponent>
        <CardComponent
          title="Personnal Portfolio"
          image={ProfileImage}
          body="Creation of a portfolio with React framework"
        ></CardComponent>
      </div>
    </div>
  );
};

export default ProjectComponent