import React, { useEffect } from "react";
import "../Style/home.css";
import profile from "../Components/Images/hanumat.png";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@mui/material";
import Aos from "aos";
const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="home" style={{  marginTop: "90px" }}>
      <div  data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                data-aos-offset="100" id="profile">
        {/* image */}
        <img src={profile} alt="" />
      </div>
      <div  data-aos="fade-down-right"
    data-aos-duration="2000"
    data-aos-delay="300" id="hanumat">
     
        <h1>
          {" "}
          Hello,<i class="fa-solid fa-hand-wave"></i>My Name Is{" "}
        </h1>
        <h1 data-aos="fade-down-right"
    data-aos-duration="2000"
    data-aos-delay="300" id="name">Hanumat Sharan</h1>
        <h1  data-aos="fade-down-right"
    data-aos-duration="2000"
    data-aos-delay="300"
    id="type">
          <Typewriter
            deleteSpeed={50}
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
        <button id="resume"
          style={{
            borderRadius: "1rem",
            backgroundColor: "crimson",
            color: "white",
            padding: "15px 20px 15px 20px",
          }}
        >
          Resume
        </button>
      </div>
    </section>
  );
};

export default Home;
