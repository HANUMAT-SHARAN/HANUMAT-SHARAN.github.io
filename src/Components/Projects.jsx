import React from "react";
import GitHubCalendar from "react-github-calendar";
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
        <h1 style={{ color: "var(--color-font)" }}>Projects </h1>
      </div>
      <div id="procard">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>
          Github Contributon Calender{" "}
        </h1>
      </div>
      <div id="calendar">
        <GitHubCalendar
          fontSize={10}
          color="#850db4"
          blockRadius={1}
          blockMargin={5}
          username="hanumat-sharan"
        />
      </div>
      <div
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>Github Stats </h1>
      </div>
      <div id="gitstats">
        <img
          alt="most used languages"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=HANUMAT-SHARAN&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8&langs_count=20&hide=hack,swift,kotlin,objective-c"
        />

        <img
          alt="status github, commits, etc..."
          src="https://github-readme-streak-stats.herokuapp.com/?user=HANUMAT-SHARAN&count_private=true&show_icons=true&custom_title=Github&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8"
        />

        <img
          alt="7oSkaaa's Github Stats"
          src="https://github-readme-stats.vercel.app/api?username=HANUMAT-SHARAN&show_icons=true&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=10"
        />
        <img
      
          alt="Hanumat Activity Graph"
          src="https://github-readme-activity-graph.cyclic.app/graph?username=HANUMAT-SHARAN&theme=react-dark&hide_border=false"
        />
      </div>
    </section>
  );
};

export default Projects;
