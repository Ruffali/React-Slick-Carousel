import React from 'react'
import Slider from "react-slick";
import "./ReactCarousel.css";

import img01 from './img/img01.jpg';
import img02 from './img/img02.jpg';
import img03 from './img/img03.jpg';

const ReactCarousel = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        className: 'slides'
    };
    let imagesContent = [
        {
            id: 1,
            img: img01,
        },
        {
            id: 2,
            img: img02,
        },
        {
            id: 3,
            img: img03,
        },
    ]

    return (
        <div className={"rct"}>
            <Slider {...settings}>
                {imagesContent.map((item) => {
                    return (
                        <div className={"inside"} key={item.id}>
                            <img  src={item.img} />
                        </div>
                    )
                })}
            </Slider>
        </div >
    )
}

export default ReactCarousel;