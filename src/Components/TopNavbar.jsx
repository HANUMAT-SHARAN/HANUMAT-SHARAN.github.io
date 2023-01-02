import "../Style/topNavbar.css";
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../Components/Images/logo.png";

const TopNavbar = () => {
  const [current, setCurrent] = useState("#home");
  // const [fix,setFix]=useState(false)

  // const fixed=()=>{
  //   if(window.scrollY>=200){
  //     setCurrent("#skills")
  //   }else{
  //     setFix(false)
  //   }
  // }
  // window.addEventListener("scroll",fixed)

  return (
    <div>
      <div id="topnav">
        <div>
          <img width={"70px"} src={logo} alt="" />
        </div>
        <div id="navel">
          <div onClick={() => setCurrent("#home")}    >
            {" "}
            <a href="#home">
              <h2 className={current === "#home" ? "activemain" : null}  >Home</h2>
            </a>{" "}
          </div>
          <div  onClick={() => setCurrent("#about")}>
            <a   href="#about">
              <h2 className={current === "#about" ? "activemain" : null}>About</h2>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#skills")} >
            <a href="#skills">
              <h2 className={current === "#skills" ? "activemain" : null}>Skills</h2>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#projects")}>
            <a href="#projects">
              <h2 className={current === "#projects" ? "activemain" : null}>Home</h2>
            </a>{" "}
          </div>
          <div  onClick={() => setCurrent("#contact")}>
            <a href="#contact">
              <h2 className={current === "#contact" ? "activemain" : null}>Contact</h2>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
