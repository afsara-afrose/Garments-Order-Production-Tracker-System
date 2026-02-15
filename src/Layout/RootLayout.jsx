import React from 'react';
import NavBar from '../Pages/Shared/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div  className="min-h-screen flex flex-col ">
           <NavBar ></NavBar>
           <div className="flex-1 bg-blue-200">
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default RootLayout;