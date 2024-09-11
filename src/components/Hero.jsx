import React, { useState } from 'react';
import About from './About.jsx';

function Hero() {
    return (
        <>
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='flex flex-col justify-center'>
                <p className='text-center text-[#3ABEF9] font-bold text-xl md:text-4xl'>WELCOME TO</p>
                <p className='text-center text-[#3572EF] font-bold text-3xl md:text-6xl md:p-10'>Vijayanta Schools Alumni Association</p>
            </div>
        </div>
        </>
    );
}

export default Hero;