import React from "react";
import illustration from "../Assets/project.svg";
import Resume from "../Assets/sparsh_kapoor.pdf";
import "./css/Home.css";
// import Typewriter from "typewriter-effect";

function Home({ theme }) {
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="details">
          <div className="greet">Hello 👋🏻</div>
          <p className="intro">
            I am{" "}
            <span style={{ color: `${theme.accent}` }}>Sparsh Kapoor</span>
          </p>
          <p className="desc" id="description">
            Front-end Developer with a knack for IOS Development
            {/* <Typewriter
              options={{
                strings: [
                  "Front-end Developer",
                  "With a spark for IOS Development",
                ],

                autoStart: true,
                loop: true,
                pauseFor: 4000,
              }}
            /> */}
          </p>
          <div className="buttons" id="buttons">
            <a
              href={Resume}
              download
              className="resume btn"
              style={{
                backgroundColor: `${theme.accent}`,
                color: "#FFF",
              }}
            >
              Resume
            </a>
            <a
              href="mailto:sparsh.1923ec1133@kiet.edu"
              className="connect btn"
              style={{
                color: "#000",
              }}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={illustration} alt="" className="illustration" />
      </div>
    </div>
  );
}

export default Home;
