import React, { useEffect } from "react";
import "../Style/home.css";

import { Typewriter } from "react-simple-typewriter";
import { Button } from "@mui/material";

import Aos from "aos";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="home">
      <div
       
        id="profile"
      >
        {/* image */}
        <img src={`https://i.postimg.cc/xT6GLF9d/hanumat-logo.png`} alt="" />
      </div>
      <div
     
        id="hanumat"
      >
        <h1
         
        >
          {" "}
          Hello
          <img
            width={40}
            src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/waving-hand_1f44b.gif"
            alt=""
          />{" "}
          My Name Is{" "}
        </h1>
        <h1
         
          id="name"
        >
          Hanumat Sharan
        </h1>
        <h1
          
          id="type"
        >
          <Typewriter
            deleteSpeed={90}
            typeSpeed={100}
            delaySpeed={2500}
            words={[
              "Full Stack Web Developer",
              "Problem Solver",
              "Life Long Learner",
            ]}
            loop
            cursor
            cursorBlinking
            cursorStyle="|"
          />
        </h1>

        <a
          target="blank"
          href="https://drive.google.com/uc?id=1XQsL2a-Jw_dGKsCm4KvWWunVTALaojUW&export=download"
        >
          <button
            id="resume"
            style={{
              borderRadius: "1rem",

              color: "white",
              padding: "15px 20px 15px 20px",
            }}
          >
            Resume
          </button>
        </a>

        <div id="homesocial">
          <a target="blank" href="https://github.com/HANUMAT-SHARAN">
            {" "}
            <i class="fa-brands fa-github"></i>
          </a>

          <a
            target="blank"
            href="https://www.linkedin.com/in/hanumat-sharan-168548258/"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
