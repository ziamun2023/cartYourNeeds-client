import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import { TbCategory } from "react-icons/Tb";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContext';
import e from 'cors';
import Swal from 'sweetalert2';
const ExploreAllProduct = () => {
  const {user}=useContext(AuthContext)
  const userID=user?.email
  const {data: products =[], refetch}=useQuery(['CUN-products'],async()=>{
    const res=await fetch(`http://localhost:5000/allprodcuts`)
    return res.json()
  })
  const handleAddtoCart=(id)=>{
  console.log(products)
const product=products.find(c=>c._id===id)
const  {price,name,category,description,selleremail,image,quantit,sellername}=product
const cartitem={price,name,category,description,selleremail,image,quantit,sellername,userID}
if (user){
fetch('http://localhost:5000/carts',{

method: 'POST',
headers: {
    'content-type': 'application/json'
},
body: JSON.stringify(cartitem)
})
.then(res=>res.json())
.then(data=>{
  if(data.insertedId){
    Swal.fire({
   
      text: 'Item added to cart.',
    textWidth:300,
      imageWidth: 400,
      imageHeight: 200,
    
    })
  }
})
  
}
else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please log in!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
}

  }
  console.log(products)

    return (
        <div className='mx-20 my-10'>
              <p className='flex text-red-500 text-2xl font-semibold mb-10'><p><TbCategory/></p><p>All products</p></p>
              <p className='flex text-black text-6xl font-semibold mb-10'><p>Explore Our Products</p></p>
            <div className=' relative my-10  grid lg:grid-cols-4 '>

 {
  products.slice(0,8).map(c=>  <article key={c._id} className="my-10 card">
  <header className="card__thumb">
      <a href="#"><img src={c.image}/></a>
  </header>
  <date className="card__date">
      <span className="card__date__day">11</span>
      <br/>
      <span className="card__date__month">Jan</span>
  </date>
  <div className="card__body">
      <div className="card__category"><a href="#">pet</a></div>
      <h2 className="card__title"><a href="#">{c.name}</a></h2>
      <div className="card__subtitle"> {c.category
}</div>
      <p className="card__description flex gap-2 text-center">
        <p onClick={()=>handleAddtoCart(c._id)} className='hover:bg-red-400 hover:w-2/3 duration-500 bg-gradient-to-l from-gray-400 text-black text-semibold cursor-pointer p-2 w-1/3 rounded-full'>Add to cart</p>
        <p className='bg-gray-600 text-white text-semibold cursor-pointer  p-2 w-1/3 rounded-full'>View Details</p>
       
      </p>
  </div>

</article>)
 }
      
   


            </div>
          <div className='grid justify-items-center'>
          <Link to='/allproducts'><p className='border-0 w-28  text-black hover:bg-blue-400 bg-blue-300 btn'>Show all</p></Link>
          </div>
            
        </div>
    );
};

export default ExploreAllProduct;