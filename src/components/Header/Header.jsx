import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Logo from "@images/logo-white.svg";
import LogoDarkHeader from "@images/logo-dark.svg";
import "./_header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const headerClasses = scrolled ? 'header-area scrolled' : 'header-area';

  return (
    <header className={headerClasses}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img src={scrolled ? LogoDarkHeader : Logo} className="light-logo" alt="Beapp" />
                <img
                  src={LogoDarkHeader}
                  className="dark-logo"
                  alt="Beapp"
                />
              </Link>
              <ul className="nav">
                <li>
                  <Link style={{ color: scrolled ? '#3B566E' : 'white' }} to='/'>HOME</Link>
                </li>
                <li>
                  <Link style={{ color: scrolled ? '#3B566E' : 'white' }} to="/products">PRODUCTS</Link>
                </li>
                <li>
                  <Link style={{ color: scrolled ? '#3B566E' : 'white' }} to='/aboutus'>ABOUT US</Link>
                </li>
                <li>
                  <Link style={{ color: scrolled ? '#3B566E' : 'white' }} to="/services">SERVICES</Link>
                </li>
                <li>
                  <a style={{ color: scrolled ? '#3B566E' : 'white' }} href="blog.html">BLOG</a>
                </li>
                <li>
                  <Link style={{ border: scrolled ? '1px solid #4886FF' : '1px solid white', color: scrolled ? '#4886FF' : 'white' }} to="/contact" className="btn-nav-line">
                    CONTACT
                  </Link>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
