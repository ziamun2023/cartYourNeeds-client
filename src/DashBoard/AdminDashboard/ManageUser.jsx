import React, { useContext } from 'react';
import {  getUserData } from '../../api/Getdata';
import { AuthContext } from '../../Provider/AuthContext';

import { toast } from 'react-hot-toast';
import { UserPanel, adminPanel, sellerPanel } from '../../api/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Slide } from 'react-awesome-reveal';

const ManageUser = () => {
  const { user, logOut ,role,setRole} = useContext(AuthContext)
const navigate=useNavigate()
const {data: users =[], refetch}=useQuery(['CUN-user'],async()=>{
  const res=await fetch(`http://localhost:5000/allUser`)
  return res.json()
})




 const makeAdmin=(email)=>{
  adminPanel(email).then(data=>{
    console.log(data)
  
    Swal.fire(email, 'This user has become  An Admin of CART YOUR NEED website ')
    refetch()
   
   })
console.log(email)
 }
 const makeSeller=(email)=>{
  sellerPanel(email).then(data=>{
  
    Swal.fire(email, 'This user has become A seller of CART YOUR NEED website ')
    refetch()
    })

   
  
 }
 const makeUser=(email)=>{
  UserPanel(email).then(data=>{
  
    Swal.fire(email, 'This user has become A user of CART YOUR NEED website ')
    refetch()
    })

   
  
 }
    const alluser=getUserData()
    console.log(alluser)
    console.log(alluser)

    return (
      <>
      <Slide direction='left'>
      <div className="overflow-x-auto">
          <p className='text-center text-black text-3xl'>All user</p>
        <table className="table ">
          <thead>
            <tr>
              <th  className='text-black text-[14px]'>#</th> 
              <th className='text-black text-[14px] '>Name</th> 
              <th className='text-black text-[14px] '>Email</th> 
              <th className='text-black text-[14px] '>Phone number</th> 
              <th className='text-black text-[14px] '>Role </th> 
              <th className='text-black text-[14px] '>Details </th> 
              {/* <th className='text-black text-[14px] '>Location</th>  */}
              {/* <th className='text-black text-[14px] '>Registration date</th> */}
              {/* <th className='text-black text-[14px] '>Set Role</th> */}
              <th className='text-black text-[14px] '>Set Role</th>
            </tr>
          </thead> 
          <tbody >
            {
              users.map((c,index)=><tr className=' hover:translate-x-5 hover:rounded-2xl relative duration-500 hover:shadow-2xl  hover:bg-slate-200 hover:text-black' >
                <th>{index+1}</th>
           
            <td className='text-black text-[13px]'>{}</td>
                <td className='text-black text-[13px] '>{c.email}</td>
                <td className='text-black text-[13px]'>{c.email}</td>
                <td className='text-black text-[13px]'>{c.role}</td>
       
                <td className='text-black text-[13px]'>Details</td>
                {/* <td className='text-black text-[13px]'>{c.email}</td> */}
                {/* <td className='text-black text-[13px]'>{c.email}</td> */}
                <td class Name='text-black text-[13px]  '>
                  
                <button onClick={()=>makeAdmin(`${c.email}`)} className={`btn mx-2 ${c.role==='admin'?"bg-gray-500 text-black":"bg-white"} bg-white border-0 text-black hover:text-white duration-300 shadow-xl`}>admin</button>
      <button onClick={()=>makeSeller(`${c.email}`)} className={`btn mx-2 ${c.role==='seller'?"bg-gray-500 text-black":"bg-white"} bg-white border-0 text-black hover:text-white duration-300 shadow-xl`}>Seller</button>
      <button  onClick={()=>makeUser(`${c.email}`)}  className={`btn mx-2 ${c.role==='user'?"bg-gray-500 text-black":"bg-white"} bg-white border-0 text-black hover:text-white duration-300 shadow-xl`}>User</button></td> 
         
              
              </tr>)
            }
         
          
          </tbody> 
     
        </table>
       
      </div></Slide></>
    );
};

export default ManageUser;