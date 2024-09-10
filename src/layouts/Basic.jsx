import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Basic() {
    return ( 
        <>
        <Navbar></Navbar>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
        </>
     );
}

export default Basic;