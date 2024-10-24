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
import cv from "./cv.pdf";


const Vision = (props) => {
    const themeP = props.theme === "dark" ? "#1c313a" : "#ebebeb";
    const Container = styled("div")`
      background-color: ${themeP};
    `;

    return (
        <div className={classes.width}>

            <div className={classes.center}>

                {/* <BackImage src={Bg1} /> */}
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
                            href="https://www.linkedin.com/in/roman-stavinsky/"
                            padding="10px"
                            fill="white"
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

                <Link onClick={props.onButtonClick}><StyledBtn variant="contained" >
                </StyledBtn>
                </Link>

            </div>
            </div>

 )};
export default Vision;
