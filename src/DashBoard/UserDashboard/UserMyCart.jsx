import React, { useContext, useEffect, useState } from 'react';

import UserCartsCards from './UserCartsCards';
import { AuthContext } from '../../Provider/AuthContext';

import { Slide } from 'react-awesome-reveal';
import allcarts from '../../api/allcart';
import { useQuery } from '@tanstack/react-query';



const UserMyCart = () => {
  // const [remain,setRemain]=useState([])
  
  const {user}=useContext(AuthContext)
  // const dataCart=allcarts()
  const {data: products =[], refetch}=useQuery(['CUN-carts'],async()=>{
    const res=await fetch(`http://localhost:5000/favs/${user?.email}`
    ,{
      headers:{
     
        authorization: `bearer ${localStorage.getItem('access-token')}`
      },
    })
    return res.json()
  })


  // const [userdata,setUserdata]=useState([])
  // // favs
  // useEffect(()=>{
  //   fetch(`http://localhost:5000/favs/${user?.email}`)
  //   .then(res=>res.json())
  //   .then(data=>setUserdata(data))
  // },[])

  // const data=dataCart.filter(d=>d.userId=user?.email)



 
  // const {data: products =[], refetch}=useQuery(['CUN-carts'], async()=>{
  //     const res=await fetch(`http://localhost:5000/favs/${user?.email}`
  //     ,{
  //       headers:{
       
  //         authorization: `bearer ${localStorage.getItem('access-token')}`
  //       },
  //     })
  //     console.log(products);
  //     return res.json()
  //   })

  // useEffect(()=>{
  //   fetch(`http://localhost:5000/cartItem/${user?.email}`)
  //   .then(res=>res.json())
  //   .then(data=console.log(data))
  // },[])
    return (
        <div >
       
 <Slide direction='down'><div className="overflow-x-auto">
  <p className='text-3xl text-center text-black'>All products</p>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      
        <th>#</th>
        <th>Product Name</th>
        <th> Price</th>
        <th>Seller Name</th>
      
        <th>  QUantity Available</th>
     
      
      
        <th> remove</th>
      </tr>
    </thead>
    <tbody >
      {products .map((product,index)=><UserCartsCards refetch={refetch} index={index} product={product} key={product._id}/>)}


    </tbody>
    {/* foot */}
  
    
  </table>
</div></Slide>
    </div>
    );
};

export default UserMyCart;