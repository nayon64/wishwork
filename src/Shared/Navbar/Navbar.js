import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {

	const menus = [
    { path: "/", name: "Home" },
    { path: "/", name: "About" },
    { path: "/", name: "Contact" },
  ];

	return (
    <div className="navbar">
      <Link className="logo">
        <h4>
          DREAM <span>HOUSE</span>
        </h4>
      </Link>

      <div className="nav-links">
        {menus.map((menu,i) => (
          <Link key={i} to={menu.path}>
            <li>{menu.name}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;