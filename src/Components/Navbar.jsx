import React from "react";
import { Image, SimpleGrid,Flex, Box } from "@chakra-ui/react";
import "../Components/nav.css";
import NavDrawer from "./NavDrawer";
import lock from "../Components/Audio/lock.mp3"

const Navbar = () => {
  function locksound() {
    new Audio(lock).play();
  }

const[activenav,setActiveNav]=React.useState("#home")

  return (
  
    <nav>
     
      <a onClick={()=>[setActiveNav("#home"),locksound()]} className={activenav=="#home"?"active":null}  href="#home">
        {" "}
        <Image
          boxSize={20}
          src="https://cdn1.iconfinder.com/data/icons/neutro-essential/32/home-64.png"
          alt=""
        />
      </a>
      <a onClick={()=>[setActiveNav("#about"),locksound()]} className={activenav=="#about"?"active":null} href="#about">
        {" "}
        <Image
          boxSize={20}
          src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/user_close-64.png"
          alt=""
        />
      </a>
      <a onClick={()=>[setActiveNav("#skills"),locksound()]} className={activenav=="#skills"?"active":null} href="#skills">
        {" "}
        <Image
          boxSize={20}
          src="https://cdn0.iconfinder.com/data/icons/zondicons/20/book-reference-64.png"
          alt=""
        />
      </a>
      
      <a onClick={()=>[setActiveNav("#projects"),locksound()]} className={activenav=="#projects"?"active":null} href="#projects">
        {" "}
        <Image
          boxSize={20}
          src="https://cdn2.iconfinder.com/data/icons/neutro-essential/32/briefcase-64.png"
        />
      </a>
      <a onClick={()=>setActiveNav("#contact")} className={activenav=="#contact"?"active":null} href="#contact">
        {" "}
        <Image
          boxSize={20}
          src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_Message-64.png"
        />
      </a>
      <a onClick={()=>[setActiveNav("#resume"),locksound()]} className={activenav=="#resume"?"active":null} href="https://drive.google.com/uc?id=1XQsL2a-Jw_dGKsCm4KvWWunVTALaojUW&export=download">
        {" "}
        <Image
          boxSize={20}
          src="https://cdn0.iconfinder.com/data/icons/business-3-black-fill/64/Business_3-_Black_fill-30-64.png"
        />
      </a>
    
    
 
    </nav>
  );
};

export default Navbar;
