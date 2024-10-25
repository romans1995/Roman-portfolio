import React, { useEffect, useRef } from 'react';
import profImg from "./Img/me.JPG";
import classes from "./About.module.css";
import styled from "@emotion/styled";


const About = (props) => {

    const Container = styled("div")`
      background-color: #1c313a;
    top: 0%;
    color: white;
    padding: 0px;
    `;
  // useEffect(() => {
  //   const adjustVideoHeight = () => {
  //     if (containerRef.current && videoRef.current) {
  //       const contentHeight = containerRef.current.offsetHeight;
  //       videoRef.current.style.height = `${contentHeight}px`;
  //     }
  //   };

  //   adjustVideoHeight();
  //   window.addEventListener('resize', adjustVideoHeight);

  //   return () => {
  //     window.removeEventListener('resize', adjustVideoHeight);
  //   };
  // }, []);
  
  return (
    <Container id="about" className={`${classes.aboutwidth} ${classes.fadeIn}`}>
<div className={classes.aboutLeft}><img className={classes.imag} src={profImg} alt="Roman" /></div>
      <div className={`${classes.aboutline}`}/>
      <div className={classes.secondflex}>
        <h1 className={classes.title} id ="about" >About</h1>
      <div>
        <p className={classes.text}>
          Hi, I'm Roman. I'm a full stack developer with a passion for creating web applications, Since I can remember, I've been drawn to coding. At 10, I started with basic HTML and just kept going. Today, I'm a Full-Stack Developer, specializing in MongoDB and React. I excel in crafting dynamic, user-friendly websites that meet business goals and exceed user expectations. My skill set includes front-end and back-end development, ensuring cohesive and well-integrated digital experiences. I'm always ready for the next challenge.
        </p>
      </div>
 

      </div>
    </Container>
  );
};
export default About;
