import React from "react";
import "../Style/social.css";
import lock from "../Components/Audio/lock.mp3"
const Social = () => {
  function locksound() {
    new Audio(lock).play();
  }
  return (
    <div id="social" >
      <div id="git">
        {" "}
        <a onClick={locksound} target="blank" href="https://github.com/HANUMAT-SHARAN">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
 <div id="link">
        {" "}
        <a onClick={locksound} target="blank" href="https://www.linkedin.com/in/hanumat-sharan-168548258/">
          {" "}
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
