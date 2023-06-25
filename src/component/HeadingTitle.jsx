import React from 'react';

const HeadingTitle = ({heading,subtitle}) => {
    return (
        <div className='text-center my-10'>
            <p className='text-5xl text-black font-bold'>{heading}</p>
            <p className='text-black text-2xl'>{subtitle}</p>
        </div>
    );
};

export default HeadingTitle;