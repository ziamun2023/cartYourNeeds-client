import React, { useContext } from 'react';
import {  getUserData } from '../../api/Getdata';
import { AuthContext } from '../../Provider/AuthContext';

import { toast } from 'react-hot-toast';
import { UserPanel, adminPanel, sellerPanel } from '../../api/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ManageUser = () => {
  const { user, logOut ,role,setRole} = useContext(AuthContext)
const navigate=useNavigate()

 const makeAdmin=(email)=>{
  adminPanel(email).then(data=>{
    console.log(data)
  
    Swal.fire(email, 'This user has become  An Admin of CART YOUR NEED website ')
   
   
   })
console.log(email)
 }
 const makeSeller=(email)=>{
  sellerPanel(email).then(data=>{
  
    Swal.fire(email, 'This user has become A seller of CART YOUR NEED website ')
   
    })

   
  
 }
 const makeUser=(email)=>{
  UserPanel(email).then(data=>{
  
    Swal.fire(email, 'This user has become A user of CART YOUR NEED website ')
   
    })

   
  
 }
    const alluser=getUserData()
    console.log(alluser)
    console.log(alluser)

    return (
        <div className="overflow-x-auto">
        <table className="table">
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
              alluser.map((c,index)=><tr>
                <th>{index+1}</th>
                <td className='text-black text-[13px]'>{}</td>
                <td className='text-black text-[13px]'>{c.email}</td>
                <td className='text-black text-[13px]'>{c.email}</td>
                <td className='text-black text-[13px]'>{c.role}</td>
                <td className='text-black text-[13px]'>Details</td>
                {/* <td className='text-black text-[13px]'>{c.email}</td> */}
                {/* <td className='text-black text-[13px]'>{c.email}</td> */}
                <td class Name='text-black text-[13px]  '>
                  
                <button onClick={()=>makeAdmin(`${c.email}`)} className=' text-black p-4 ms-2 text-semibold  font-semibold rounded-md   animatin-btn duration-500'>admin</button>
      <button onClick={()=>makeSeller(`${c.email}`)} className=' text-black p-4 ms-2 text-semibold  font-semibold rounded-md admin-btn duration-500'>Seller</button>
      <button  onClick={()=>makeUser(`${c.email}`)}  className=' text-black p-4 ms-2 text-semibold  font-semibold rounded-md user-btn  duration-500'>User</button></td> 
         
              
              </tr>)
            }
         
          
          </tbody> 
     
        </table>
       
      </div>
    );
};

export default ManageUser;