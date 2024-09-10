import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import PageChoose from './PageChoose.jsx';
import NavLinks from './Buttons/NavLinks.jsx';
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
                    <NavLinks text={"Home"} code={0} c={page==0 ? 1 : 0} setPage={setPage}></NavLinks>
                    <NavLinks text={"Events"} code={1} c={page==1 ? 1 : 0} setPage={setPage}></NavLinks>
                    <NavLinks text={"Gallery"} code={2} c={page==2 ? 1 : 0} setPage={setPage}></NavLinks>

                    <a onClick={() =>setPage(3)} className={page==3 ? "text-white  bg-[#3572EF] p-2 font-medium cursor-pointer border-2 border-[#3572EF] rounded m-2" : "text-white  bg-[#3572EF] p-2 m-2 hover:text-[#3572EF] hover:bg-white font-medium border-2 border-[#3572EF] rounded  cursor-pointer"}>Sign Up</a>
                </div>
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
                </div>
            </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-2 border-r-gray-200 flex flex-col uppercase p-4 bg-white ease-in-out duration-500' : 'fixed left-[-100%] top-0 flex flex-col ease-in-out duration-500'}>
                    <a href="#navbar" className="flex-shrink-0 text-2xl font-bold text-[#3572EF] mb-8 ">
                        VIJAYANTA ALUMNI
                    </a>
                    <NavLinks text={"Home"} code={0} c={page==0 ? 1 : 0} setPage={setPage} handleNav={handleNav}></NavLinks>
                    <NavLinks text={"Events"} code={1} c={page==1 ? 1 : 0} setPage={setPage} handleNav={handleNav}></NavLinks>
                    <NavLinks text={"Gallery"} code={2} c={page==2 ? 1 : 0} setPage={setPage} handleNav={handleNav}></NavLinks>
                    <NavLinks text={"Sign Up"} code={3} c={page==3 ? 1 : 0} setPage={setPage} handleNav={handleNav}></NavLinks>
                </div>
        </div>
        <PageChoose x={page}></PageChoose>
        </>
    );
}

export default Navbar;