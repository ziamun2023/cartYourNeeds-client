import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import UserDashBoard from '../../DashBoard/UserDashboard/UserDashBoard';
const UserAccount = () => {
    return (
        <div >
            <div >
            <Marquee>
   <p className='text-black'>Get 10% discount with student id</p>
  </Marquee>
            </div>
            <div className='bg-[rgb(248,248,248)] w-full h-[200px]'>
             <div className='flex gap-5 my-5 mx-20'><Link to='/'><p className='text-2xl text-black'>Home</p></Link>
             <p>|</p>
             <p className='text-2xl text-black'>My Account</p>
             </div>
                <p className='text-5xl font-medium text-black mx-20'>Explore All products</p>
            </div>
            <div><img src="" alt="" /></div>
     

     <div className='mx-20 my-8'>
     <p className='text-black text-2xl font-semibold my-6'>Buyer Name</p>
            <p className='text-[rgb(183,183,183)] font-medium '>eTrade Membership since sep 2020</p>
     </div>
     {/* dashBoard */}

   <div className='mx-20'>
   <UserDashBoard/>
   </div>
        </div>
    );
};

export default UserAccount;