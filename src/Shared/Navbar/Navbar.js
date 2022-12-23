import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
	return (
    <div className="navbar">
      <h4 className="logo">
        DREAM <span>HOUSE</span>
      </h4>
      <ul className="nav-links">
        <Link>
          <li>Home</li>
        </Link>
        <Link>
          <li>About</li>
        </Link>
        <Link>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;