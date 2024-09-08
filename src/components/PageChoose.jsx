import React, { useState } from 'react';
import Hero from './Hero.jsx';

function PageChoose({x}) {
    if(x==0){
        return <Hero />
    }
    else{
        return(
            <p>NO COMPONENTS YET</p>
        )
    }
}

export default PageChoose;