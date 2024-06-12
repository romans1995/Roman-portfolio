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
          <p>Hey there I'm Roman Stavinsky.</p>
          <p>I started learning basic HTML when I was 10 years old, just for fun. Little did I know that it would ignite my passion for coding.</p>
          <p> Fast forward to today, and I have gained extensive experience in Full-Stack development, with a focus on MongoDB and React.</p><p> I have successfully completed more than 10 projects utilizing these technologies. In fact, even this website you're currently visiting is built using React and hosted on the Google Cloud platform.</p>
          <p>Additionally, I have worked for a year in a company where I developed landing pages from scratch, showcasing my ability to create visually appealing and functional web experiences. Furthermore, I had the opportunity to work in another company where I tackled numerous bugs in a Magento platform, using my expertise in PHP to provide efficient solutions.</p>
          <p>I am highly motivated to continue learning and exploring new technologies. Currently, I am working as a freelancer, actively seeking new challenges and opportunities to apply my skills and contribute to exciting projects.</p>
        
            
        </p>
      </div>
    </Container>
  );
};
export default About;
