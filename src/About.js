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
        <p className={classes.longText}>
          <p>Hey there I'm Roman Stavisnky.</p>
          <p>I started learning basic HTML
          when I was 10 years old,but not for study purposes just only
          to have fun.</p>
          <p> And my code journey begins only when I became 24 years
          old.</p>
          <p>I went to a Full-Stack development course in HackerU in order to learn how to code.</p>
          <p>HackerU is a
          world-renowned provider of technology education, cybersecurity
          services, and high-caliber knowledge transfer.</p>
          <p>After I
          graduated I worked as WordPress developer and freelancer </p>
          <p> I'm
          very motivated to learn new things and open for new opportunities
          right now I'm working as freelancer and searching for a new challenge</p>
            
        </p>
      </div>
    </Container>
  );
};
export default About;
