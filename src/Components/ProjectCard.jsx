import React, { useState, useEffect } from "react";
import Carousel from "nuka-carousel/lib/carousel";
import "../Style/card.css";
import Aos from "aos";
import aud from "../Components/Audio/cardaudio.mp3";
import lock from "../Components/Audio/lock.mp3";
const ProjectCard = ({ arr }) => {
  // function playsound() {
  //   new Audio(aud).play();
  // }
  function locksound() {
    new Audio(lock).play();
  }

  // window.onload = start();

  // function start() {
  //   console.log(1);
  // }
  // window.addEventListener("onload",playsound)
  let defaultControlsConfig = {
    nextButtonText: "nextf",
    prevButtonText: "d",
    pagingDotsContainerClassName: "con",
    nextButtonClassName: "next",
    prevButtonClassName: "next",
    pagingDotsClassName: "con",
    speed: 20,
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
     
      {arr.map((el) => (
        <div  id="card">
          <Carousel
            defaultControlsConfig={defaultControlsConfig}
            autoplay={true}
            id="carousel"
            slidesToShow={1}
            wrapAround={true}
          >
            {el.imgarr.map((el) => (
              <div id="webimg">
                {console.log(el.img)}
                <img style={{ borderRadius: "1rem" }} src={el.img} alt="" />
              </div>
            ))}
          </Carousel>
          <div>
            <h1 id="title">{el.title} </h1>
            <div id="des">
              <h3>{el.des}</h3>
            </div>
            <div id="techstack">
              <h2>
                {" "}
                <span style={{ color: "var(--color-bg)" }}>
                  Tech Stack{" ->"}
                </span>{" "}
                {el.techstack}
              </h2>
            </div>

            <div id="deployed">
              <a target="blank" href={el.github}>
                <button onClick={locksound}>
                  <i class="fa-brands fa-github"></i> Github
                </button>
              </a>
              <a target="blank" href={el.live}>
                <button onClick={locksound}>
                  {""}
                  <i class="fa-solid fa-eye"></i>
                  {"   "} Live
                </button>
              </a>
              <button onClick={locksound}>
                <i class="fa-solid fa-video"></i> Watch
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
