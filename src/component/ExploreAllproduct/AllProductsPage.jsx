import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const AllProductsPage = () => {
    return (
        <div className=''>
            <div >
            <Marquee>
   <p className='text-black'>Get 10% discount with student id</p>
  </Marquee>
            </div>
            <div className='bg-[rgb(248,248,248)] w-full h-[200px]'>
             <div className='flex gap-5 my-5 mx-20'><Link to='/'><p className='text-2xl text-black'>Home</p></Link>
             <p>|</p>
             <p className='text-2xl text-black'>All Products</p>
             </div>
                <p className='text-5xl font-medium text-black mx-20'>Explore All products</p>
            </div>
            <div><img src="" alt="" /></div>
     

     <div className='mx-20 my-8  '>
        <div className='flex'>
            <p  className='px-6 py-3 border-2 rounded-md'>
                Categories
            </p>
            <p className='px-6 py-3 border-2 rounded-md'>
                Price range
            </p>
            <p className='px-6 py-3 border-2 rounded-md'>
                Sort By latest
            </p>
        </div>
     </div>
 

   <div className='mx-20 '>
 
   </div>
        </div>
    );
};

export default AllProductsPage;