import { FaTwitter, FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

import "./Footer.css";
import { FooterStrip } from "../FooterStrip/FooterStrip";

export const Footer = () => {
  return (
    <>
      <FooterStrip />
      <section className="section-footer">
        <div className="footer-subscribe-container">
          <h4 className="footer-subscribe-title">get involved</h4>
          <div className="footer-input-container">
            <input
              className="footer-subscribe-input"
              placeholder="email@address"
              type="email"
            />
            <button className="footer-button">subscribe</button>
          </div>
        </div>
        <div className="footer-contacts-container">
          <div className="footer-social-links">
            <a className="footer-social-link">
              <FaTwitter />
            </a>
            <a className="footer-social-link">
              <FaInstagram />
            </a>
            <a className="footer-social-link">
              <FaFacebookF />
            </a>
            <a className="footer-social-link">
              <FaTiktok />
            </a>
          </div>
          <div className="footer-empty"></div>
          <div className="footer-rights">
            <p>
              All rights reserved.
              <span className="footer-rights-text"> © retro reels 2024</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
