import React, { useState } from "react";

import "../Style/card.css";

const ProjectCard = () => {
  return (
    <div id="card">
      <div id="webimg">
        <img
          
          style={{ borderRadius: "1rem" }}
          src="https://i.postimg.cc/wj5CMv94/Screenshot-from-2023-01-10-01-42-55.png"
          alt=""
        />
        {/* Image div */}
      </div>
      <div>
        <h1 id="title">RentoMojo-Clone </h1>

        <div id="techstack">
          <h2>HTML  CSS  JavaScript  React  Chakra UI</h2>
        </div>
        <div id="des">
        <h3>
          RentoMojo is rental platform where a person can use the products
          according <br /> to there needs by paying rent for the products on monthly
          Subscription based model{" "}
        </h3>
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
