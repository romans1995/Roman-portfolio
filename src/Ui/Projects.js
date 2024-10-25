import React, { useState } from "react";
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
import milana from "../Img/milana.webp";
import mp3 from "../Img/mp3.jpeg";
import wordpress from "../Img/wordpress.jpeg";
import med from "../Img/med.jpeg";
import Meals from "../Img/Meals.jpeg";
import Cinnabons from "../Img/cinnabonimImg1.webp";
import Wix from "../Img/wix.webp";

const Proj = [
  {
    id: 11,
    Name: "Cinnabonim",
    text: "an Ecommerce website for local Business ",
    image: Cinnabons,
    url: "https://cinnabonim.com/",
  },
  // {
  //   id: 10,
  //   Name: "news explorer",
  //   text: "Introducing NewsExplorer, your go-to website for personalized news exploration. Powered by Azure VM, MongoDB, and React, discover, save, and explore news topics that interest you. Join now for a tailored news journey!",
  //   image: newsP,
  //   url: "https://newsexplorer-r.chickenkiller.com/",
  // },
  // {
  //   id: 9,
  //   Name: "Around react",
  //   text: " Around React, a dynamic social media platform reminiscent of Instagram. where users can engage by liking and disliking photos, while also enjoying features such as login and registration. The platform also offers the ability to personalize your profile, including uploading profile pictures and editing user details",
  //   image: aroundP,
  //   url: "https://around-r.chickenkiller.com/around-react",
  // },
  
  {
    id: 4,
    Name: "Ecommerce store Milana Beauty shop",
    image: milana,
    text: "This is a ecommerce website for a beauty shop I made this website for a client ",
    url: "https://milanabeauty.co.il/",
  
  },
  {
    id: 6,
    Name: "Vera Khrupa Photography",
    image: wordpress,
    text: "This is a galery website for a photographer I made this website for a client ",
    url: "https://virakhrupa.com/",
  },
  // {
  //   id: 7,
  //   Name: "Stav Barbi mindfulness",
  //   image: Wix,
  //   text: "Stav Barbi's website showcases her work as a mindfulness coach and workshop facilitator. She offers personal guidance, writing workshops, and various courses designed to enhance communication and personal development. ",
  //   url: "https://www.stavbarbi.com/",
  // },
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
  const [showGitprojects, setShowGitprojects] = useState(true);
  const gitBtnControler = () => {
    setShowGitprojects(!showGitprojects);
  }
  return (
    <div className={classes.projwidth1}  id="projects">
      <div className={classes.projwidth}>
        <ProjLoop theme={props.theme} />
        <GitFetch showGitprojects={showGitprojects} theme={props.theme} />
       
      </div>
      <Button size="small" color="primary" onClick={gitBtnControler} target="__blank">
        {showGitprojects ? "View Git Projects":"close Git Projects "} 
      </Button>
    </div>
  );
};
export default Projects;
