import React from "react";
import "./css/About.css";

function About({ theme }) {
  return (
    <div className="about" id="about">
      <p className="top para" id="top-para">
        I am a passionate UI Engineer who bridges the gap between development
        and design.{" "}
      </p>
      <p className="bottom para" id="btm-para">
        I take responsibility to craft a good user experience using modern
        frontend architecture.
      </p>
    </div>
  );
}

export default About;
