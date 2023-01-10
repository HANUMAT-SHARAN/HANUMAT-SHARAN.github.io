
import React from "react";

import ProjectCard from "./ProjectCard";
import "../Style/projects.css";
const Projects = () => {
  
  return (
    <section id="projects">
       <div
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{color: "var(--color-font)" }}>Projects </h1>
      </div>
      <div id="procard">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
