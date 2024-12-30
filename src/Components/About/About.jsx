import { useState } from "react";
import "./About.css";
import raviranjan from "../../img/me.jpg";
import { Icon } from "@iconify/react";

const About = ({ darkmode }) => {
  const [rotateY, setRotateY] = useState(0);
  const [rotateX, setRotateX] = useState(0);

  const handleMouseMove = (event) => {
    const containerWidth = event.currentTarget.offsetWidth;
    const containerHeight = event.currentTarget.offsetHeight;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const mouseX = event.pageX - event.currentTarget.offsetLeft;
    const mouseY = event.pageY - event.currentTarget.offsetTop;
    const newRotateY = ((mouseX - centerX) / containerWidth) * 15;
    const newRotateX = -((mouseY - centerY) / containerHeight) * 15;
    setRotateY(newRotateY);
    setRotateX(newRotateX);
  };

  const resetImageTransform = () => {
    setRotateY(0);
    setRotateX(0);
  };

  return (
    <div className="about" id="About">
      <div className={`${darkmode ? "about-line" : ""}`}></div>
      <div className="about-me">
        About
        <span className="me"> Me</span>
      </div>
      <div className="about-container">
        <div className="resume-box">
          <div
            className="aright"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetImageTransform}
          >
            <div className="image-container">
              <img
                src={raviranjan}
                alt="myphoto"
                id="bending-image"
                style={{
                  transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                }}
              />
            </div>
          </div>
          <div className="resume">
            <a
              href="https://drive.google.com/file/d/1L8pgeGuofxWVGWF3BAx3ZCa2mdzAwDo3/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">
                Get Resume
                <div className="icon">
                  <Icon icon="fa-brands:get-pocket" />
                </div>
              </button>
            </a>
          </div>
        </div>

        <div className="aleft">
          <span>
            <span>
              <h3>I'm raviranjan patel</h3>
              <h4>
                Passionate Web Developer | Competitive Programming Enthusiast
              </h4>
            </span>
            <span>
              I am a final year Computer Science and Engineering student at the
              National Institute of Technology, Silchar. My journey includes an
              internship as a Software Engineering Intern at BWS.
              <br />
              <br />
              I'm a passionate developer who enjoys tackling challenging
              problems and crafting engaging websites. Over the years, I've
              gained valuable experience by working on diverse projects and
              honed my skills in software development.
              <br />
              <p className="mbl_hide">
                My dedication to continuous learning has allowed me to stay
                up-to-date with the latest technologies and industry trends. I
                thrive in collaborative environments and have a strong
                commitment to delivering high-quality results.
              </p>
            </span>
            <div className="about-info">
              <div>
                <span>Age</span>: 21
                <br />
                <span>Email</span>: raviranjanpatel3579@gmail.com
              </div>
              <div>
                <span>Place</span>: patna, India
                <br />
                <span>College</span>: National Institute of Technology, Silchar
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
export default About;
