import React from 'react';
import { CiShoppingBasket } from "react-icons/ci";
import { BsCartCheckFill } from "react-icons/Bs";
import { IoMdExit } from "react-icons/Io";
import { FaAddressCard, FaSearch } from "react-icons/Fa";
import { VscAccount } from "react-icons/Vsc";
import { Link, Outlet } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
Link
const AdminDashboard = () => {
    return (
    





<div  className='grid  lg:grid-cols-6 gap-5 '>
<div  className='lg:col-span-1 shadow-xl rounded-2xl h-[900px]    hidden lg:block md:block  border-gray-500 '>

<Slide>  <Link ><div  className='text-black hover:bg-gray-200 flex hover:translate-x-5 duration-500 hover:shadow-2xl hover:text-blue-700  rounded-md mb-3 mt-14 mx-2 py-3 px-3 font-sans   text-2xl'><p className='my-auto'><CiShoppingBasket/></p><p className='ms-4'>Manage seller</p></div></Link></Slide>

<Slide><Link to='/AdminAccount/ManageProducts'><div  className='text-black hover:bg-gray-200 flex hover:text-blue-700  rounded-md my-3  hover:translate-x-5 duration-500 hover:shadow-2xl mx-2 py-3 px-3 font-sans  text-2xl'><p className='my-auto'><BsCartCheckFill/></p><p className='ms-4'>Manage Products</p></div></Link></Slide>
<Link to='/AdminAccount/ManageUser'><Slide><div className='text-black hover:bg-gray-200 flex hover:text-blue-700  rounded-md my-3  hover:translate-x-5 duration-500 hover:shadow-2xl mx-2 py-3 px-3 font-sans  text-2xl'><p className='my-auto'><BsCartCheckFill/></p><p className='ms-4'>All user</p></div></Slide></Link>
<Slide><div className='text-black hover:bg-gray-200 flex hover:text-blue-700  rounded-md my-3  hover:translate-x-5 duration-500 hover:shadow-2xl mx-2 py-3 px-3 font-sans  text-2xl'><p className='my-auto' ><FaAddressCard/></p><p className='ms-4'>Address</p></div></Slide>
<Slide><div className='text-black hover:bg-gray-200 flex hover:text-blue-700  rounded-md my-3  hover:translate-x-5 duration-500 hover:shadow-2xl mx-2 py-3 px-3 font-sans  text-2xl'><p className='my-auto' ><VscAccount/></p><p className='ms-4'>Address</p></div></Slide>
<Slide><div className='text-black hover:bg-gray-200 flex hover:text-blue-700  rounded-md mt-3  hover:translate-x-5 duration-500 hover:shadow-2xl mb-14 mx-2 py-3 px-3 font-sans  text-2xl'><p className='my-auto'><IoMdExit/></p><p className='ms-4'>Log out</p></div></Slide>
</div>
<div className="dropdown lg:hidden md:hidden ">
<label tabIndex={0} className="btn m-1">Dashboard</label>
<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
<div className='hover:bg-gray-200   hover:text-blue-700  rounded-md    py-3 px-3 font-sans  text-[rgb(119,119,119)] text-2xl'><p className='my-auto '><CiShoppingBasket/></p><p>Add a new Item</p></div>
<div className='hover:bg-gray-200   hover:text-blue-700  rounded-md   py-3 px-3 font-sans text-[rgb(119,119,119)] text-2xl'><p className='my-auto'><BsCartCheckFill/></p><p>My Products</p></div>
<div className='hover:bg-gray-200   hover:text-blue-700  rounded-md   py-3 px-3 font-sans text-[rgb(119,119,119)] text-2xl'><p className='my-auto'><BsCartCheckFill/></p><p>Total orders</p></div>
<div className='hover:bg-gray-200   hover:text-blue-700  rounded-md   py-3 px-3 font-sans text-[rgb(119,119,119)] text-2xl'><p className='my-auto'><FaAddressCard/></p><p>Address</p></div>

<div className='hover:bg-gray-200   hover:text-blue-700  rounded-md   py-3 px-3 font-sans text-[rgb(119,119,119)] text-2xl'><p className='my-auto'><VscAccount/></p><p>Account Details</p></div>
<div className='hover:bg-gray-200   hover:text-blue-700  rounded-md  py-3 px-3 font-sans text-[rgb(119,119,119)] text-2xl'><p className='my-auto'><IoMdExit/></p><p>Log out</p></div>
</ul>
</div>

<div className='lg:col-span-5 '>
  <div className='grid lg:grid-cols-2 gap-10'>

    <div className=' shadow-2xl flex  justify-around rounded-2xl '>
    <input type="text" placeholder="Search" className="bg-gray-200 w-[500px] text-center rounded-2xl h-10 my-auto" />
   
   <FaSearch className='my-auto -ms-20' size={35}/> <div className='my-auto'>
    </div>
    
    </div>
    <div className=' '>
    <div className="stats shadow">

<div className="stat ">
<div className="stat-figure text-primary ">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
</div>
<div className="stat-title">Total Likes</div>
<div className="stat-value text-primary">25.6K</div>
<div className="stat-desc">21% more than last month</div>
</div>

<div className="stat">
<div className="stat-figure text-secondary">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
</div>
<div className="stat-title">Page Views</div>
<div className="stat-value text-secondary">2.6M</div>
<div className="stat-desc">21% more than last month</div>
</div>

<div className="stat">
<div className="stat-figure text-secondary">
<div className="avatar online">
<div className="w-16 rounded-full">
<img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
</div>
</div>
</div>
<div className="stat-value">86%</div>
<div className="stat-title">Tasks done</div>
<div className="stat-desc text-secondary">31 tasks remaining</div>
</div>

</div>
    </div>
  
  
  
  </div>
<div className='mt-10 shadow-xl h-[500px]  bg-[rgb(248,248,248)]  overflow-y-scroll w-full     rounded-xl '><Outlet/></div>
</div>
</div>
    );
};

export default AdminDashboard;