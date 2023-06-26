import React from 'react';
import confirm from '../../assets/confirmtn.png'
import { Link } from 'react-router-dom';
const Confirmation = () => {
    return (
        <div className='relative'>

            <img src={confirm} alt="" />
            <Link to='/'><button className='bg-blue-300 py-4 px-5 text-black font-bold text-3xl hover:bg-blue-500 duration-500 rounded-xl absolute top-32 left-20'>Go back Home</button></Link>
        </div>
    );
};

export default Confirmation;