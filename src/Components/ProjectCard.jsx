import React from "react";

function ProjectCard({ head, desc, live, code, image, theme }) {
  return (
    <div className="project-card">
      <div className="left" id="left">
        <div className="head">
          {head}
          <div
            className="border-line"
            style={{ backgroundColor: `${theme.accent}` }}
          >
            {" "}
          </div>
        </div>
        <p className="desc" id="project-desc">
          {desc}
        </p>
        <div className="btm">
          <a
            href={live}
            target="blank"
            className="live btns"
            style={{
              borderColor: `${theme.accent}`,
              color: "white",
              backgroundColor: `${theme.accent}`,
            }}
          >
            {" "}
            See Live
          </a>
          <a href={code} target="blank" className="src btns">
            Source Code
          </a>
        </div>
      </div>
      <div className="right">
        <img src={image} alt="" className="image" />
      </div>
    </div>
  );
}

export default ProjectCard;
