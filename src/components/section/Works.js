import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from "../layouts/Project";
import { projects, section3Title } from "../../db";
import { CustomNextArrow, CustomPrevArrow } from "../layouts/Arrows"; // Adjust the import path as necessary

const Works = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div data-aos="zoom-in-up" data-aos-once="true" className="third">
        <div data-aos="zoom-in-up" className="title-box works neon-purple">
          <h2>{section3Title}</h2>
        </div>
        <div className="carousel-container">
          <Slider {...settings}>
            {projects &&
              projects.map((x) => (
                <Project
                  key={x.id}
                  id={x.id}
                  url={x.url}
                  name={x.name}
                  skills={x.skills}
                />
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Works;
