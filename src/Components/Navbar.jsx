import React from "react";
import { Image, SimpleGrid,Flex, Box } from "@chakra-ui/react";
import "../Components/nav.css";

const Navbar = () => {

const[activenav,setActiveNav]=React.useState("#home")

  return (
  
    <nav>
     
      <a onClick={()=>setActiveNav("#home")} className={activenav=="#home"?"active":null}  href="#home">
        {" "}
        <Image
          boxSize={50}
          src="https://cdn4.iconfinder.com/data/icons/energy-77/64/house-energy-solar-cell-saving-256.png"
          alt=""
        />
      </a>
      <a onClick={()=>setActiveNav("#about")} className={activenav=="#about"?"active":null} href="#about">
        {" "}
        <Image
          boxSize={50}
          src="https://cdn4.iconfinder.com/data/icons/blue-sapphire-business-set-3/256/60-256.png"
          alt=""
        />
      </a>
      <a onClick={()=>setActiveNav("#skills")} className={activenav=="#skills"?"active":null} href="#skills">
        {" "}
        <Image
          boxSize={50}
          src="https://cdn1.iconfinder.com/data/icons/blue-sapphire-seo/256/30-256.png"
          alt=""
        />
      </a>
      
      <a onClick={()=>setActiveNav("#projects")} className={activenav=="#projects"?"active":null} href="#projects">
        {" "}
        <Image
          boxSize={50}
          src="https://cdn1.iconfinder.com/data/icons/blue-sapphire-seo/256/21-512.png"
        />
      </a>
      <a onClick={()=>setActiveNav("#contact")} className={activenav=="#contact"?"active":null} href="#contact">
        {" "}
        <Image
          boxSize={50}
          src="https://cdn3.iconfinder.com/data/icons/blue-sapphire-communication/256/27-512.png"
        />
      </a>
   
    </nav>
  );
};

export default Navbar;
