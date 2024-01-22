import React from 'react'
import CardComponent from "./CardComponent";
import Project1 from "../assets/logo-1001tr.png";
import Tinder from "../assets/tinder.png";
import Question from "../assets/serviprog.png";
import Casino from "../assets/casino.png";
import Robot from "../assets/robot.png";
import NTV from "../assets/logo.jpg";
import "../styles/Cardparents.css";

const ProjectComponent = () => {
  return (
    <div>
      <h2 className="titlePage">
        Here are some projects that I made during my studies
      </h2>
      <div className="cards">
        <a href="https://lantv.fr/">
          <CardComponent
            title="LA NTV TRAINING CENTER"
            image={NTV}
            body="Creation of an E-commerce website"
          ></CardComponent>
        </a>
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
      </div>

      <div className="cards">
        <a href="https://digitali.vercel.app/">
          <CardComponent
            title="ServiProg website"
            image={Question}
            body="Development of a website for ServiProg company"
          ></CardComponent>
        </a>
        <CardComponent
          title="Casino website"
          image={Casino}
          body="School project: Creation of a casino with cryptocurrencies"
        ></CardComponent>
        <CardComponent
          title="Tinder clone APP"
          image={Tinder}
          body="School project: Clone of the Tinder app with react native"
        ></CardComponent>
      </div>
    </div>
  );
};

export default ProjectComponent