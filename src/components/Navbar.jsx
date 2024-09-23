import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
 import { NavLink } from 'react-router-dom';
function Navbar(){
    const buttonClass = ({ isActive }) =>
        isActive
            ? 'bg-white  p-2 m-2  text-[#3572EF] font-medium cursor-pointer'
            : 'text-gray-700  bg-white p-2 m-2 hover:text-[#3572EF] font-medium cursor-pointer transition-all duration 300 ease-linear';
    const signButtonClass = ({ isActive }) =>
        isActive
            ? 'text-white  bg-[#3572EF] p-2 font-medium cursor-pointer border-2 border-[#3572EF] rounded m-2'
            : 'text-white  bg-[#3572EF] p-2 m-2 hover:text-[#3572EF] hover:bg-white font-medium border-2 border-[#3572EF] rounded cursor-pointer transition-all duration 300 ease-linear';
    const [nav,setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
    return(
        <>
        <div className="fixed top-0 left-0 w-screen flex justify-center" id="navbar">
            <div className="flex justify-between h-16 px-3 m-auto max-w-[1240px] items-center border-b-[#A7E6FF] border-b-2 bg-white w-full"> {/*temporarily removed  backdrop-blur-sm */}
                <div className="flex items-center">
                    <NavLink to={'/'} className="flex-shrink-0 text-2xl font-bold text-[#3572EF] ">
                        VIJAYANTA ALUMNI
                    </NavLink>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                <NavLink to='/' className={buttonClass}>
                        Home
                    </NavLink>
                    <NavLink to='/connect' className={buttonClass}>
                        Connect
                    </NavLink>
                    <NavLink to='/events' className={buttonClass}>
                        Events
                    </NavLink>
                    <NavLink to='/gallery' className={buttonClass}>
                        Gallery
                    </NavLink>
                    <NavLink to='/signup' className={signButtonClass}>
                        Signup
                    </NavLink>
                </div>
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
                </div>
                </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-2 border-r-gray-200 flex flex-col uppercase p-4 bg-white ease-in-out duration-500' : 'fixed left-[-100%] top-0 flex flex-col ease-in-out duration-500'}>
                    <NavLink to={'/'} className="flex-shrink-0 text-2xl font-bold text-[#3572EF] mb-8 ">
                        VIJAYANTA ALUMNI
                    </NavLink>
                    <NavLink to='/' className={buttonClass} onClick={handleNav}>
                        Home
                    </NavLink>
                    <NavLink to='/connect' className={buttonClass} onClick={handleNav}>
                        Connect
                    </NavLink>
                    <NavLink to='/events' className={buttonClass} onClick={handleNav}>
                        Events
                    </NavLink>
                    <NavLink to='/gallery' className={buttonClass} onClick={handleNav}>
                        Gallery
                    </NavLink>
                    <NavLink to='/signup' className={signButtonClass} onClick={handleNav}>
                        Signup
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;