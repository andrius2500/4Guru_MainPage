import React, { useState } from 'react';
import Slider from 'react-slick';

import test1 from "./images/test1.png";
import test2 from "./images/test2.png";
import test3 from "./images/test3.png";
import test4 from "./images/test4.png";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import './styles/styles.css';

const images = [test1, test2, test3, test4];

function BlogMain() {

    const NextArrow = ({onClick}) => {
        return (
            <div className='arrow next' onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    };

    const PrevArrow = ({onClick}) => {
        return (
            <div className='arrow prev' onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };

    return (
        <div className='blog-main'>
            <div className='blog-main__container'>
                <div className='blog-main__top'>
                    <h2>Blog</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the </p>
                </div>
                <div className='blog-main__slide-carousel'>
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <div className={index === imageIndex ? 'slide activeSlide' : 'slide'}>
                                <img src={img} alt={img} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='blog-main__btn'>
                    <button type='button' className='blog-main__view-all'>View All</button>
                </div>
            </div>
        </div>
    );
}

export default BlogMain;