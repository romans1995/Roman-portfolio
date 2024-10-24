import React, { useState } from 'react';
import StyledBtn from "./Ui/StyledBtn";
import About from './About'; // Import your About component
import Vision from './vision'; // Import your About component
import classes from "./Main.module.css";
import Bg1 from "./Lay2.png";
import styled from "@emotion/styled";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import whiteBg from "./Img/white-bg.webp";
// import bgVideo from "./Img/matrix.mp4";
import stars from "./Img/stars.webp";

const Main = (props) => {
  const [showAbout, setShowAbout] = useState(false); // State to toggle between Vision and About

  const BackImage = styled("img")`
    width: 300px;
    max-height: 421px;
    z-index: -1;
  `;

  const handleBtnClick = () => {
    setShowAbout(true); // When button is clicked, show About component
  };

  return (
    <div className={classes.art}>
      {props.theme === "dark" ? (
        <img className={classes.image} src={stars} alt="black stars background" />
      ) : (
        <img className={classes.image} src={whiteBg} alt="white background" />
      )}
      {showAbout ? (
        <About  />
      ) : (
        <Vision onButtonClick={handleBtnClick} className="vision" />
      )}
    </div>
  );
};

export default Main;