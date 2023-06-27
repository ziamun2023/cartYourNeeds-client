import React from 'react';
import { Fade } from 'react-awesome-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import banner1 from '../../assets/posterHeadphone.png'

const SpecialOffer = () => {
    return (
        <div className='bg-[white]   shadow-xl rounded-xl mx-20 grid lg:grid-cols-2 h-[440px] mt-20'>
        <div data-aos="fade-up"  className='col-span-1 my-auto lg:ms-20'> 
          <div > <p className='text-[rgb(253,106,146)] '>Hot deal i this Week</p></div> 
           <div  > <p className='lg:text-7xl md:text-4xl text-2xl text-black font-medium '>Enhance Your Music Experience</p></div>
            <div className='flex mt-10'>
              <p className='bg-blue-300 py-4 px-4 w-44 rounded-xl text-black flex btn border-0 hover:bg-slate-400 '> <p> Check it out</p></p>
              <p>reviews</p>
            </div>
        </div>
        <div className='col-span-1 flex relative'>
<div className='' data-aos="fade-up" ><img className='absolute -top-20 right-56' src={banner1} alt="" /></div>

        </div>
    </div>
    );
};

export default SpecialOffer;