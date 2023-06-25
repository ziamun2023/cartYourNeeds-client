
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
const Banner = () => {
    return (
        <Carousel autoPlay className='mt-11 w-2/3 mx-auto text-center'>
        <div>
            <img className=' object-cover w-2/3' src={banner1} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
        <img className=' object-cover w-2/3' src={banner2} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
        <img className=' object-cover w-2/3' src={banner3} />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    );
};

export default Banner;