import React from "react";
import patternL from "../Assets/pattern-l.svg";
import patternR from "../Assets/pattern-r.svg";
import HTML from "../Assets/skills/html.svg";
import CSS from "../Assets/skills/css.svg";
import JS from "../Assets/skills/javascript.svg";
import react from "../Assets/skills/react.svg";
import Redux from "../Assets/skills/redux.svg";
import GSAP from "../Assets/skills/gsap.svg";
import SASS from "../Assets/skills/sass.svg";
import SVG from "../Assets/skills/svg.svg";
import "./css/Skills.css";

function Skills({ theme }) {
  return (
    <div className="skills" id="skills">
      <img src={patternR} alt="" className="pattern-right" />
      <img src={patternL} alt="" className="pattern-left" />
      <div
        className="skills-head"
        id="skills-head"
        style={{ color: `${theme.accent}` }}
      >
        My Skills
      </div>
      <div className="skills-subhead" id="skills-subhead">
        I like to take responsibility to craft aesthetic user experience using
        modern frontend architecture.
      </div>
      <div className="section">
        <div className="sec-head" id="sec-head">
          Frontend Development
        </div>
        <div className="skill-icons" id="skill-icons">
          <img src={HTML} alt="" className="skill-icon" />
          <img src={CSS} alt="" className="skill-icon" />
          <img src={JS} alt="" className="skill-icon" />
          <img src={react} alt="" className="skill-icon" />
          <img src={Redux} alt="" className="skill-icon" />
          <img src={GSAP} alt="" className="skill-icon" />
          <img src={SASS} alt="" className="skill-icon" />
          <img src={SVG} alt="" className="skill-icon" />
        </div>
      </div>
      <div className="section">
        <div className="sec-head">Other Skills</div>
        <div className="skill-icons">
          <img src={HTML} alt="" className="skill-icon" />
          <img src={CSS} alt="" className="skill-icon" />
          <img src={JS} alt="" className="skill-icon" />
          <img src={react} alt="" className="skill-icon" />
          <img src={Redux} alt="" className="skill-icon" />
          <img src={GSAP} alt="" className="skill-icon" />
          <img src={SASS} alt="" className="skill-icon" />
          <img src={SVG} alt="" className="skill-icon" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
