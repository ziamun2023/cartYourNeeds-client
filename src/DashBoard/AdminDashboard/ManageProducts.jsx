import React, { useContext, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { AuthContext } from '../../Provider/AuthContext';
import { useQuery } from '@tanstack/react-query';
import ManageProductCard from './ManageProductCard';

const ManageProducts = () => {
    const {user}=useContext(AuthContext)
    // const [categories,setCategories]=useState('')
    const {data: products =[], refetch}=useQuery(['CUN-products'],async()=>{
        const res=await fetch(`http://localhost:5000/allproducts`)
        return res.json()
      })
  
  
     
//       const [allpro,setAllpro]=useState(false)
// const filterOut=products.filter(f=>f.category===categories)


    return (
        <div >
       
        <Slide direction='left'><div className="overflow-x-auto">
         <p className='text-3xl text-center text-black'>All products <div className="dropdown dropdown-bottom dropdown-end">
  <label tabIndex={0} className="btn m-1">Category Sort</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-white rounded-box w-52">
    <li onClick={()=>setCategories("laptop")}><p>laptop</p></li>
    <li onClick={()=>setCategories("pc")}><p>pc</p></li>
    <li onClick={()=>setAllpro(products)}><p>All</p></li>
  </ul>
</div></p>
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