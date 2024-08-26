// src/components/SliderConponent.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderProject = ({ children }) => {

    const SampleNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow custom-next" onClick={onClick}>
                <i className="fa-solid fa-angle-right"></i>
            </div>
        );
    };
    
    const SamplePrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow custom-prev" onClick={onClick}>
                <i className="fa-solid fa-angle-left"></i>
            </div>
        );
    };


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };

    return (
        <div className='listProject'>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
};

export default SliderProject;
