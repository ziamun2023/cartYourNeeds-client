import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination } from "swiper";


import swiperCategory1 from '../assets/clothing.jpg'
import swiperCategory2 from '../assets/gameConsole.jpg'
import swiperCategory3 from '../assets/laptop.jpg'
import swiperCategory4 from '../assets/furniture.jpg'
import swiperCategory5 from '../assets/mobiles.jpg'
import swiperCategory6 from '../assets/movies.jpg'
import swiperCategory7 from '../assets/accessories.png'
import swiperCategory8 from '../assets/beauty.jpg'
import HeadingTitle from "../component/HeadingTitle";




const SwiperCategory = () => {

 
    return (



<>

<HeadingTitle  heading={'Category'} subtitle={'Choose from category'}/>

<Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mx-20 "
      >
     <SwiperSlide  ><img className=" h-[600px] w-[400px] object-cover "  src={swiperCategory2} alt="" /><div className={`absolute bg-black duration-300  -top-[650px]  w-full h-full opacity-50`}>this is </div>
<h1 className="text-3xl text-black">Game Console</h1>
     
     </SwiperSlide>
        <SwiperSlide  ><img className=" h-[600px] w-[400px] object-cover  "  src={swiperCategory1} alt="" />
        <h1 className="text-3xl text-black">Clothing</h1></SwiperSlide>
        <SwiperSlide  ><img className=" h-[600px] w-[400px] object-cover  "  src={swiperCategory5} alt="" />
        <h1 className="text-3xl text-black">Mobiles</h1></SwiperSlide>
        <SwiperSlide  ><img className=" h-[600px] w-[400px] object-cover  "  src={swiperCategory4} alt="" />
        <h1 className="text-3xl text-black">Furniture</h1></SwiperSlide>
        <SwiperSlide  ><img className=" h-[600px] w-[400px] object-cover  "  src={swiperCategory6} alt="" />
        <h1 className="text-3xl text-black">Movies</h1></SwiperSlide>
        <SwiperSlide  ><img className=" h-[600px] w-[400px] object-cover  "  src={swiperCategory7} alt="" />
        <h1 className="text-3xl text-black">Accessories</h1></SwiperSlide>
        <SwiperSlide  ><img className=" h-[600px] w-[400px] object-cover  "  src={swiperCategory8} alt="" />
        <h1 className="text-3xl text-black">Beauty</h1></SwiperSlide>
        <SwiperSlide  ><img className=" h-[600px] w-[400px] object-cover  "  src={swiperCategory3} alt="" />
        <h1 className="text-3xl text-black">Laptops</h1></SwiperSlide>
      </Swiper>
</>
       
        

         
    );
};

export default SwiperCategory;