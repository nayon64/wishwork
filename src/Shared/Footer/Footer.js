import React from 'react';
import "./Footer.css"

const Footer = () => {

	const date = new Date()
	const year = date.getFullYear()

	return (
    <div className="footer-section">
      <div>
				<h2>All Copy Right Reserve {year}</h2>
      </div>
    </div>
  );
};

export default Footer;