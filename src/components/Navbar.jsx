import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-left'>
        <li className='logo'>Todo App</li>
      </ul>
      <ul className='nav-right'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <a href='https://github.com' target='_blank' rel='noreferrer'>
            Github
          </a>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
