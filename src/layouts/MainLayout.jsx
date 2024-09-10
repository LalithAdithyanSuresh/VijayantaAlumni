import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../../../../Temporary website/src/components/Navbar';


const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default MainLayout