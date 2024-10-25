import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import profImg from "./r-LOGO.png";
import lewWeb from "./../Img/lewweb.webp";
import lewWebwhite from "./../Img/whiteLion.webp";
import verylewWebwhite from "./../Img/verywhite.webp";
import classes from "./ButtonAppBar.module.css";
import MuiSwitch from "./MUISwitch";
import styled from "@emotion/styled";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const ToolbarButton = styled(Button)`
  font-weight: bold;
  @media only screen and (max-width: 640px) {
   font-size: 11px;
  }
`;

const ProfileImage = styled("img")`
  max-height: 51px;
  border-radius: 100%;
  position: relative;
  right: 15px;
  top: 2px;
`;

export default function ButtonAppBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isSmallScreen = window.innerWidth < 650;
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen); // Toggle the menu open state
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false); // Close the menu
  };

  return (
    <AppBar position="sticky" flex-grow="0">
      <Toolbar
        className={props.theme === "dark" ? classes["toolbar-dark"] : classes["toolbar-light"]}
      >
        <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 1 }}>
          <ProfileImage src={verylewWebwhite} className={classes.imgprof} alt="Logo" />
        </IconButton>

        <BrowserRouter>
          {isSmallScreen ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </>
          ) : (
            <>
              <Link color="inherit" underline="none" href='/#about'>
                <ToolbarButton className={classes.simpleBtn} to={`/#about`} color="inherit">
                  About
                </ToolbarButton>
              </Link>
              <Link color="inherit" underline="none" href='/#projects'>
                <ToolbarButton className={classes.simpleBtn} color="inherit">
                  Projects
                </ToolbarButton>
              </Link>
              <Link color="inherit" underline="none" href='/#contact'>
                <ToolbarButton className={classes.simpleBtn} color="inherit">
                  Contacts
                </ToolbarButton>
              </Link>
            </>
          )}

          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            PaperProps={props.theme === "dark" ?{
              sx: {
                top: "74px !important",
                left: "6px !important",
                width: "100%",
                color:  "#7cfa84",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "cursive",
                backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url(${lewWeb})
      `,
                backgroundSize: 'cover', // Make sure the image covers the entire area
                backgroundPosition: 'center', // Center the image
                
              },
            }:{
              sx: {
            top: "74px !important",
          left: "6px !important",
          width: "100%",
          color:  "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
                fontFamily: "cursive",
                fontWeight: "900",
                
                backgroundImage: `
       linear-gradient(rgb(255 255 255 / 91%), rgb(255 255 255 / 79%)), url(${lewWebwhite})
      `,
                backgroundSize: 'cover', // Make sure the image covers the entire area
                backgroundPosition: 'center', // Center the image
                
              }
          }
        }
          >
            <Link color="inherit" underline="none" href='/#about'>
              <MenuItem onClick={handleClose}>About</MenuItem>
            </Link>
            <Link color="inherit" underline="none" href='/#projects'>
              <MenuItem onClick={handleClose}>Projects</MenuItem>
            </Link>
            <Link color="inherit" underline="none" href='/#contact'>
              <MenuItem onClick={handleClose}>Contacts</MenuItem>
            </Link>
          </Menu>

          <ToolbarButton
            id="darkTheme"
            color="inherit"
            onClick={props.changeTheme}
          >
            <MuiSwitch className={classes.Muimobile} />
          </ToolbarButton>
        </BrowserRouter>
      </Toolbar>
    </AppBar>
  );
}
