import * as React from "react";
import classes from "./Projects.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import GitFetch from "./GitFetch";

// imges
import newsP from "../Img/newsP.png";
import aroundP from "../Img/aroundP.png";
import firstP from "../Img/todolist.jpeg";
import sntimntor from "../Img/simp.jpeg";
import vegee from "../Img/vege.jpeg";
import python from "../Img/python.jpeg";
import mp3 from "../Img/mp3.jpeg";
import wordpress from "../Img/wordpress.jpeg";
import med from "../Img/med.jpeg";
import Meals from "../Img/Meals.jpeg";
import Cinnabons from "../Img/cinnabonimImg1.webp";

const Proj = [
  {
    id: 11,
    Name: "Cinnabonim",
    text: "an Ecommerce website for local Business ",
    image: Cinnabons,
    url: "https://cinnabonim.com/",
  },
  {
    id: 10,
    Name: "news explorer",
    text: "Introducing NewsExplorer, your go-to website for personalized news exploration. Powered by Azure VM, MongoDB, and React, discover, save, and explore news topics that interest you. Join now for a tailored news journey!",
    image: newsP,
    url: "https://newsexplorer-r.chickenkiller.com/",
  },
  {
    id: 9,
    Name: "Around react",
    text: " Around React, a dynamic social media platform reminiscent of Instagram. where users can engage by liking and disliking photos, while also enjoying features such as login and registration. The platform also offers the ability to personalize your profile, including uploading profile pictures and editing user details",
    image: aroundP,
    url: "https://around-r.chickenkiller.com/around-react",
  },
  {
    id: 1,
    Name: "ToDoList",
    text: "Here you can add tasks and save them to API,built with JS",
    image: firstP,
    url: "https://romans1995.github.io/kanban-final/solution/",
  },
  {
    id: 2,
    Name: "sentmintor",
    text: "this app takes your text and telling you if its postive or not",
    image: sntimntor,
    url: "https://github.com/romans1995/sentimentor/tree/Roman-Branch",
  },
  {
    id: 3,
    Name: "VegeGo",
    image: vegee,
    text: "a vegetarian forum ,built with php",
    url: "https://github.com/romans1995/VegeGo",
  },
  {
    id: 4,
    Name: "python Pong game",
    image: python,
    text: "This is a pong game that built with python",
    url: "https://github.com/romans1995/python",
  },
  {
    id: 5,
    Name: "mp3",
    image: mp3,
    text: "Demo mp3 website built with JS",
    url: "https://romans1995.github.io/MP3-DOM/",
  },
  {
    id: 6,
    Name: "wordpress gallery",
    image: wordpress,
    text: "This is a galery website for a photographer I made this website for a client in wordpress",
    url: "https://virakhrupa.com/",
  },
  {
    id: 7,
    Name: "Stav Barbi professional Business page",
    image: med,
    url: "https://www.stavbarbi.com/",
    text: "A profissonal Bussnes web ,that I built with wix",
  },
  {
    id: 8,
    Name: "Food Order website",
    image: Meals,
    text: "Food order web that you can chose and add to cart meals,built with REACT",
    url: "https://github.com/romans1995/VeganFood",
  },
];
const ProjLoop = (props) => {
  let colorTheme = props.theme === "dark" ? "#112534" : "white";
  let colorText = props.theme === "dark" ? "white" : "black";
  let boxBottom = props.theme === "dark" ? "1px solid #4A4A46" : " 1px solid #EAEAEA;";
  return (
    <>
      {Proj.map(({ id, Name, text, image, url }) => (
        <Card
          key={id}
          sx={{ width: 450, background: colorTheme, margin: "10px"}}
          height="180"
        >
          <CardActionArea>
            <CardMedia component="img" height="140" image={image} alt={Name} style={{borderBottom: boxBottom}} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color={colorText}>
                {Name}
              </Typography>
              <Typography variant="body2" color={colorText}>
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href={url} target="__blank">
              View
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
const Projects = (props) => {
  return (
    <div className={classes.projwidth1}  id="projects">
       {/* <GitFetch className="API"/> */}
      {/* <h1 className={classes.projtitle} id="projects">My Projects</h1> */}
      <div className={classes.projwidth}>
        <ProjLoop theme={props.theme} />
        <GitFetch theme={props.theme} />
      </div>
    </div>
  );
};
export default Projects;
