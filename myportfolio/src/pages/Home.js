import React from "react";
import HomeImage from "../me.jpeg";

function Home(props) {
  return (
    <div className="home-component">
      <div className="image-container">
        <img src={HomeImage} alt="" />
      </div>
      <h1>Aboubakari Soumanou Petoni</h1>
    </div>
  );
}

export default Home;
