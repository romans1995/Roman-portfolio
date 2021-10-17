import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import profImg from "./r-LOGO.png";
import classes from "./ButtonAppBar.module.css";
import MuiSwitch from './MUISwitch';
import styled from "@emotion/styled";

const ToolbarButton = styled(Button)`
  font-weight: bold;
  @media only screen and (max-width:640px) {
    margin-right: 25px;
    position: sticky;
  }
`;

const ProfileImage = styled('img')`
    max-height: 51px;
    border-radius: 100%;
    position: relative;
    right: 15px;
    top: 2px;
`;

export default function ButtonAppBar(props) {
  return (
    <AppBar
    
      position="static"
    >
      <Toolbar className={
        props.theme === "dark"
          ? classes["toolbar-dark"]
          : ''
      }>
        <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <ProfileImage
            src={profImg}
            className={classes.imgprof}
            alt="Logo"
          />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <ToolbarButton color="inherit">About</ToolbarButton>
        <ToolbarButton color="inherit">Projects</ToolbarButton>
        <ToolbarButton color="inherit">Contacts</ToolbarButton>
        <ToolbarButton id="darkTheme" color="inherit" onClick={props.changeTheme}>
          <MuiSwitch/>
         
        </ToolbarButton>
      </Toolbar>
    </AppBar>
  );
}
