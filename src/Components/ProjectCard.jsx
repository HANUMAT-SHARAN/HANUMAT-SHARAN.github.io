import React, { useState, useEffect } from "react";
import Carousel from "nuka-carousel/lib/carousel";
import "../Style/card.css";
import Aos from "aos";
const ProjectCard = () => {
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
    <div
      data-aos="zoom-in-down"
      data-aos-duration="2000"
      data-aos-offset="100"
      data-aos-anchor-placement="top-center"
      id="card"
    >
      <Carousel
        defaultControlsConfig={defaultControlsConfig}
        autoplay={true}
        id="carousel"
        slidesToShow={1}
        wrapAround={true}
      >
        <div id="webimg">
          <img
            style={{ borderRadius: "1rem" }}
            src="https://i.postimg.cc/wj5CMv94/Screenshot-from-2023-01-10-01-42-55.png"
            alt=""
          />
          {/* Image div */}
        </div>
        <div id="webimg">
          <img
            style={{ borderRadius: "1rem" }}
            src="https://i.postimg.cc/wj5CMv94/Screenshot-from-2023-01-10-01-42-55.png"
            alt=""
          />
          {/* Image div */}
        </div>
      </Carousel>
      <div>
        <h1 id="title">RentoMojo-Clone </h1>
        <div id="des">
          <h3>
            RentoMojo is rental platform where a person can use the products
            according to there needs by paying rent for the products on monthly
            Subscription based model{" "}
          </h3>
          
        </div>
        <div id="techstack">
            <h2>
              {" "}
              <span style={{ color: "var(--color-bg)" }}>
                Tech Stack{" ->"}
              </span>{" "}
              HTML CSS Java Script React Chakra UI
            </h2>
          </div>

        <div id="deployed">
          <button>
            <a href="https://github.com/HANUMAT-SHARAN">
            <i class="fa-brands fa-github"></i>
            </a>{" "}
            Github
          </button>
          <button>
            <i class="fa-solid fa-video"></i> Watch
          </button>
          <button>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            {"   "} Live
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
