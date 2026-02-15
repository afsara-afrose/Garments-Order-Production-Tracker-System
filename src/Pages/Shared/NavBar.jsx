import React from 'react';
import logo from '../../assets/LOGO.png'
import { Link, NavLink } from 'react-router';
import { IoMdContact } from 'react-icons/io';

const NavBar = () => {  
   
    
    const links = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600  text-lg underline font-semibold"
            : "text-gray-700"
        }
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/all-product"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 text-lg underline font-semibold"
            : "text-gray-700"
        }
      >
        All-Product
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 text-lg underline font-semibold"
            : "text-gray-700 "
        }
      >
        About Us
      </NavLink>
    </li>
  </>
);

    return (
        <div className="navbar bg-gray-300 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link><img src={logo} alt=""  className='w-24 h-24'/></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end items-center gap-3">

  <IoMdContact className="w-9 h-9 text-gray-600 hover:text-blue-600 transition duration-300" />

  <Link
    to="/login"
    className="px-5 py-2 rounded-lg font-medium border border-blue-600 text-blue-600 
               hover:bg-blue-600 hover:text-white transition duration-300 shadow-sm"
  >
    Login
  </Link>

  <Link
    to="/register"
    className="px-5 py-2 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-indigo-600 
               text-white hover:scale-105 transition duration-300 shadow-md"
  >
    Register
  </Link>

</div>

</div>
    );
};

export default NavBar;