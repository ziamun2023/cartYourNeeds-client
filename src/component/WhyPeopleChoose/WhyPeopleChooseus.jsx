import React from 'react';
import { TbTruckDelivery } from "react-icons/Tb"; 
import { AiTwotoneLike } from "react-icons/Ai"; 
import { SiAdguard } from "react-icons/Si"; 
import { BiSolidTimer } from "react-icons/Bi"; 
import { RiCustomerServiceFill } from "react-icons/Ri"; 
import { LuPackageCheck } from "react-icons/Lu"; 
const WhyPeopleChooseus = () => {
    return (
        <div  className='mx-32 grid justify-items-center my-10'>
               <p className='flex text-red-500 text-4xl my-6  font-semibold mb-10'><p><AiTwotoneLike/></p><p>Why people choose us</p></p>

             <div data-aos="zoom-in-up" className="grid lg:grid-cols-5 gap-10">
 <div className=" hover:shadow-2xl shadow-sm  duration-500 hover:-translate-y-4  text-red-500  p-5 grid justify-items-center "> 
<TbTruckDelivery size={110} />
       <p className="text-black font-semibold text-2xl">Fast & Secure Delivery</p>
    </div>
    <div className=" hover:shadow-2xl shadow-sm  duration-500 hover:-translate-y-4 text-green-400   p-5 grid justify-items-center ">
     <SiAdguard  size={110}/>
       <p className="text-black font-semibold text-2xl">100% Guarantee On Product</p>
    </div>
    <div className=" hover:shadow-2xl shadow-sm  duration-500 hover:-translate-y-4  text-blue-700  p-5 grid justify-items-center ">
     <BiSolidTimer  size={110}/>
       <p className="text-black font-semibold text-2xl">24 Hour Return Policy</p>
    </div>
    <div className=" hover:shadow-2xl shadow-sm  duration-500 hover:-translate-y-4  text-orange-300 p-5 grid justify-items-center ">
    <RiCustomerServiceFill  size={110}/>
       <p className="text-black font-semibold text-2xl"> Customer Services</p>
    </div>
    <div className=" hover:shadow-2xl shadow-sm  duration-500 hover:-translate-y-4 text-yellow-600   p-5 grid justify-items-center ">
     <LuPackageCheck  size={110}/>
       <p className="text-black font-semibold text-2xl">Best Packaging</p>
    </div>
 </div>
        </div>
    );
};

export default WhyPeopleChooseus;