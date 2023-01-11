import {
  SimpleGrid,
  Grid,
  Image,
  Box,
  Heading,
  Flex,
  ChakraProvider,
} from "@chakra-ui/react";
import React from "react";
import html from "../Components/Images/Html.png";
import css from "../Components/Images/Css.png";
import react from "../Components/Images/react.png";
import redux from "../Components/Images/redux-seeklogo.com.svg";
import mongo from "../Components/Images/mongodb-seeklogo.com.svg";
import node from "../Components/Images/nodejs.png";
import next from "../Components/Images/next-js-seeklogo.com.svg";
import js from "../Components/Images/js.png";
import git from "../Components/Images/git.png";
import github from "../Components/Images/github.png";
import chakra from "../Components/Images/chakra.png";
import express from "../Components/Images/express.png";
import vs from "../Components/Images/vscode.png";
import Button from "./Button";
import Tilt from "react-vanilla-tilt";
import Aos from "aos";
import "../Style/skill.css";
import { useEffect } from "react";

const Skills = () => {
  const [tech, setTech] = React.useState("all");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const skillsarr = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "Java Script" },
    { img: react, name: "React" },
    { img: redux, name: "Redux" },
    { img: mongo, name: "Mongo Db" },
    { img: node, name: "Node JS" },
    { img: next, name: "Next JS" },
    { img: express, name: "Express JS" },
  ];
  const frontend = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "Java Script" },
    { img: react, name: "React" },
    { img: redux, name: "Redux" },
    { img: next, name: "Next JS" },
  ];
  const backend = [
    { img: mongo, name: "Mongo Db" },
    { img: node, name: "Node JS" },

    { img: express, name: "Express JS" },
  ];
  const toolsarr = [
    { img: vs, name: "VS Code" },
    { img: github, name: "Github" },

    { img: chakra, name: "Chakra UI" },
    { img: git, name: "Git" },
  ];

  return (
    <section id="skills">
      <Flex
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
      >
        <h1 style={{ color: "var(--color-font)" }}>Technical Skills </h1>
        {/* <h1 style={{ color: "var(--color-font)" }}> Skills </h1> */}
      </Flex>
      <Flex
        id="skillsButton"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
        data-aos-offset="100"
        m="auto"
        w={400}
        mb={"60px"}
        justifyContent={"space-evenly"}
      >
        <button
          className={tech == "all" ? "active" : null}
          onClick={() => setTech("all")}
        >
          ALL
        </button>
        <button
          className={tech == "frontend" ? "active" : null}
          onClick={() => setTech("frontend")}
        >
          FRONTEND{" "}
        </button>
        <button
          className={tech == "backend" ? "active" : null}
          onClick={() => setTech("backend")}
        >
          BACKEND
        </button>
      </Flex>
      <div id="skillsdiv">
        {tech === "all"
          ? skillsarr.map((el) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                data-aos-offset="100"
              >
                {" "}
                <img alt="" src={el.img} />
                <h3>{el.name}</h3>
              </div>
            ))
          : null}
        {tech === "frontend"
          ? frontend.map((el) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                data-aos-offset="100"
              >
                <img alt="" src={el.img} />
                <h3>{el.name}</h3>
              </div>
            ))
          : null}
        {tech === "backend"
          ? backend.map((el) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                data-aos-offset="100"
              >
                {" "}
                <img alt="" src={el.img} />
                <h3>{el.name}</h3>
              </div>
            ))
          : null}
      </div>
      <Flex
        id="tools"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100"
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>Tools </h1>
      </Flex>
      <div id="skillsdiv">
        {toolsarr.map((el) => (
          <div
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            data-aos-offset="100"
          >
            {" "}
            <img alt="" src={el.img} />
            <h3>{el.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
