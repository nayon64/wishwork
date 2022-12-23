import  axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {

  const [ip, setIP] = useState("");

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, []);

	const menus = [
    { path: "/", name: "Home" },
    { path: "/", name: "About" },
    { path: "/", name: "Contact" },
  ];

	return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h4>
          DREAM <span>HOUSE</span>
        </h4>
      </Link>
      <div className="client-IP">
        <p>
          Client IP: <span>{ip}</span>
        </p>
      </div>

      <div className="nav-links">
        {menus.map((menu, i) => (
          <Link key={i} to={menu.path}>
            <li>{menu.name}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;