import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs';

import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">
        <a href="#top" className="footer__logo">
          Nkwi Cyril
        </a>

        <ul className="permalinks">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__media">
          <a href="https://linkedin.com" target="blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com" target="blank">
            <FaGithub />
          </a>
          <a href="https://facebook.com" target="blank">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="blank">
            <BsTwitter />
          </a>
        </div>

        <div className="copyRight">
            <h3>@copyright NCA 2023</h3>
        </div>
      </div>
    );
}

export default Footer
