import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"

function Header() {
 return (
  <header>
   <div className='dropdown-customsuit'>
    <button>Custom Suit</button>
    <div className='dropdown-content'>
     
    </div>
   </div>
   <div className='logo-img'>
    <Link to="/">
     <img src="logo-no-background.svg" alt="Website Logo"/>
    </Link>
   </div>
   <div className='user-actions'>
    <div className='cart'>
     <i className="fa-solid fa-bag-shopping"></i>
    </div>
      <div className="dropdown user-dropdown">
        <button className="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="fa-regular fa-user"></i>
        </button>
        <ul className="dropdown-menu user-dropdownmenu">
          <li><Link className='btn btn-login' to="/login">Login</Link></li>
          <li><Link className='btn btn-reg' to="/register">Register</Link></li>
          <li><Link className='btn btn-signout' to="/signout">Sign Out</Link></li>
        </ul>
      </div>
   </div>
  </header>
 );
};

export default Header;

