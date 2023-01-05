import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import html from "../Components/Images/Html.png";
import "../Style/card.css";
import Tilt from "react-vanilla-tilt"
const ProjectCard = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
        {/* <AnimatePresence >
      <motion.div
      
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setOpen(!isOpen)}
        className="card"
    
      >
       {!isOpen?<motion.div layout="position" >
       <img width={50} src={html} alt="" />
          </motion.div>:null}
        {isOpen && (
          <motion.div>
            <p>
              Lorem ipsum dolor sit amet exercitationem quos sequi aborum, nihil
              voluptate.
              <img width={500} src={html} alt="" />
            </p>
          </motion.div>
        ) }
        
      </motion.div>
      </AnimatePresence> */}
     <Tilt options={{ scale: 2, max: 25 }}>
     <div  className="card rgb">
        <h1>Hello My</h1>
        <img width={100} src={html} alt="" />
        <h1>Tilt Box </h1>
      </div>
     </Tilt>
     
    </div>
  );
};

export default ProjectCard;
