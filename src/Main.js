
import StyledBtn from "./Ui/StyledBtn";
import classes from "./Main.module.css";
import Bg1 from "./Lay2.png";
import styled from "@emotion/styled";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";




// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachmentIcon from "@mui/icons-material/Attachment";
import cv from "./cv.png";

const Main = (props) => {
  const BackImage = styled("img")`
    width: 300px;
    max-height: 421px;
    z-index: -1;
    left:40px;
    position: absolute;
  `;
  return (
    <div className={classes.width}>
      <div></div>
      <div className={classes.center}>
        <BackImage src={Bg1} />
        <h1 className={classes.title}>Roman Stavinsky</h1>
        <h3 className={classes.secondaryTxt}>Go big or go BIGGER</h3>
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
        <Link href="/#about"><StyledBtn variant="contained" href="./#about">
          About me
        </StyledBtn>
        </Link>
      </div>
    </div>
  );
};
export default Main;
