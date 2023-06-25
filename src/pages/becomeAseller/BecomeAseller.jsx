import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import seller from '../../assets/seller.jpg'
import { Link } from 'react-router-dom';
import becomeSellerPoster from '../../assets/Untitled (1587 × 2245px) (3000 × 2245px) (3000 × 5000px) (3000 × 4000px).png'
const BecomeAseller = () => {
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
           

            <form className="z-10 card-body shadow-2xl rounded-xl   mt-5">
          
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
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" placeholder="enter your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Shop Name</span>
          </label>
          <input type="text" placeholder="Enter Your shop name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter Your  email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">password</span>
          </label>
          <input type="password" placeholder="Enter a password" className="input input-bordered" />
        </div>
    
     

    
        <div className="form-control mt-6 col-span-2">
          <button className="btn">Sign up</button>
        </div>
      </form>
    </div>
    

            
            
        </div>
    );
};

export default BecomeAseller;