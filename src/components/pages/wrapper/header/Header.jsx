import React from "react";
import {Link} from "react-router-dom";
import "./header.css";


const navMenu = [
  {title: 'Menu', link: "/menu"},
  {title: 'Blog', link: "/blog"},
  {title: 'Pricing', link: "/pricing"},
  {title: 'Contact', link: "/contact"}
]

const Header = () => {

  return (
    <header className="header">
      <div className="menu">
        <div className="logo">
          <Link to="/">
            <img src="/image/eatlyLogo.svg" alt="eatly logo"/>
          </Link>
          <span className="logo-text">
           <Link to="/" className="logo-link">eatly</Link>
          </span>
        </div>
        <div className="nav">
          {navMenu.map((v, i) => {
            return (
              <Link to={v.link} className="nav-link" key={i}>{v.title}</Link>
            )
          })}
        </div>
        <div className="buttons">
          <button className="login">
            <Link to="/signIn" className="button-link">Login</Link>
          </button>
          <button className="sign">
            <Link to="/signUp" className="button-link">Sign Up</Link>
          </button>
        </div>
      </div>
      <hr/>
    </header>
  );
};

export default Header;
