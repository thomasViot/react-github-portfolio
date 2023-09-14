import React from 'react'
import CardComponent from './CardComponent'
import ProfileImage from "../assets/moi.png";
import Project1 from "../assets/logo-1001tr.png";
import Tinder from "../assets/tinder.png";
import Question from "../assets/leaf.png";
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
        <a href="https://madebyme.app/">
          <CardComponent
            title="MadeByMe website"
            image={Robot}
            body="Creation of a website for startup MadeByMe"
          ></CardComponent>
        </a>
        <a href="https://1001travaux.vercel.app/">
          <CardComponent
            title="1001 Travaux"
            image={Project1}
            body="Creation of a website using Next.js for a company"
          ></CardComponent>
        </a>
        <a href="https://thomasviot.github.io/react-github-portfolio">
          <CardComponent
            title="Personnal Portfolio"
            image={ProfileImage}
            body="Creation of a portfolio with React framework"
          ></CardComponent>
        </a>
      </div>

      <div className="cards">
        <a href="https://digitali.vercel.app/">
          <CardComponent
            title="Digitali website"
            image={Question}
            body="Development of a website for Digitali company"
          ></CardComponent>
        </a>

        <CardComponent
          title="Casino website"
          image={Casino}
          body="Creation of a casino with cryptocurrencies"
        ></CardComponent>
        <CardComponent
          title="Tinder clone APP"
          image={Tinder}
          body="Clone of the Tinder app with react native"
        ></CardComponent>
      </div>
    </div>
  );
};

export default ProjectComponent