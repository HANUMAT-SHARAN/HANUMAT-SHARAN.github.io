import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Skills from "../Components/Skills";
import Projects from "./Projects";

import About from "./About";
import TopNavbar from "./TopNavbar";
const MainPage = () => {
  return (
    <div>
        <TopNavbar/>
      <Navbar />

      <Home />
      <Skills />
      <Projects />
      <About />
    </div>
  );
};

export default MainPage;
