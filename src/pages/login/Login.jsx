import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/userlogin.jpg'
import { Slide } from 'react-awesome-reveal';
const Login = () => {
    return (
        <div className=' grid lg: grid-cols-3 h-[949px]'>
            
        <div className='relative seller col-span-1 hidden lg:block md:block '>
            
         <img src={login} alt="" />   
         <Slide className='absolute z-20 top-20'>
         <div><p className='text-7xl font-bold text-white mx-10 mt-44'>Lets shopping </p></div>
            <div><p className='text-6xl font-bold text-white  ms-10'>GIft yourself a nice product </p></div>
         </Slide>

        </div>
        <div className=' mx-auto col-span-2  '>
   
<Link to='/'>            <p className='text-center text-2xl  btn border-0 text-white mx-auto mt-5'>Home</p></Link>
            <p className='text-center text-6xl text-black mt-10'>User Information</p>
       

        <form className="z-10 card-body shadow-2xl rounded-xl   mt-5">
      

    <div className="form-control">
      <label className="label">
        <span className="label-text text-black"> Name</span>
      </label>
      <input type="text" placeholder="enter your Name" className="bg-white py-5 px-2 rounded-lg" />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text text-black">Email</span>
      </label>
      <input type="email" placeholder="Enter Your  email" className="bg-white py-5 px-2 rounded-lg" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-black">password</span>
      </label>
      <input type="password" placeholder="Enter a password" className="bg-white py-5 px-2 rounded-lg" />
    </div>

 


    <div className="form-control mt-6 col-span-2">
      <button className="btn">Log in</button>
    </div>
  </form>
   
 <div className='flex mt-5'> <p className=' text-gray-800'>no account yet? </p><p className='font-bold ms-3 hover:bg-blue-200 rounded-xl px-2 duration-500 text-black'><Link to='/register'>Register</Link></p></div>
</div>


        
        
    </div>
    );
};

export default Login;