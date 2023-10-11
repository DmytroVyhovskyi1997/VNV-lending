import React from "react";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import page1 from "../../image/page1.png";
import page2 from "../../image/page2.png";
import page3 from "../../image/page3.png";
import {
  SliderContainer,
  ImgSlider,
  SliderWrapper,
} from "./SimpleSlider.styled";
import { Link } from "react-router-dom";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderContainer>
      <SliderWrapper>
        <Slider {...settings}>
          <div>
            <Link to="https://irenbanquethall.com/">
              <ImgSlider src={page1} alt="page1" />
            </Link>
          </div>
          <div>
            <Link to="https://www.learnitlive.com/">
              <ImgSlider src={page2} alt="page2" />
            </Link>
          </div>
          <div>
            <Link>
              <ImgSlider src={page3} alt="page3" />
            </Link>
          </div>
        </Slider>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default SimpleSlider;
