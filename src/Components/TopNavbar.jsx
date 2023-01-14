import "../Style/topNavbar.css";
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../Components/Images/logo.png";
import NavDrawer from "./NavDrawer";


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
      <div style={{height:"10vh"}} id="topnav">
        <a  href="https://hanumat-sharan.github.io/"><div  style={{ marginLeft: "40px", align: "center", padding: "4px" }}>
          <img width={"50px"} src={logo} alt="" />
        </div></a>
        <div id="navel">
          <div onClick={() => [setCurrent("#home")]}>
            {" "}
            <a href="#home">
              <h4 className={current === "#home" ? "activemain" : null}>
                Home
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#about")}>
            <a href="#about">
              <h4 className={current === "#about" ? "activemain" : null}>
                About
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#skills")}>
            <a href="#skills">
              <h4 className={current === "#skills" ? "activemain" : null}>
                Skills
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#projects")}>
            <a href="#projects">
              <h4 className={current === "#projects" ? "activemain" : null}>
                Projects
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#contact")}>
            <a href="#contact">
              <h4 className={current === "#contact" ? "activemain" : null}>
                Contact
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#resume")}>
            <a target="blank" href="https://drive.google.com/uc?id=1XQsL2a-Jw_dGKsCm4KvWWunVTALaojUW">
              <h4 className={current === "#resume" ? "activemain" : null}>
                Resume
              </h4>                                                                       
            </a>{" "}
          </div>
         
        </div>
        <div id="sidebar">
          <NavDrawer/>
          </div>
      </div>
    </div>
  );
};

export default TopNavbar;
