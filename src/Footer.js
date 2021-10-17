import React from "react";
import classes from "./Footer.module.css";
import styled from "@emotion/styled";
import Link from "@mui/material/Link";
import Tooltip from '@mui/material/Tooltip';

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachmentIcon from "@mui/icons-material/Attachment";
import cv from "./cv.png";

const Footer = (props) => {
  const themeP = props.theme === "dark" ? "white" : "black";
  const Container = styled("div")`
    background-color: ${themeP};
  `;
  const themeB = props.theme === "dark" ? "black" : "white";
  const TitleName = styled("h1")`
    color: ${themeB};
  `;
    const TitleEmail = styled("h4")`
      color: ${themeB};
      text-align: center;
    position: relative;
    margin-bottom: -100px;
    `;
  return (
    <Container className={classes.footerwidth}>
      <TitleName className={classes.footertitle}>
        Roman Stavinsky
      </TitleName>
      <TitleEmail className={classes.footerEmail}>
       Romanstav1995@gmail.com
      </TitleEmail>
      <div className={classes.footericons}>
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
    </Container>
  );
};
export default Footer;
