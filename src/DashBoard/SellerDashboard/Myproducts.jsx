import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import ProductsCard from './ProductsCard';
import { AuthContext } from '../../Provider/AuthContext';

const Myproducts = () => {
    const {user}=useContext(AuthContext)
    const {data: products =[], refetch}=useQuery(['CUN-products'],async()=>{
        const res=await fetch(`http://localhost:5000/specific/${user?.email}`)
        return res.json()
      })
      console.log(products)
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
        <th>Total Sell</th>
      
        <th>  QUantity Available</th>
     
      
        <th> Status</th>
        <th> Update</th>
      </tr>
    </thead>
    <tbody >
      {products.map((product,index)=><ProductsCard refetch={refetch} index={index} product={product} key={product._id}/>)}


    </tbody>
    {/* foot */}
  
    
  </table>
</div></Slide>
    </div>
    );
};

export default Myproducts;