import React, { useState } from 'react';
import Hero from './Hero.jsx';
import SignUp from './SignUp.jsx';

function PageChoose({x}) {
    if(x==0){
        return <Hero />
    }else if(x==3){
        return <SignUp />
    }
    else{
        return(
            <p>NO COMPONENTS YET</p>
        )
    }
}

export default PageChoose;