import { motion } from "framer-motion";
import React from "react";
import { CiPlay1 } from "react-icons/ci";
import Nav from "../../components/Nav/Nav";
import images from "../../constants/images";
import { fadeIn, staggerContainer } from "../../untils.";
import "./Header.scss";
const Header = () => {
  return (
    <div id='home'>
      <Nav />
      <motion.header
        style={{ backgroundImage: `url(${images.headerbg})` }}
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
        <motion.div
          className='text-holder'
          variants={fadeIn("right", "tween", 0.5, 1)}
        >
          <div className='text'>
            <h1>Get your free 2 weeks trial right now</h1>
            <p>
              Celebrated delightful an especially increasing instrument am.
              Indulgence contrasted sufficient to unpleasant in in insensible
              favourable.{" "}
            </p>
            <div className='play-holder'>
              <div className='pay-btn-holder'>
                <div className='play-btn'>
                  <CiPlay1 />
                </div>
              </div>
              <p>Watch video</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className='img-holder'
          variants={fadeIn("left", "tween", 0.5, 1)}
        >
          <img src={images.headerImg} alt='headerimg' />
        </motion.div>
      </motion.header>
    </div>
  );
};

export default Header;
