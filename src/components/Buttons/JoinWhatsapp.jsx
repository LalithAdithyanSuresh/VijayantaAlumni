import React, { useState } from 'react';
import WA_Logo from "@/assets/Logo/WA_Logo.svg";
// COLOR : #43b740   ( Whatsapp Green )
function JoinWhatsapp({link}) {
    return ( 
        <>
        <div className='fixed bottom-2 right-2 w-4 h-4 p-2'>
            <WA_Logo></WA_Logo>
        </div>
        </>
     );
}

export default JoinWhatsapp;