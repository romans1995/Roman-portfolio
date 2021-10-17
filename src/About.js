import React from "react";
import profImg from "./Img/me.JPG";
import classes from "./About.module.css";

const About = (props) => {
  return (
    <div className={classes.aboutwidth}>
      <img className={classes.imag} src={profImg} alt="Roman" />
      <div>
        <h1 className={classes.title}>About me</h1>
        <h4 className={classes.longText}>
          Hey there My name is Roman Stavinsky<br></br>I started learn basic
          HTML when I was 10 yers old,<br></br>but not for study purpeses just
          only to have fun. And my code journey begens only when I becomeing 24
          yers old.<br></br>I went to study coding at HackerU.<br></br>
          HackerU is a world-renowned provider of technology education,
          cybersecurity services, and high-caliber knowledge transfer.<br></br>
          After me graduted I worked as wordpress developer and freelancer{" "}
          <br></br> I'm very motivted to learn new things and open for new
          appertunties right now I'm working as freelance and searching for a
          new challenge
        </h4>
      </div>
    </div>
  );
};
export default About;
