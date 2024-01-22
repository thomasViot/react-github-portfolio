import "../styles/FooterStyle.css"
import React from 'react'

import {FaHome, FaPhone,FaMailBulk,FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <p>Canohès, France</p>
          </div>
          <div className="location">
            <FaPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>+33 6 70 26 19 64</p>
          </div>

          <div className="location">
            <FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>thomas.viot@serviprog.fr</p>
          </div>
        </div>

        <div className="right">
          <h4>Thomas Viot - Portfolio</h4>
          <div className="social">
            <a href="https://github.com/thomasViot">
              <FaGithub
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/thomas-viot-67b56a197/">
              <FaLinkedin
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
            <a href="https://www.youtube.com/channel/UCp6G7jDxqzL4gVTZMyYbAOg">
              <FaYoutube
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer