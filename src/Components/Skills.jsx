import { SimpleGrid, Grid, Image, Box, Heading } from "@chakra-ui/react";
import React from "react";
import html from "../Components/Images/Html.png";
import css from "../Components/Images/Css.png";
import react from "../Components/Images/react.png";
import redux from "../Components/Images/redux.png";
import Aos from "aos";
import "../Components/main.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const skillsarr = [
    { img: html },
    { img: css },
    { img: react },
    { img: redux },
  ];
  return (
    <section id="skills">
      <h1>My Technical Skills</h1>

      <div id="skillsdiv">
        {skillsarr.map((el) => (
          <Box
            data-aos="fade-down-right"
            data-aos-duration="4000"
            data-aos-delay="300"
            p={20}
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          >
            {" "}
            <Image boxSize={120} src={el.img} />
            <Heading color="black">Html</Heading>
          </Box>
        ))}
      </div>
    </section>
  );
};

export default Skills;
