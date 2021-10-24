import React from "react";
import profImg from "./Img/me.JPG";
import classes from "./About.module.css";
import styled from "@emotion/styled";


const About = (props) => {
    const themeP = props.theme === "dark" ? "#1c313a" : "#ebebeb";
    const Container = styled("div")`
      background-color: ${themeP};
    `;
  
  return (
    <Container id="about" className={classes.aboutwidth}>
      <img className={classes.imag} src={profImg} alt="Roman" />
      <div className={classes.secondflex}>
        <h1 className={classes.title} id ="about" >About</h1>
        <h4 className={classes.longText}>
          Hey there I'm Roman Stavisnky<br></br>I started learning basic HTML
          when I was 10 years old,<br></br>but not for study purposes just only
          to have fun. And my code journey begins only when I became 24 years
          old.<br></br>I went to a Full-Stack development course in HackerU in order to learn how to code.<br></br> HackerU is a
          world-renowned provider of technology education, cybersecurity
          services, and high-caliber knowledge transfer.<br></br> After I
          graduated I worked as WordPress developer and freelancer <br></br> I'm
          very motivated to learn new things and open for new opportunities
          right now I'm working as freelancer and searching for a new challenge
        </h4>
      </div>
    </Container>
  );
};
export default About;
