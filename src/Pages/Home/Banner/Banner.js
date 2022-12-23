import React from 'react';
import "./Banner.css"

const Banner = () => {
	return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80")`,
      }}
    >
      <div className="hero">
        <div className="hero-describtion">
          <h5>BUY, RENT, OR SELL HOUSE</h5>
          <h1 className='bannerTitle'> Find Your Dream House!</h1>
          <p>
            Convallis parturient himenaeos nam luctus eu id. Vehicula justo per
            eget pede at laoreet auctor quam. Dolor tortor tristique mollis
            letius finibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;