import React from "react";
import './footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
        <div className="footer-logo">
          <Link to="/">
              <img src="/image/eatlyLogo.svg" alt="eatly logo"/>
          </Link>
            <Link to="/" className="home-link">eatly</Link>
        </div>
        <div className="menu-list">
          <Link to="/blog" className="menu-list-link">Blog</Link>
          <Link to="/Pricing" className="menu-list-link">Pricing</Link>
          <Link to="/aboutUs" className="menu-list-link">About Us</Link>
          <Link to="/contact" className="menu-list-link">Contact</Link>
        </div>
      </div>
      <hr/>
      <div className="copyright">
        <p>© 2023 EATLY All Rights Reserved.</p>
        <img src="/image/socialLogos.svg" alt="social logo"/>
      </div>
    </footer>
  )
}

export default Footer;