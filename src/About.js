import React, { useEffect, useRef } from 'react';
import profImg from "./Img/me.JPG";
import classes from "./About.module.css";
import styled from "@emotion/styled";


const About = (props) => {

    const Container = styled("div")`
      background-color: #ffffff00;
    position: absolute;
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
      <img className={classes.imag} src={profImg} alt="Roman" />
      <div className={classes.secondflex}>
        <h1 className={classes.title} id ="about" >About</h1>
        <p>Hello, I'm Roman Stavinsky.</p>

        <p>My journey into the world of coding began at the age of 10, when I started experimenting with basic HTML for fun. What started as a hobby quickly evolved into a deep passion for programming.</p>

        <p>Today, I am an experienced Full-Stack Developer with a strong focus on MongoDB and React. I have had the opportunity to work with three distinct companies that have shaped my career:</p>

        <ul>
          <li><strong>MXI</strong>: Here, I developed landing pages from scratch, showcasing my ability to create visually engaging and highly functional web experiences.</li>
          <li><strong>Endlessroll</strong>: In this role, I tackled numerous bugs within a Magento platform, leveraging my expertise in PHP to provide efficient solutions and improve system performance.</li>
          <li><strong>MeNow</strong>: This company provided me with the chance to work on diverse projects, further honing my skills in Full-Stack development and expanding my technical knowledge.</li>
        </ul>

        <p>The website you are currently visiting is built with React and hosted on Hostinger, demonstrating my commitment to leveraging cutting-edge technologies.</p>

        <p>Driven by a continuous desire to learn and explore new advancements, I am currently working as a freelancer. I am always eager to take on new challenges and contribute to innovative projects.</p>

      </div>
    </Container>
  );
};
export default About;
