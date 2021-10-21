
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// IMages 
import blackGit from "../Img/git.png";
import whiteGit from "../Img/git1.png";


    
export default class GitFetch extends React.Component {
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
    const colorThemetext = this.props.theme === "dark" ? "white" : "black";
    const boxBottom = this.props.theme === "dark" ? "1px solid #4A4A46" : " 1px solid #EAEAEA;";
    const colorGit = this.props.theme === "dark" ? whiteGit:blackGit;
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.repo) {
      return <div>didn't get a REPO</div>;
    }

    return (
     <>
      {this.state.repo.map(({ id, name, text,svn_url,has_pages,description}) => (
        <Card
          key={id}
          sx={{ width: 450,background: colorTheme, margin: "10px"}}
          height="180"
        >
          <CardActionArea>
            <CardMedia component="img" height="140" image={colorGit} alt={name} style={{borderBottom:boxBottom,objectFit:"contain"}}/>
            <CardContent color={colorThemetext}>
              <Typography gutterBottom variant="h5" component="div"  color={colorThemetext}>
                {name}
              </Typography>
              <Typography variant="body2"  color={colorThemetext} >
                {description?description:name}
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