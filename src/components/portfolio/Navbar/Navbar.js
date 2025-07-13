import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.scrollY > 50);
    });
  }, []);
  
  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="logo" onClick={() => scroll.scrollToTop()}>
        MyPortfolio
      </div>
      <ul className="nav-links">
        {["home","skills","projects","experience","education"].map(section => (
          <li key={section}>
            <Link
              to={section} smooth={true} duration={500}
              activeClass="active"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
