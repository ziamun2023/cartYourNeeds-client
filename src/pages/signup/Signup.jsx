import React, { useContext } from 'react';
import { Slide } from 'react-awesome-reveal';
import { Link, useNavigate } from 'react-router-dom';
import {AiTwotoneHome} from "react-icons/ai"
import signup from '../../assets/signup.jpg'
import { AuthContext } from '../../Provider/AuthContext';
import { SaveUserFromSite, UserPanel } from '../../api/auth';
import {FcGoogle} from "react-icons/Fc"

import { toast } from 'react-hot-toast';
const Signup = () => {



  const navigate=useNavigate()

  const { user,
      loading,
      setLoading,
      createUser,
      signIn,
      signInWithGoogle,
      resetPassword,
      logOut,
      updateUserProfile,}=useContext(AuthContext)
      const from =location.state?.from?.pathname || '/'

     
          // const handleGoogleSignIn=()=>{
          //     signInWithGoogle()
          //     .then(result=>{
          //         console.log(result.user)
          //         toast.success('logged in successfully !')
          //         navigate(from , {replace: true})
          //     })
          //     .catch(err=>{
          //         console.log(err.message)
          //         toast.error(err.message)
          //         setLoading(false)
          //     })
  
  
  
          // }

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
                        .then(() => {
                            navigate(from, { replace: true });
                        })
                })
        }
          const handleSUbmit=(event)=>{
            event.preventDefault()
            const name =event.target.name.value
            const email=event.target.email.value
            const password=event.target.password.value
        

            // image upload 
            const image=event.target.image.files[0]
            const formdata= new FormData() //this is like a package and it is must to send to imgbb api
            formdata.append('image', image)
            const url=`https://api.imgbb.com/1/upload?key=${
                import.meta.env.VITE_IMGBB_KEY
            }`
            console.log(url)

            fetch(url,{
                method :'POST',
                body: formdata,
            }).then(res=>res.json())
            .then(imageData=>{
                const imageUrl=imageData.data.display_url
                createUser(email,password)
                .then(result=>{
                    console.log(result.user)
                    updateUserProfile(name,imageUrl)
                    .then(()=>{
                      SaveUserFromSite(result.user)
             console.log(result.user.email)
                        toast.success('logged in successfully !') 
                        UserPanel(result.user.email)
                     
                     
                        navigate(from , {replace: true})
                    })
                    .catch(err=>{
                        setLoading(false)
                        console.log(err.message)
                        toast.error(err.message)

                       
                    })
                 
                })
            })
          }

   





    return (
        <div className=' grid lg: grid-cols-3 h-[949px] '>
            
        <div className='relative seller col-span-1 hidden lg:block md:block '>
            
         <img src={signup} alt="" />   
         <Slide className='absolute z-20 top-20'>
         <div><p className='text-7xl font-bold text-white mx-10 mt-44'>Lets Create Happiness </p></div>
            <div><p className='text-6xl font-bold text-white  ms-10'>Join a family Feel like home </p></div>
         </Slide>

        </div>
        <div className=' mx-auto col-span-2 mt-14 '>
        <div className='bg-white py-3  rounded-xl px-6 justify-between flex'>
         
         <Link to='/'>            <p className='text-center text-2xl  btn border-0 text-white mx-auto '><AiTwotoneHome/></p></Link>
         <p className='text-black text-4xl my-auto font-semibold'>Sign Up</p>
         </div>
            <p className='text-center text-6xl text-black mt-10'>User Information</p>
       
<>
<form
        onSubmit={handleSUbmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
   
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button

              type='submit'
              className='bg-[rgb(136,108,94)] w-full rounded-md py-3 text-white'
            >
           {
                loading? "loading":"  Continue"
            }
            </button>
          </div>
        </form>
        
                    
        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
</>
     
 <div className='flex mt-5'> <p className=' text-gray-800'>Already have an account? </p><p className='font-bold ms-3 hover:bg-blue-200 rounded-xl px-2 duration-500 text-black'><Link to='/login'>Login</Link></p></div>
</div>


        
        
    </div>
    );
};

export default Signup;