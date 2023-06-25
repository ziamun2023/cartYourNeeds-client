import React from 'react';

import { TbCategory } from "react-icons/Tb";
import { Link } from 'react-router-dom';
const ExploreAllProduct = () => {
    return (
        <div className='mx-20 '>
              <p className='flex text-red-500 text-2xl font-semibold mb-10'><p><TbCategory/></p><p>All products</p></p>
              <p className='flex text-black text-6xl font-semibold mb-10'><p>Explore Our Products</p></p>
            <div className='grid lg:grid-cols-4'>

            </div>
          <div className='grid justify-items-center'>
          <Link to='/allproducts'><p className='border-0 w-28  text-black hover:bg-blue-400 bg-blue-300 btn'>Show all</p></Link>
          </div>
            
        </div>
    );
};

export default ExploreAllProduct;