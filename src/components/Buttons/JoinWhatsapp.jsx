import React, { useState } from 'react';
import WA_Logo from "@assets/Logo/WhatsApp.svg";
function JoinWhatsapp({link}) {
    const WA_Color = "#43b740";
    const Size = 28;
    return ( 
        <>
        <div className={`PulseSize fixed bottom-2 right-2  p-2 h-${Size} aspect-square animate-PulseSize `}>

            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={WA_Logo} alt="WhatsApp Logo" />
            </a>
            <div className={`bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]   from-[${WA_Color}]  via-transparent to-transparent scale-150 absolute h-${Size} aspect-square top-0 left-0`}>
            </div>
        </div>
        </>
     );
}

export default JoinWhatsapp;