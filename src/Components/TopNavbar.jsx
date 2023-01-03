import "../Style/topNavbar.css";
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../Components/Images/logo.png";

const TopNavbar = () => {
  const [current, setCurrent] = useState("#home");
  // const [fix,setFix]=useState(false)

  // const fixed=()=>{
  //   if(window.scrollY>=300){
  //     setCurrent("#skills")
  //   }else{
  //     setFix(false)
  //   }
  // }
  // window.addEventListener("scroll",fixed)

  return (
    <div>
      <div id="topnav">
        <div style={{marginLeft:"40px",align:"center",padding:"4px"}}>
          <img  width={"60px"} src={logo} alt="" />
        </div>
        <div id="navel">
          <div onClick={() => setCurrent("#home")}    >
            {" "}
            <a href="#home">
              <h3 className={current === "#home" ? "activemain" : null}  >Home</h3>
            </a>{" "}
          </div>
          <div  onClick={() => setCurrent("#about")}>
            <a   href="#about">
              <h3 className={current === "#about" ? "activemain" : null}>About</h3>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#skills")} >
            <a href="#skills">
              <h3 className={current === "#skills" ? "activemain" : null}>Skills</h3>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#projects")}>
            <a href="#projects">
              <h3 className={current === "#projects" ? "activemain" : null}>Home</h3>
            </a>{" "}
          </div>
          <div  onClick={() => setCurrent("#contact")}>
            <a href="#contact">
              <h3 className={current === "#contact" ? "activemain" : null}>Contact</h3>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
