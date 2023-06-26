import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/userlogin.jpg'
import { Slide } from 'react-awesome-reveal';
import { AiTwotoneHome } from "react-icons/ai";
import { AuthContext } from '../../Provider/AuthContext';
import { FcGoogle } from 'react-icons/Fc';
const Login = () => {

  const { signIn ,signInWithGoogle} = useContext(AuthContext);

  const navigate=useNavigate()
  const location=useLocation()

  const from =location.state?.from?.pathname || '/' ;



  const handleGoogleSignIn = () => {
    signInWithGoogle()
        .then(result => {
            const userLogin = result.user;
            console.log(userLogin);
            toast.success('logged in successfully !')
            const saveUser = { name: userLogin.displayName, email: userLogin.email }
       
            fetch(`http://localhost:5000/users/${userLogin.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then((data) => {
                    navigate(from, { replace: true });
                  
                })
        })
}


  

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        
            navigate(from,{replace: true})
        })
}
    return (
        <div className=' grid lg: grid-cols-3 h-[949px]'>
            
        <div className='relative seller col-span-1 hidden lg:block md:block '>
            
         <img src={login} alt="" />   
         <Slide className='absolute z-20 top-20'>
         <div><p className='text-7xl font-bold text-white mx-10 mt-44'>Lets shopping </p></div>
            <div><p className='text-6xl font-bold text-white  ms-10'>GIft yourself a nice product </p></div>
         </Slide>

        </div>
        <div className='  mx-auto col-span-2 mt-10'>
            <div className='bg-white py-3  rounded-xl px-6 justify-between flex'>
         
            <Link to='/'>            <p className='text-center text-2xl  btn border-0 text-white mx-auto '><AiTwotoneHome/></p></Link>
            <p className='text-black text-4xl my-auto font-semibold'>Log In</p>
            </div>
       
   

            <p className='text-center text-6xl text-black mt-10'>User Information</p>
          
       
            <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        
                            {/* TODO: make button disabled for captcha */}
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                                       
        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
   
 <div className='flex mt-5'> <p className=' text-gray-800'>no account yet? </p><p className='font-bold ms-3 hover:bg-blue-200 rounded-xl px-2 duration-500 text-black'><Link to='/register'>Register</Link></p></div>
</div>


        
        
    </div>
    );
};

export default Login;