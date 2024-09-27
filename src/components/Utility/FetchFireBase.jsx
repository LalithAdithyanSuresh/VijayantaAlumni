import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyATc6NF2mthQc1trGy7Ue1dNEu6hdv22eE",
    authDomain: "vijayantaalumni-6dec9.firebaseapp.com",
    projectId: "vijayantaalumni-6dec9",
    storageBucket: "vijayantaalumni-6dec9.appspot.com",
    messagingSenderId: "957163905290",
    appId: "1:957163905290:web:49a627f6914be5e5fa5af3",
    measurementId: "G-0V9996D7TY"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);


export {db , storage};
