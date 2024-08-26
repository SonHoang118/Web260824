// src/components/SliderConponent.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderConponent = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
        nextArrow: null,
        prevArrow: null

    };

    return (
        <div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '650px',
                                objectFit: 'cover' // Đảm bảo hình ảnh lấp đầy khung
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderConponent;
