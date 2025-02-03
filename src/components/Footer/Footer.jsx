import React from "react";
import "./Footer.css";
import logo from "../../Assets/Logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_logo_section">
          <img src={logo} alt="ShenCarCar Logo" className="footer-logo" />
          <p className="footer-text">
            Our vision is to provide convenience <br />
            and help increase your sales business.
          </p>
        </div>

        <div className="footer_about_community_socials">
          <div className="footer_section">
            <h4>About</h4>
            <ul>
              <li><button>How it works</button></li>
              <li><button>Featured</button></li>
              <li><button>Partnership</button></li>
              <li><button>Business Relation</button></li>
            </ul>
          </div>

          <div className="footer_section">
            <h4>Community</h4>
            <ul>
              <li><button>Events</button></li>
              <li><button>Blog</button></li>
              <li><button>Podcast</button></li>
              <li><button>Invite a friend</button></li>
            </ul>
          </div>

          <div className="footer_section">
            <h4>Socials</h4>
            <ul>
              <li><button>Discord</button></li>
              <li><button>Instagram</button></li>
              <li><button>Twitter</button></li>
              <li><button>Facebook</button></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>©2025 ShenCarCar. All rights reserved</p>
        <div className="footer_links">
          <button>Privacy & Policy</button>
          <button>Terms & Condition</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
