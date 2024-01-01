import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import anime from 'animejs/lib/anime.es.js'; 
import { socialLinks } from "../constants";

const Footer = () => {
  // Animation effect using animejs
  useEffect(() => {
    anime({
      targets: '.link-wrapper a, .copyright',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
    });
  }, []);

  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p className="copyright">
          © 2023{" "}
          <strong className="blue-gradient_text">Le Vinh Khang</strong>. All
          rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center link-wrapper">
          {socialLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <Link to={link.link} rel="noopener noreferrer">
                {link.name}
              </Link>
              {index < socialLinks.length - 1 && <span> • </span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
