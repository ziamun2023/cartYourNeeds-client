import React from 'react';
import { CiShoppingBasket } from "react-icons/ci";
import { BsCartCheckFill } from "react-icons/Bs";
import { IoMdExit } from "react-icons/Io";
import { FaAddressCard } from "react-icons/Fa";
import { VscAccount } from "react-icons/Vsc";
import { Link, Outlet } from 'react-router-dom';
const UserDashBoard = () => {
    return (



        
        <div className='grid lg:grid-cols-5 gap-5'>
            <div className='lg:col-span-1 hidden lg:block md:block border-2 rounded-xl border-gray-500 '>
<div className='hover:bg-gray-200 flex hover:text-blue-700  rounded-md mb-3 mt-14 mx-10 py-3 px-3 font-sans  text-[rgb(119,119,119)] text-2xl'><p className='my-auto'><CiShoppingBasket/></p><p className='ms-4'>Orders</p></div>
<Link to='/account/carts'><div className='hover:bg-gray-200 flex hover:text-blue-700  rounded-md my-3 mx-10 py-3 px-3 font-sans text-[rgb(119,119,119)] text-2xl'><p className='my-auto'><BsCartCheckFill/></p><p className='ms-4'>cart</p></div></Link>
<div className='hover:bg-gray-200 flex hover:text-blue-700  rounded-md my-3 mx-10 py-3 px-3 font-sans text-[rgb(119,119,119)] text-2xl'><p className='my-auto' ><FaAddressCard/></p><p className='ms-4'>Address</p></div>
<div className='hover:bg-gray-200 flex hover:text-blue-700  rounded-md my-3 mx-10 py-3 px-3 font-sans text-[rgb(119,119,119)] text-2xl'><p className='my-auto' ><VscAccount/></p><p className='ms-4'>Account Details</p></div>
<div className='hover:bg-gray-200 flex hover:text-blue-700  rounded-md mt-3 mb-14 mx-10 py-3 px-3 font-sans text-[rgb(119,119,119)] text-2xl'><p className='my-auto'><IoMdExit/></p><p className='ms-4'>Log out</p></div>
            </div>
            <div className="dropdown lg:hidden md:hidden ">
  <label tabIndex={0} className="btn m-1">Dashboard</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
  <div className='hover:bg-gray-200   hover:text-blue-700  rounded-md    py-3 px-3 font-sans  text-[rgb(119,119,119)] text-2xl'><p className='my-auto '><CiShoppingBasket/></p><p>Orders</p></div>
    <div className='hover:bg-gray-200   hover:text-blue-700  rounded-md   py-3 px-3 font-sans text-[rgb(119,119,119)] text-2xl'><p className='my-auto'><BsCartCheckFill/></p><p>carts</p></div>
    <div className='hover:bg-gray-200   hover:text-blue-700  rounded-md   py-3 px-3 font-sans text-[rgb(119,119,119)] text-2xl'><p className='my-auto'><FaAddressCard/></p><p>Address</p></div>

    <div className='hover:bg-gray-200   hover:text-blue-700  rounded-md   py-3 px-3 font-sans text-[rgb(119,119,119)] text-2xl'><p className='my-auto'><VscAccount/></p><p>Account Details</p></div>
    <div className='hover:bg-gray-200   hover:text-blue-700  rounded-md  py-3 px-3 font-sans text-[rgb(119,119,119)] text-2xl'><p className='my-auto'><IoMdExit/></p><p>Log out</p></div>
  </ul>
</div>
         
            <div className='lg:col-span-4 bg-[rgb(248,248,248)]  rounded-xl'>
<Outlet/>
            </div>
        </div>
    );
};

export default UserDashBoard;