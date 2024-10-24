import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import endless from '../Img/protofolioimages/endless.png';
import gaz from '../Img/protofolioimages/gazpacho.png';
import menow from '../Img/protofolioimages/menow.svg';
import iron from '../Img/protofolioimages/iron.png';
import mxi from '../Img/protofolioimages/mxi.png';
import shomer from '../Img/protofolioimages/shomryharez.png';
import veredHashron from '../Img/protofolioimages/veredhas.png';

import styled from "@emotion/styled";

const Carousel = (props) => {
    const images = [
        endless,
        gaz,
        menow,
        iron,
        mxi,
        shomer,
        veredHashron,
    ];
    const themeP = props.theme === "dark" ? "#1c313a" : "#ebebeb";
    const Container = styled("div")`
      background-color: ${themeP};
    `;
    const slidesWrapperRef = useRef(null);

    const moveLeft = (el, mov) =>
        new Promise((resolve) => {
            el.ontransitionend = () => {
                el.ontransitionend = null;
                el.style.transition = 'none';
                resolve();
            };
            el.style.transition = '2.5s';
            el.style.transform = `translateX(${-mov}px)`;
        });

    useEffect(() => {
        let index = 0;
        let isMounted = true;

        const slidesWrapper = slidesWrapperRef.current;
        if (slidesWrapper) {
            // console.log(slidesWrapper, "slidesWrapper");
            const slides = slidesWrapper.querySelectorAll('img');

            const infiniteCarouselLoop = async () => {
                while (isMounted) {
                    // await delay(interval); // Delay between movements
                    await moveLeft(slidesWrapper, slides[index].clientWidth);

                    // Move the current slide to the end of the list
                    slidesWrapper.appendChild(slides[index]);

                    // Reset the translateX to 0
                    slidesWrapper.style.transform = `translateX(0)`;

                    // Update the index to loop back to the start if necessary
                    index = ++index % slides.length;
                }
            };

            infiniteCarouselLoop();
        }

        // Cleanup function to stop the loop when the component unmounts
        return () => {
            isMounted = false;
        };
    }, [props.theme]); // Empty dependency array to run the effect only once after the initial render


    return (
        <Container className="carousel">
            <h3 className='carousel__title'>I worekd with:</h3>
            <div

                className="carousel-images"
                ref={slidesWrapperRef}
            >
                {[...images, ...images].map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} />
                ))}
            </div>
        </Container>
    );
};

export default Carousel;
