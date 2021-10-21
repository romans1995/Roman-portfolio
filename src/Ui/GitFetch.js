
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// IMages 
import firstP from "../Img/todolist.jpeg";
import sntimntor from "../Img/simp.jpeg";
import vegee from "../Img/vege.jpeg";
import python from "../Img/python.jpeg";
import mp3 from "../Img/mp3.jpeg";
import wordpress from "../Img/wordpress.jpeg";
import med from "../Img/med.jpeg";
import Meals from "../Img/Meals.jpeg";

const Proj = [
    {
        id: 1,
        Name: "kanban-final",
        text: "Here you can add tasks and save them to API,built with JS",
        image: firstP,
        url: "https://romans1995.github.io/kanban-final/solution/",
      },
      {
        id: 2,
        Name: "sentimentor",
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
        Name: "kanban-final",
        text: "Here you can add tasks and save them to API,built with JS",
        image: firstP,
        url: "https://romans1995.github.io/kanban-final/solution/",
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
        Name: "Mp3PlayerTask",
        image: mp3,
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
        Name: "python",
        image: python,
        text: "Food order web that you can chose and add to cart meals,built with REACT",
        url: "https://github.com/romans1995/VeganFood",
      },
      {
        id: 9,
        Name: "python",
        image: Meals,
        text: "Food order web that you can chose and add to cart meals,built with REACT",
        url: "https://github.com/romans1995/VeganFood",
      },
      {
        id: 10,
        Name: "python",
        image: Meals,
        text: "Food order web that you can chose and add to cart meals,built with REACT",
        url: "https://github.com/romans1995/VeganFood",
      },
      {
        id: 11,
        Name: "python",
        image: Meals,
        text: "Food order web that you can chose and add to cart meals,built with REACT",
        url: "https://github.com/romans1995/VeganFood",
      },
            {
        id: 12,
        Name: "python",
        image: Meals,
        text: "Food order web that you can chose and add to cart meals,built with REACT",
        url: "https://github.com/romans1995/VeganFood",
      },
      {
        id: 13,
        Name: "python",
        image: Meals,
        text: "Food order web that you can chose and add to cart meals,built with REACT",
        url: "https://github.com/romans1995/VeganFood",
      },
    ];
    const defImg = "https://avatars.githubusercontent.com/u/44429106?v=4";
export default class GitFetch extends React.Component {
  boxBottom(props){
      return  props.theme === "dark" ? "1px solid #4A4A46" : " 1px solid #EAEAEA;";
    }
    colorTheme(props){
      return  console.log(props.theme);
    }

  
  state = {
    loading: true,
    repo: null
  };

  async componentDidMount(props) {
    const url = "https://api.github.com/users/romans1995/repos";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ repo: data, loading: false });
  }

  render() {
    const colorTheme = this.props.theme === "dark" ? "black" : "white";
    const boxBottom = this.props.theme === "dark" ? "1px solid #4A4A46" : " 1px solid #EAEAEA;";
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.repo) {
      return <div>didn't get a REPO</div>;
    }

    return (
     <>
      {this.state.repo.map(({ id, name, text,svn_url,has_pages}) => (
        <Card
          key={id}
          sx={{ width: 450, margin: "10px"}}
          height="180"
          color={colorTheme}
        >
          <CardActionArea>
            <CardMedia component="img" height="140" image={defImg} alt={name} style={{borderBottom:this.boxBottom}}/>
            <CardContent color={this.colorTheme}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color={this.colorTheme} >
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href={has_pages?`https://romans1995.github.io/${name}`:svn_url} target="__blank">
              View
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
  }
}