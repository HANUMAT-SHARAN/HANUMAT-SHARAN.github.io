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

import mongo from "../Components/Images/mongodb-seeklogo.com.svg";
import npm from "../Components/Images/npm.876.svg";
import node from "../Components/Images/nodejs.png";
import {
  html,
  css,
  js,
  react,
  redux,
  next,
  express,
  typescript,
  dsa,
  cypress,
  vs,
  git,
  github,
  chakra,
  postman,
  kitten,
  thunder,
} from "../Components/Images/AllLogos";

import "../Style/skill.css";

import { useEffect } from "react";

const Skills = () => {
  const html = `https://i.postimg.cc/fRbKFQ8X/Html.png`;

 
  const [tech, setTech] = React.useState("all");


  const skillsarr = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "Java Script" },
    { img: react, name: "React" },
    { img: redux, name: "Redux" },
    { img: mongo, name: "Mongo Db" },
    { img: node, name: "Node JS" },
    { img: react, name: "React Native" },
    { img: next, name: "Next JS" },
    { img: express, name: "Express JS" },
    { img: typescript, name: "Type Script" },
    { img: npm, name: "Npm" },
    { img: dsa, name: "DSA" },
    { img: cypress, name: "Cypress" },
  ];
  const frontend = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "Java Script" },
    { img: react, name: "React" },
    { img: redux, name: "Redux" },
    { img: next, name: "Next JS" },
    { img: react, name: "React Native" },
    { img: typescript, name: "Type Script" },
    { img: npm, name: "Npm" },
    { img: dsa, name: "DSA" },
    { img: cypress, name: "Cypress" },
  ];
  const canva=`https://freelogopng.com/images/all_img/1656734305canva-app-icon.png`
  const backend = [
    { img: mongo, name: "Mongo Db" },
    { img: node, name: "Node JS" },
    { img: npm, name: "Npm" },
    { img: express, name: "Express JS" },
    { img: dsa, name: "DSA" },
  ];
  const toolsarr = [
    { img: vs, name: "VS Code" },
    { img: github, name: "Github" },

    { img: chakra, name: "Chakra UI" },
    { img: git, name: "Git" },
    { img: kitten, name: "Kitten UI" },
    { img: postman, name: "Postman" },
   
    { img: canva, name: "Canva" }, { img: thunder, name: "Thunder Client" },
  ];
  


  return (
    <section id="skills">
      <Flex
        id="tech"
      
      >
        <h1 style={{ color: "var(--color-font)" }}>Technical Skills </h1>
        {/* <h1 style={{ color: "var(--color-font)" }}> Skills </h1> */}
      </Flex>
      <Flex
        id="skillsButton"
       
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
      {tech === "all" ? (
        <div

          id="skillsdiv"
        >
          {tech === "all"
            ? skillsarr.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "frontend"
            ? frontend.map((el) => (
                <div>
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "backend"
            ? backend.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
        </div>
      ) : null}
      {tech === "backend" ? (
        <div
        
          id="skillsdiv"
        >
          {tech === "all"
            ? skillsarr.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "frontend"
            ? frontend.map((el) => (
                <div>
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "backend"
            ? backend.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
        </div>
      ) : null}
      {tech === "frontend" ? (
        <div
         
          id="skillsdiv"
        >
          {tech === "all"
            ? skillsarr.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "frontend"
            ? frontend.map((el) => (
                <div>
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "backend"
            ? backend.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
        </div>
      ) : null}
      <Flex
        id="tools"
        
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>Tools </h1>
      </Flex>
      <div id="skillsdiv">
        {toolsarr.map((el) => (
          <div
           
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
