import React from 'react';
import banner3 from '../../assets/vr4.png'
import banner4 from '../../assets/vr2.png'
import { Slide } from 'react-awesome-reveal';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Slider3 = () => {
    return (
        <div className=' grid lg:grid-cols-2'>
        <div className='col-span-1 my-auto mx-auto '> 
          <Slide direction='up'> <p className='text-[rgb(253,106,146)] '>Hot deal i this Week</p></Slide> 
           <Slide  direction='up' duration='500'> <p className='lg:text-7xl md:text-4xl text-2xl text-black font-medium '>Sony  Smart Vr</p></Slide>
            <div className='flex mt-10'>
              <p className='bg-white  py-4 px-4 w-44 rounded-xl text-black flex btn border-0 hover:bg-slate-400 '><p className='py-auto'><AiOutlineShoppingCart/></p> <p> Shop now</p></p>
              <p>reviews</p>
            </div>
        </div>
        <div className='col-span-1 flex'> 
<Slide duration='2000' direction='up'><img src={banner4} alt="" /></Slide>
<Slide duration='3000' direction='up'><img className=' w-[1600px] top-0 mt-20' src={banner3} alt="" /></Slide>
        </div>
    </div>
    );
};

export default Slider3;