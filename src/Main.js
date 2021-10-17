import React from "react";
import StyledBtn from "./Ui/StyledBtn";
import classes from "./Main.module.css";
import Bg1 from "./Lay2.png";
import styled from "@emotion/styled";
import Link from "@mui/material/Link";
import Tooltip from '@mui/material/Tooltip';
// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachmentIcon from "@mui/icons-material/Attachment";
import cv from "./cv.png";

const Main = (props) => {
  const BackImage = styled("img")`
    width: 300px;
    max-height: 321px;
    position: absolute;
    top: 30%;
    left: 20%;
    z-index: -1;
  `;
  return (
    <div className={classes.width}>
      <BackImage src={Bg1} />
      <div className={classes.center}>
        <h1 className={classes.title}>Romman Stavinsky</h1>
        <h3 className={classes.secondaryTxt}>Go big or go BIGGER</h3>
        <StyledBtn variant="contained" src="#">
          About me
        </StyledBtn>
      </div>
      <div className={classes.icons}>
      <Tooltip title="Github">
        <Link href="https://github.com/romans1995" padding="10px">
          <GitHubIcon />
        </Link>
        </Tooltip>
        <Tooltip title="Linkedin">
        <Link
          href="https://www.linkedin.com/in/roman-stavinsky-62b59a177/"
          padding="10px"
        >
          <LinkedInIcon />
        </Link>
        </Tooltip>
        <Tooltip title="Cv">
        <Link href={cv} padding="10px" download textDecoration="none">
          <AttachmentIcon />
        </Link>
        </Tooltip>
      </div>
    </div>
  );
};
export default Main;
