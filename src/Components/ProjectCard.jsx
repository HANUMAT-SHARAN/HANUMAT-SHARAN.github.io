import React, { useState, useEffect } from "react";
import Carousel from "nuka-carousel/lib/carousel";
import "../Style/card.css";
import Aos from "aos";
import html from "../Components/Images/Html.png";
import css from "../Components/Images/Css.png";
import react from "../Components/Images/react.png";
import js from "../Components/Images/js.png";
const ProjectCard = ({ arr }) => {
  
 



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
            <h1 id="title">{el.title} <span style={{color:"var(--color-bg)",fontSize:"18px"}}>[Clone]</span> </h1>
            <div id="des">
              <h3>{el.des}</h3>
            </div>
            <div id="techstack">
              <h2>
                {/* {" "}
                <span style={{ color: "var(--color-bg)" }}>
                  Tech Stack{" ->"}
                </span>{" "}
                {el.techstack} */}
               <div id="tsres">
               {el.techstack.map((el)=><div>
                <img width={50} src={el.src} alt=""/>
                <p>{el.name}</p>
               </div>)}
               </div>
              </h2>
            </div>

            <div id="deployed">
              <a target="blank" href={el.github}>
                <button >
                  <i class="fa-brands fa-github"></i> Github
                </button>
              </a>
              <a target="blank" href={el.live}>
                <button >
                  {""}
                  <i class="fa-solid fa-eye"></i>
                  {"   "} Live
                </button>
              </a>
              <button >
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
