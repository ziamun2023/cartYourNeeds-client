import React, { useContext } from 'react';
import { Slide } from 'react-awesome-reveal';
import { AuthContext } from '../../Provider/AuthContext';
import { useQuery } from '@tanstack/react-query';
import ManageProductCard from './ManageProductCard';

const ManageProducts = () => {
    const {user}=useContext(AuthContext)
    const {data: products =[], refetch}=useQuery(['CUN-products'],async()=>{
        const res=await fetch(`http://localhost:5000/allproducts`)
        return res.json()
      })
    return (
        <div >
       
        <Slide direction='left'><div className="overflow-x-auto">
         <p className='text-3xl text-center text-black'>All products</p>
         <table className="table">
           {/* head */}
           <thead>
             <tr>
             
               <th>#</th>
               <th>Product Name</th>
               <th> Price</th>
               <th>Seller Email</th>
             
               <th>  QUantity Available</th>
            
             
               <th> Status</th>
               <th> Update</th>
             </tr>
           </thead>
           <tbody >
             {products.map((product,index)=><ManageProductCard refetch={refetch} index={index} product={product} key={product._id}/>)}
       
       
           </tbody>
           {/* foot */}
         
           
         </table>
       </div></Slide>
           </div>
    );
};

export default ManageProducts;