import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaBehance,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { staggerContainer } from "../../untils.";
import { fadeIn } from "./../../untils.";
import "./Footer.scss";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isFormSubmint, setIsFormSubmint] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setIsFormSubmint(true);
  };

  const [date, setDate] = useState(null);
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);
  return (
    <motion.footer
      className='footer'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false }}
    >
      <motion.div
        className='footer-item'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
        <motion.div className='item' variants={fadeIn("up", "tween", 0.5, 1)}>
          <h4>About aveit</h4>
          <p>
            Required honoured trifling eat pleasure man relation. Assurance yet
            bed was improving furniture man. Distrusts delighted Excuse few the
            remain highly feebly add people manner say. It high at my mind by
            roof.{" "}
          </p>
          <nav className='icon'>
            <ul>
              <li>
                <Link to='/'>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <FaBehance />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
        <motion.div
          className='links'
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false }}
        >
          <motion.div className='item' variants={fadeIn("up", "tween", 0.6, 1)}>
            <h4>Services</h4>

            <nav>
              <ul>
                {[
                  "SEO Marketing",
                  "Pay Per Click",
                  "SEO Services",
                  "Social Media",
                  "SEO Audit",
                ].map((item) => (
                  <li key={Math.random()}>
                    <Link to={`#${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
          <motion.div className='item' variants={fadeIn("up", "tween", 0.7, 1)}>
            <h4>Company</h4>
            <nav>
              <ul>
                {[
                  "About Us",
                  "Contact Us",
                  "Career",
                  "Terms",
                  "Team Members",
                ].map((item) => (
                  <li key={Math.random()}>
                    <Link to={`#${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
          <motion.div className='item' variants={fadeIn("up", "tween", 0.5, 1)}>
            <h4>Company</h4>

            <div className='address'>
              <ul>
                <li>
                  <h5>ADDRESS</h5>
                  <p>California, TX 70240</p>
                </li>
                <li>
                  {" "}
                  <h5>EMAIL</h5>
                  <p>support@validtheme.com</p>
                </li>
                <li>
                  {" "}
                  <h5>CONTACT</h5>
                  <p>+44-20-7328-4499</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className='copyright'
        variants={fadeIn("up", "tween", 0.6, 1)}
      >
        <p>
          <span>
            {" "}
            Copyright © {date} All rights reserved | This template is made with{" "}
          </span>
          <span style={{ color: "red" }}>♥</span> <span>by</span>{" "}
          <a
            href='https://nemanjadjordjevicportfolio.netlify.app/'
            rel='noreferrer'
            target='_blank'
          >
            Nemanja Djordjevic
          </a>
        </p>
        <div className='logo'>
          <img src={images.logo} alt='logo' />
        </div>
        <div className='form'>
          {!isFormSubmint ? (
            <form onSubmit={handleSubmit}>
              <input
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='Email*'
                required
              />
              <button>
                <FiSend />
              </button>
            </form>
          ) : (
            <p>Thank you for subscibe</p>
          )}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
