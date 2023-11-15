import React from "react";
import './banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-rectangle">
        <div className='banner-get-percent'>
          <div className="get-percent">GET 50%</div>
          <div className="banner-input-items">
            <div>
              <input type="text" placeholder="Enter Your Email Address" className="banner-input"/>
            </div>
            <div>
              <input type="button" className="banner-input-button" value="subscribe"/>
            </div>
          </div>
        </div>
        <div className="banner-img">
          <img src="/image/menu/foodImg.svg" alt="chicken hell"/>
        </div>
      </div>
    </section>
  )
}

export default Banner