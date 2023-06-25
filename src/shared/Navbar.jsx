import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import { Link } from 'react-router-dom';
const Navbar = () => {
  
    return (
      <div className="navbar  h-[90px]  bg-[rgb(255,255,255)] rounded-2xl   text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           
            <Link to='/'> <li><a> Home</a></li></Link>
               
                 <Link to='/allproducts'> <li><a>Shop</a></li></Link>
                  <li><a>About</a></li>
                  <li><a>Blog </a></li>
                  <li><a>Contact </a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Cart Your Needs</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
     
          <Link to='/'> <li><a> Home</a></li></Link>
               
               <Link to='/allproducts'> <li><a>Shop</a></li></Link>
            
                  <li><a>About</a></li>
                  <li><a>Blog </a></li>
                  <li><a>Contact </a></li>
       
          </ul>
        </div>
        <div className="navbar-end">
        <div className='my-auto cursor-pointer hover:bg-red-600 rounded-full p-2 ms-3 duration-300'><AiOutlineSearch size={30}/></div>
        <div className='my-auto cursor-pointer hover:bg-red-600 rounded-full p-2 ms-3 duration-300'><AiOutlineShoppingCart size={30}/></div>
        <div className='my-auto cursor-pointer hover:bg-red-600 rounded-full p-2 ms-3 duration-300'><AiOutlineHeart size={30}/></div>
        <div className='my-auto cursor-pointer rounded-full p-2 ms-3 duration-300'>
       
        <div className="dropdown dropdown-end   ">
  <label tabIndex={0} className=" m-1  "><AiOutlineUser className='hover:bg-red-600 rounded-full ' size={30}/></label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 h-[460px]  bg-[rgb(255,255,255)]  shadow rounded-box w-[300px]">
  
<Link to='/account'><p className='text-2xl  hover:bg-blue-200 py-3 my-3 rounded-xl px-2 hover:border-1 duration-500'>My account</p></Link>
<hr />
<p className='text-2xl  hover:bg-blue-200 py-3 my-3 rounded-xl px-2 hover:border-1 duration-500'>Support </p>
<hr />
<p className='text-2xl  hover:bg-blue-200 py-3 my-3 rounded-xl px-2 hover:border-1  duration-500'>Language </p>
<hr />
<Link to='/becomeAseller'><p className='text-2xl  hover:bg-blue-200 py-3 my-3 bg-yellow-400 rounded-xl px-2 hover:border-1  duration-500'>Become a seller </p>
</Link>


 <Link to='/login'> <button className='btn bg-[rgb(53,119,240)] my-2 text-black border-0 hover:text-white text-2xl'>Log in</button></Link>
 
 <div className='flex mt-5'> <p className=' text-gray-400'>no account yet? </p><p className='font-bold ms-3 hover:bg-blue-200 rounded-xl px-2 duration-500'><Link to='/register'>Register</Link></p></div>
  </ul>
</div>

 
        </div>
    
        </div>
      </div>
    );
};

export default Navbar;