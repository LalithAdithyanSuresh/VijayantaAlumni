import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import PageChoose from './PageChoose.jsx';

function Navbar(){
    const [page,setPage] = useState(0);

    const [nav,setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
    return(
        <>
        <div className="fixed top-0 left-0 w-screen flex justify-center" id="navbar">
            <div className="flex justify-between h-16 px-3 m-auto max-w-[1240px] items-center border-b-[#A7E6FF] border-b-2 backdrop-blur-sm w-full">
                <div className="flex items-center">
                    <a href="#navbar" className="flex-shrink-0 text-2xl font-bold text-[#3572EF] ">
                        VIJAYANTA ALUMNI
                    </a>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <a onClick={() =>setPage(0)} className="text-gray-700  bg-white p-4 hover:text-[#3572EF]">Home</a>
                    <a onClick={() =>setPage(1)} className="text-gray-700  bg-white p-4 hover:text-[#3572EF]">Events</a>
                    <a onClick={() =>setPage(2)} className="text-gray-700  bg-white p-4 hover:text-[#3572EF]">Gallery</a>
                    <a onClick={() =>setPage(3)} className="text-gray-700  bg-white p-4 hover:text-[#3572EF]">Sign Up</a>
                </div>
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
                </div>
            </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-2 border-r-gray-200 flex flex-col uppercase p-4 bg-white ease-in-out duration-500' : 'fixed left-[-100%] top-0 flex flex-col'}>
                    <a href="#navbar" className="flex-shrink-0 text-2xl font-bold text-[#3572EF] mb-8 ">
                        VIJAYANTA ALUMNI
                    </a>
                    <a href="#" className="text-gray-700  bg-white p-4 hover:text-[#3572EF] border-b">Home</a>
                    <a href="#" className="text-gray-700  bg-white p-4 hover:text-[#3572EF] border-b">Events</a>
                    <a href="#" className="text-gray-700  bg-white p-4 hover:text-[#3572EF] border-b">Gallery</a>
                    <a href="#" className="text-gray-700  bg-white p-4 hover:text-[#3572EF]">Sign Up</a>
                </div>
        </div>
        <PageChoose x={page}></PageChoose>
        </>
    );
}

export default Navbar;