import React, { useState } from 'react';
// import Banner from '../../banner/Banner';
// import SwiperCategory from '../../categorySwiper/SwiperCategory';
import { Carousel } from 'react-responsive-carousel';
import Slider from '../../component/Caorousel.jsx/Slider';
import Slider2 from '../../component/Caorousel.jsx/Slider2';
import Slider3 from '../../component/Caorousel.jsx/Slider3';
// import Section1 from './Section1';
import CategorySection1 from '../../component/CategorySection/CategorySection1';
import SpecialOffer from '../../component/SpecialOffer/SpecialOffer';
import ExploreAllProduct from '../../component/ExploreAllproduct/ExploreAllProduct';
import OfferSection from '../../component/offersection/OfferSection';
import WhyPeopleChooseus from '../../component/WhyPeopleChoose/WhyPeopleChooseus';

const Home = () => {
    const [random,setRandom]=useState(true)
    const [bannerOne,setBannerOne]=useState(false)
    const [bannerTwo,setBannerTwo]=useState(false)
    const [bannerThree,setBannerThree]=useState(false)
    const Banner1=()=>{
        setBannerTwo(false)
        setRandom(false)
        setBannerThree(false)
        setBannerOne(true)
    
    }
    const Banner2=()=>{
     
        setBannerOne(false)
        setRandom(false)
        setBannerThree(false)
        setBannerTwo(true)
    }
    const Banner3=()=>{
     
        setBannerOne(false)
        setRandom(false)
        setBannerThree(true)
        setBannerTwo(false)
    }
    return (
        <>
         <div className='bg-[rgb(249,243,240)] h-[630px] z-30 '>
         {bannerOne && <Slider/>}   
         {random && <Slider/>}   
         {bannerTwo && <Slider2/>}   
         {bannerThree && <Slider3/>}   

      
         </div>
         <p className='text-center'>   <div className="join ">
  <input onClick={Banner1}  className="join-item btn btn-square" type="radio" name="options" aria-label="1"  />
  <input onClick={Banner2}  className="join-item btn btn-square" type="radio" name="options" aria-label="2"  />
  <input onClick={Banner3} className="join-item btn btn-square" type="radio" name="options" aria-label="3"   />
  {/* <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" checked/> */}
</div>  </p>
       
     {/* category setion 2 */}
   <CategorySection1 className='z-10'/>

   {/* special offer section 3 */}
   <SpecialOffer/>
   {/* all products section 4 */}
   <ExploreAllProduct/>
   {/* Banner */}
   <OfferSection/>

   {/* why people choos */}

   <WhyPeopleChooseus/>
        </>
    );
};

export default Home;