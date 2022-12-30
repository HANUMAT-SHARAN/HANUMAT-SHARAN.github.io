import React from "react";
import { Image, SimpleGrid,Flex, Box } from "@chakra-ui/react";
import "../Components/main.css";

const Navbar = () => {
  return (
  
    <nav>
     
      <a href="#home">
        {" "}
        <Image
          boxSize={50}
          src="https://cdn4.iconfinder.com/data/icons/energy-77/64/house-energy-solar-cell-saving-256.png"
          alt=""
        />
      </a>
      <a href="#about">
        {" "}
        <Image
          boxSize={50}
          src="https://cdn4.iconfinder.com/data/icons/blue-sapphire-business-set-3/256/60-256.png"
          alt=""
        />
      </a>
      <a href="#skills">
        {" "}
        <Image
          boxSize={50}
          src="https://cdn1.iconfinder.com/data/icons/blue-sapphire-seo/256/30-256.png"
          alt=""
        />
      </a>
      
      <a href="#projects">
        {" "}
        <Image
          boxSize={50}
          src="https://cdn1.iconfinder.com/data/icons/blue-sapphire-seo/256/21-512.png"
        />
      </a>
      <a href="#projects">
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
