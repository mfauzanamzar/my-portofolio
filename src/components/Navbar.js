import React from "react";
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/portofolio" activeClassName="active">Portofolio</NavLink>
        </li>
        <li className="navbar-item">
        <NavLink to="/blogs" activeClassName="active">Blogs</NavLink>
        </li>
      </ul>
    </div>
    
  );
};

export default Navbar;
