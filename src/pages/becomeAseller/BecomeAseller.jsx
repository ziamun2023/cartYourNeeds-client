import React, { useContext, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import seller from '../../assets/seller.jpg'
import { Link, useNavigate } from 'react-router-dom';
// import becomeSellerPoster from '../../assets/Untitled (1587 × 2245px) (3000 × 2245px) (3000 × 5000px) (3000 × 4000px).png'
import { AuthContext } from '../../Provider/AuthContext';
import { toast } from 'react-hot-toast';
import { adminRequest } from '../../api/auth';

const BecomeAseller = () => {

  const {user}=useContext(AuthContext)
const navigate=useNavigate()
  const request=(e)=>{
  e.preventDefault()
  const form=e.target

const shopName=form.shopName.value
const request='New Request for become a seller'
const email=form.email.value
const updatedData = {
  email: user?.email,
  shopName:shopName,
  request:request
};
   
  
    // adminRequest(user.email).then(data=>{
    //   toast.success('Request sent to Admin,You will notify in the Account section , Thanks for joinign us. ')
     
    
    // })
    fetch(`http://localhost:5000/updatedoc`,{
      method: "PUT",
      headers: {'Content-Type':'application/json'},
      body : JSON.stringify(updatedData)
  })
  .then(res=>res.json())
  .then(data=>{
      if(data.modifiedCount>0){
          Swal.fire({
            title: 'success!',
            text: 'Successfully sent shop name',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          // navigate('/mytoys')
        
         }
      
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Error updating data:', error);
  });
    navigate('/Confirmation')
  
  }
    return (
        <div className=' grid lg: grid-cols-3 h-[949px]'>
            
            <div className='relative seller col-span-1 hidden lg:block md:block '>
                
             <img src={seller} alt="" />   
             <Slide className='absolute z-20 top-20'>
             <div><p className='text-7xl font-bold text-white mx-10 mt-20'>START YOUR BUSINESS </p></div>
                <div><p className='text-6xl font-bold text-white ms-10'>Become A seller </p></div>
             </Slide>
{/* <Slide><img className='w-[500px]' src={becomeSellerPoster} alt="" /></Slide> */}
            </div>
            <div className=' mx-auto col-span-2  '>
       

<Link to='/'>            <p className='text-center text-2xl  btn border-0 text-white mx-auto mt-5'>Home</p></Link>

        
                <p className='text-center text-6xl text-black mt-10'>Seller Information</p>
              


            <form onSubmit={request} className="z-10 card-body shadow-2xl rounded-xl   mt-5">
          
            {/* <div className="form-control col-span-2">
        
      
              <label htmlFor='image' className='block'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
          
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input value={user?.email} name='email' placeholder="enter your Name" className="bg-white py-5 px-2 rounded-lg" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Shop Name</span>
          </label>
          <input required type="text" name='shopName' placeholder="Enter Your shop name" className="bg-white py-5 px-2 rounded-lg" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input required  placeholder="Enter Your  Name"  className="bg-white py-5 px-2 rounded-lg" />
        </div>
     
    
     

    
        <div className="form-control mt-6 col-span-2">
          <input type='submit' value='Send Request to Admin'  className="btn"/>
        </div>
      </form>
    </div>
    

            
            
        </div>
    );
};

export default BecomeAseller;