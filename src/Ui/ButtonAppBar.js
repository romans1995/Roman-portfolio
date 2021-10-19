import * as React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import profImg from "./r-LOGO.png";
import classes from "./ButtonAppBar.module.css";
import MuiSwitch from "./MUISwitch";
import styled from "@emotion/styled";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";


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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const  {path,url} =useRouteMatch()
  return (
    <AppBar position="static">
      <Toolbar
        className={props.theme === "dark" ? classes["toolbar-dark"] : ""}
      >
        <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <ProfileImage src={profImg} className={classes.imgprof} alt="Logo" />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <BrowserRouter>
        <Link color="inherit" underline="none"  href='/#about'><ToolbarButton className={classes.simpleBtn} to={`/#about`} color="inherit">
        About
        </ToolbarButton>
        </Link>
        <Link color="inherit" underline="none"  href='/#projects'><ToolbarButton className={classes.simpleBtn} color="inherit">
          Projects
        </ToolbarButton>
        </Link>
        <Link color="inherit" underline="none"  href='/#contact'><ToolbarButton className={classes.simpleBtn} color="inherit">
          Contacts
        </ToolbarButton>
        </Link>
        <IconButton
          className={classes.showToggle}
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon className={classes.Muimobile} />
        </IconButton>

        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose} href="#projects">Projects</MenuItem>
          <MenuItem onClick={handleClose}>Contacts</MenuItem>
        </Menu>
        <ToolbarButton
          id="darkTheme"
          color="inherit"
          onClick={props.changeTheme}
        >
          <MuiSwitch className={classes.Muimobile}/>
        </ToolbarButton>
        </BrowserRouter>
      </Toolbar>
    </AppBar>
  );
}
