import React, { useEffect } from "react";
import "../Style/home.css";
import profile from "../Components/Images/hanumat.png";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@mui/material";
import my from "../Components/Images/hanumat_logo.png";
import Aos from "aos";
import lock from "../Components/Audio/lock.mp3"
const Home = () => {

  function locksound() {
    new Audio(lock).play();
  }
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="home">
      <div
      onClick={locksound}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100"
        id="profile"
      >
        {/* image */}
        <img src={my} alt="" />
      </div>
      <div
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        id="hanumat"
      >
        <h1
          data-aos="fade-down-right"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          {" "}
          Hello<img width={40} src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/waving-hand_1f44b.gif" alt="" /> {" "}My Name Is{" "}
        </h1>
        <h1
           data-aos="fade-down-right"
           data-aos-duration="2000"
           data-aos-delay="300"
          id="name"
        >
          Hanumat Sharan
        </h1>
        <h1
          data-aos="fade-down-right"
          data-aos-duration="2000"
          data-aos-delay="300"
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
      
       <a href="https://drive.google.com/uc?id=1XQsL2a-Jw_dGKsCm4KvWWunVTALaojUW&export=download">
          <button onClick={locksound}
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
        
      
        <div id="homesocial" >
            <a onClick={locksound}  target="blank" href="https://github.com/HANUMAT-SHARAN">
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>

            <a onClick={locksound} target="blank" href="https://www.linkedin.com/in/hanumat-sharan-168548258/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        
        
      </div>
      
    </section>
  );
};

export default Home;
