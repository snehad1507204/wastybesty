import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand */}
        <div className="footer-column">
          <h3>Wasty Besty</h3>
          <p>
            Transforming everyday waste into creative, sustainable products while promoting greenery and eco-friendly living.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/aboutpage">About</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
          <a href="/greenwasty">GreenWasty</a>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: info@wastybesty.com</p>
          <p>Phone: +91 1234 567 890</p>
          <p>Address: Mumbai, India</p>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Wasty Besty. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
