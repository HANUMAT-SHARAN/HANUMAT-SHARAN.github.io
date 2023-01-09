import React, { useState } from "react";

import "../Style/card.css";
import SliderFunction from "./Slider";



const ProjectCard = () => {
  const parr = [
    { img: "https://i.ibb.co/0BtZ6qN/Screenshot-from-2022-12-20-20-23-41.png" },
    {
      img: "https://i.ibb.co/k1DPpSF/Screenshot-from-2022-12-20-20-20-14.png",
    },
    {
      img: "https://i.ibb.co/Z160gkJ/Screenshot-from-2022-12-20-20-22-10.png",
    },
    {
      img: "https://i.ibb.co/PZFQjJ6/Screenshot-from-2022-12-20-20-22-50.png",
    },
    {
      img: "https://i.ibb.co/VC0nCb3/Screenshot-from-2022-12-20-20-21-06.png",
    },
  ];

  
  return (
    <>
      <div
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>Projects </h1>
      </div>
  
      <div className="card">
     
        <div>
           <h1>Rent Do Maja Lo</h1>
           <h2>Individual</h2>
           <h3>
             Rent Do Maja Lo is Rental website where user can Login,signup,pay
             rent and use variety of products without buying them with the help
            of subscription based model
           </h3>
        </div>
      </div>
      
    </>
  );
};

export default ProjectCard;
