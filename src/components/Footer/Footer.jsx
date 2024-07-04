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
            <a href="#" className="footer-social-link">
              <FaTwitter />
            </a>
            <a href="#" className="footer-social-link">
              <FaInstagram />
            </a>
            <a href="#" className="footer-social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="footer-social-link">
              <FaTiktok />
            </a>
          </div>
          <div className="footer-empty"></div>
          <div className="footer-rights">
            <p className="footer-rights-text">
              &quot;In the reels of time, we delve so deep, <br />
              Where stories old and legends sleep.
              <br />
              From classic films to books well-read,
              <br />A treasure trove for heart and head.&quot;
            </p>
            <p className="footer-rights-text">created with love &#10084;.</p>
            <p className="footer-rights-text">
              all rights reserved-
              <span className="footer-rights-uppercase">
                retro reels 2024 &copy;
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
