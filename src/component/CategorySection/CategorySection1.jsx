
import { TbCategory } from "react-icons/Tb";
// import { IoArrowBackSharp } from "react-icons/Io";

import cat1 from '../../assets/phoneICon.png'
import cat2 from '../../assets/monitor.png'
import cat3 from '../../assets/smartwatche.png'
import cat4 from '../../assets/pcgaming.png'
import cat5 from '../../assets/laptopIco.png'
import cat6 from '../../assets/headphoneicon.png'
import cat7 from '../../assets/gamingcontroller.png'
import cat8 from '../../assets/networking.png'
import cat9 from '../../assets/photograph.png'
import cat10 from '../../assets/computerIcon.png'
import { GrLinkNext } from "react-icons/Gr";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";

const CategorySection1 = () => {
    const [firstcat,setFirstcat]=useState(false)
    const [random,setRandom]=useState(true)
    const [secondt,setSecond]=useState(false)
    const nextCat=()=>{
        setSecond(false)
        setRandom(false)
        setFirstcat(true)
    }
    const backCat=()=>{
        setFirstcat(false)
        setRandom(false)
        setSecond(true)
    }
    return (
        <div className="mx-32">
        <p className='flex text-red-500 text-2xl font-semibold mb-10'><p><TbCategory/></p><p>Cateogies</p></p>
        {
    random
 &&  <div className="grid lg:grid-cols-5 gap-10">
 <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center "> 
  <img  src={cat1} alt="" />
       <p className="text-black font-semibold text-2xl">Phones</p>
    </div>
    <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center ">
       <img  src={cat2} alt="" />
       <p className="text-black font-semibold text-2xl">Monitor</p>
    </div>
    <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center ">
       <img  src={cat3} alt="" />
       <p className="text-black font-semibold text-2xl">smart Wathces</p>
    </div>
    <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center ">
       <img  src={cat4} alt="" />
       <p className="text-black font-semibold text-2xl">Gaming console</p>
    </div>
    <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center ">
       <img  src={cat5} alt="" />
       <p className="text-black font-semibold text-2xl">Laptop</p>
    </div>
 </div>
        }
     {

secondt &&  <Slide direction="right">
      <div className="grid lg:grid-cols-5 gap-10">
<div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center " > 
      <img  src={cat1} alt="" />
      <p className="text-black font-semibold text-2xl">phones</p>
   </div>
   <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center ">
      <img  src={cat2} alt="" />
      <p className="text-black font-semibold text-2xl">monitor</p>
   </div>
   <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center ">
      <img  src={cat3} alt="" />
      <p className="text-black font-semibold text-2xl">smartWatch</p>
   </div>
   <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center ">
      <img  src={cat4} alt="" />
      <p className="text-black font-semibold text-2xl">Game Console</p>
   </div>
   <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center ">
      <img  src={cat5} alt="" />
      <p className="text-black font-semibold text-2xl">Laptop</p>
   </div>
</div>
</Slide>
     }

       {
        firstcat &&  <Slide direction="left">
             <div className="grid lg:grid-cols-5 gap-10">
        <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center "> 
              <img  src={cat6} alt="" />
              <p className="text-black font-semibold text-2xl">headphones</p>
           </div>
           <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center ">
              <img  src={cat7} alt="" />
              <p className="text-black font-semibold text-2xl">Game</p>
           </div>
           <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center ">
              <img  src={cat8} alt="" />
              <p className="text-black font-semibold text-2xl">Networking</p>
           </div>
           <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center ">
              <img  src={cat9} alt="" />
              <p className="text-black font-semibold text-2xl">Camera</p>
           </div>
           <div className="border-2 hover:bg-blue-400   duration-500 hover:-translate-y-4   p-5 grid justify-items-center ">
              <img  src={cat10} alt="" />
              <p className="text-black font-semibold text-2xl">Pc</p>
           </div>
        </div>
        </Slide>
       }

  <div className="text-right">
    <p onClick={nextCat}  className="btn rotate-180 text-black bg-blue-400  hover:bg-white"><GrLinkNext/></p>
    <p onClick={backCat} className='btn bg-blue-400  text-black hover:bg-white'><GrLinkNext/></p>
  </div>
    </div>
    );
};

export default CategorySection1;