import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./icons8-brain-64.png";

const Logo = () => {
  return (
    <div
      className="ma4 mt0"
      style={{ display: "flex", justifyContent: "flex-start" }}
    >
      <Tilt className="Tilt shadow-5 br3" tiltMaxAngleX={45} tiltMaxAngleY={45}>
        <div
          style={{
            height: "150px",
            width: "150px",
          }}
        >
          <img
            src={brain}
            alt="Logo"
            width={"128px"}
            height={"128px"}
            className="pa2"
          />
          {/* <h1>👀</h1> */}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
