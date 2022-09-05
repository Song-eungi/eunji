import React from 'react';
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import LogoImg from "../../assets/all about health1.jpg";

function NavBar() {

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div>
          <Link to='#' className='menu-bars'>
          </Link>
          </div>
          <div className ='logo'>
          <Link to='/' className='logo'>
            <img src={LogoImg} width='350px' />
          </Link>
          </div>
          <Link to='login' className='menu-bars-login'>
            <FaIcons.FaSignInAlt color='black'/>
          </Link>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default NavBar