import React, { useState } from "react";


import "../Style/card.css";
import Carousel from "./Slider";

const ProjectCard = () => {
 
  return (
    <>
        
      <div className="card">
    <Carousel/>
    <div>
      Data
    </div>
   
      </div>
     
    </>
  );
};

export default ProjectCard;
