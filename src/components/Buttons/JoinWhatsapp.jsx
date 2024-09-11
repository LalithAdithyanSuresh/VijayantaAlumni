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
        ? "absolute w-64 h-32 bg-[#54c451] top-[-5rem] left-[-13rem] z-0 border-[6px] border-white shadow-md ease-in-out duration-500 rounded rounded-[0.75rem]"
        : "absolute w-0 h-0 bg-[#54c451] top-[3rem] left-[3rem] z-0 border-[6px] border-white shadow-md ease-in-out duration-500 rounded rounded-[0.75rem]"
    

    return ( 
        <>
        <div className={OverallStyle} onClick={toggle}> 
            <div  className='relative z-10'>
                <img src={WA_Logo} alt="WhatsApp Logo top" />
            </div>
            <div className= {BoxStyle}>
                <div className="link"></div>
                <div className="link"></div>
            </div>
        </div>
        </>
     );
}

export default JoinWhatsapp;

