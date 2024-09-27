import React, { useState } from 'react';
import WA_Logo from "@assets/Logo/WhatsApp.svg";
function JoinWhatsapp({link1,link2}) {
    const [open,setState] = useState(false);
    const toggle = () => {
        setState(!open);
    }
    const OverallStyle = open
        ? "PulseSize fixed bottom-2 right-2  p-2 h-24 md:h-28 aspect-square ease-in-out duration-500"
        : "PulseSize fixed bottom-2 right-2  p-2 h-24 md:h-28 aspect-square animate-PulseSize ease-in-out duration-500"
    const BoxStyle = open
        ? "flex flex-col absolute w-64 md:w-80 h-32 md:h-40 bg-[#54c451] top-[-5rem] md:top-[-6rem] left-[-13rem] md:left-[-16rem] z-0 border-[6px] border-white shadow-md ease-in-out duration-500 rounded rounded-[0.75rem]"
        : "flex flex-col absolute w-0 h-0 bg-[#54c451] top-[3rem] left-[3rem] z-0 border-[6px] border-white shadow-md ease-in-out duration-500 rounded rounded-[0.75rem]"
    

    return ( 
        <>
        <div className={OverallStyle} onClick={toggle}> 
            <div  className='relative z-10'>
                <img src={WA_Logo} alt="WhatsApp Logo top" />
            </div>
            <div className= {BoxStyle}>
                <div className="w-5/6 h-1/2 m-2 rounded-[0.75rem] border-2 shadow-lg items-center flex pl-2 text-white font-bold text-xl">LINK 1</div>
                <div className="w-5/6 h-1/2 m-2 mt-0 rounded-[0.75rem] bg-red-500 items-center flex pl-2 ">LINK 2</div>
            </div>
        </div>
        </>
     );
}

export default JoinWhatsapp;

