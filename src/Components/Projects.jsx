import React from "react";
import ProjectCard from "./ProjectCard";
import "./css/Projects.css";
import projectImage from "../Assets/protostream.png";

function Projects({ theme }) {
  const projects = [
    {
      title: "Protostream",
      desc: "A native-web app portal with multi-user interface, to faciliate a unique platform for students / startup fellows / entrepreneurs / venture capalist / angel investors / mentors / institutional head / funding organization.",
      src: "../assets/protostream.png",
      live: "https://protostream.in/",
      code: "https://github.com/PROTOSTREAM",
    },
  ];

  return (
    <div className="projects" id="projects">
      <div
        className="project-head"
        id="project-head"
        style={{ color: `${theme.accent}` }}
      >
        My Projects
      </div>
      <div className="cards">
        {projects.map((project) => (
          <ProjectCard
            head={project.title}
            desc={project.desc}
            live={project.live}
            code={project.code}
            image={projectImage}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
