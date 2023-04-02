import React from "react";
import GitHubCalendar from "react-github-calendar";
import ProjectCard from "./ProjectCard";
import "../Style/projects.css";
import { Flex } from "@chakra-ui/react";
import {
  kirayPe,
  dailyneeds,
  dataarr,
  grow,
  spritsVilla,
  optimizely,
} from "./AllProjects";

const Projects = () => {
  const [tech, setTech] = React.useState("all");

  const allProjectArr = [
    spritsVilla,
    dailyneeds,
    kirayPe,
    dataarr,
    grow,
    optimizely,
  ];
  const allWebArr = [spritsVilla, dailyneeds, dataarr, grow, optimizely];

  return (
    <section id="projects">
      <div id="tech" margin={"auto"} justifyContent={"space-around"}>
        <h1 style={{ color: "var(--color-font)" }}>Projects </h1>
      </div>
      <Flex
        id="skillsButton"
        m="auto"
        w={400}
        mb={"60px"}
        justifyContent={"space-evenly"}
      >
        <button
          className={tech === "all" ? "active" : null}
          onClick={() => setTech("all")}
        >
          ALL
        </button>
        <button
          className={tech ==="web" ? "active" : null}
          onClick={() => setTech("web")}
        >
          WEB
        </button>
        <button
          className={tech === "android" ? "active" : null}
          onClick={() => setTech("android")}
        >
          ANDROID{" "}
        </button>
      </Flex>
      <div id="procard">
        {tech === `android` ? (
          <>
            <ProjectCard
              key={new Date().getMilliseconds() * Math.random() * 535533}
              arr={kirayPe}
            />
          </>
        ) : null}
        {tech === "all" ? (
          <>
            {allProjectArr.map((el, index) => (
              <ProjectCard
                key={new Date().getMilliseconds() * Math.random() * 535533}
                arr={el}
              />
            ))}
          </>
        ) : null}
        {tech === "web" ? (
          <>
            {allWebArr.map((el, index) => (
              <ProjectCard
                key={new Date().getMilliseconds() * Math.random() * 535533}
                arr={el}
              />
            ))}
          </>
        ) : null}
      </div>
      <div id="gitname" margin={"auto"} justifyContent={"space-around"}>
        <h2 style={{ color: "var(--color-font)" }}>
          Github Contribution Calender{" "}
        </h2>
      </div>
      <div id="calendar">
        <GitHubCalendar
          fontSize={14}
          color="#850db4"
          blockRadius={1}
          blockMargin={6}
          blockSize={16}
          showWeekdayLabels
          username="hanumat-sharan"
        />
      </div>
      <div id="gitname" margin={"auto"} justifyContent={"space-around"}>
        <h2 style={{ color: "var(--color-font)" }}>Github Stats </h2>
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
