import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom';

function Basic() {
    return ( 
        <>
            <Navbar />
            <Navbar />
            <Navbar />
            <Navbar />
            <Outlet />
        </>
     );
}

export default Basic;