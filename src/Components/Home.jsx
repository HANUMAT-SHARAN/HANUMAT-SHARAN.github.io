import React from "react";
import "../Style/home.css";
import profile from "../Components/Images/hanumat.png";
const Home = () => {
  return (
    <section id="home" style={{ height: "800px", marginTop: "90px" }}>
      <div>
        {/* image */}
        <img width={400} src={profile} alt="" />
      </div>
      <div id="hanumat">
      <h3 className="glow">H</h3>
      <h3 className="glow">a</h3>
      <h3 className="glow">n</h3>
      <h3 className="glow">u</h3>
       <h3 className="glow">m</h3>
       <h3 className="glow">a</h3>
       <h3 className="glow">t</h3>
      </div>
    </section>
  );
};

export default Home;
