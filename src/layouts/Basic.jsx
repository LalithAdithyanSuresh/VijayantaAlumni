import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom';
import JoinWhatsapp from '../components/Buttons/JoinWhatsapp.jsx';

function Basic() {
    return ( 
        <>
            <Navbar />
            <Outlet />
            <JoinWhatsapp link="youy"/>
        </>
     );
}

export default Basic;