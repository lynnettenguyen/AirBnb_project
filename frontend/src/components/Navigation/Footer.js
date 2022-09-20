import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-inner">
        <div className="footer-left">© 2022 Wherebnb; for demonstration purposes only.</div>
        <div className="footer-right">
          <span className="social-link"><a href='https://lynnettenguyen.github.io' target='blank'><i className="fa-solid fa-globe"></i>&nbsp; Lynnette Nguyen</a></span>
          <span className="social-link"><a href='https://github.com/lynnettenguyen' target='blank'><i className="fa-brands fa-github"></i>&nbsp; Github</a></span>
          <span className="social-link"><a href='https://linkedin.com/in/lynnettenguyen' target='blank'><i className="fa-brands fa-linkedin"></i>&nbsp; LinkedIn</a></span>
        </div>
      </div>
    </div>
  )
}

export default Footer
