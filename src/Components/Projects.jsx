import { Heading } from '@chakra-ui/react'
import React from 'react'
import html from "../Components/Images/Html.png";
import ProjectCard from './ProjectCard'
import "../Style/projects.css"
const Projects = () => {
  return (
    <section  id="projects"  style={{height:"100vh"}}>
    {/* <div id="c" style={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        
        <div>
          {" "}
          <ProjectCard />
        </div>
        <div>
          {" "}
          <ProjectCard />
        </div>
        <ProjectCard />
      </div>
      <div>
        <ProjectCard/>
      </div>
      <div>
        <h1>
          Hello
        </h1>
        <img width={50} src={html} alt="" />
      </div> */}
      {/* <ProjectCard/> */}
    </section>
  )
}

export default Projects
