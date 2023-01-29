import { motion } from "framer-motion";
import React from "react";
import { FaChess } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import {
  SiAmazonpay,
  SiAngular,
  SiBlackberry,
  SiCodepen,
  SiDigitalocean,
  SiDropbox,
} from "react-icons/si";
import { SlSocialDropbox, SlSocialReddit } from "react-icons/sl";
import images from "../../constants/images";
import { fadeIn, staggerContainer } from "../../untils.";
import "./HowWeWork.scss";
const HowWeWork = () => {
  return (
    <motion.div
      className='app__work-info'
      id='how we work'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false }}
    >
      <motion.div
        className='app__work-heading'
        variants={fadeIn("left", "tween", 0.5, 1)}
      >
        <small>How we work</small>
        <h2>Future is brighter when you're strategically more prepared</h2>
      </motion.div>
      <motion.div
        className='app__work-items'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
        <motion.div
          className='app__work-item'
          variants={fadeIn("up", "tween", 0.5, 1)}
        >
          <div className='app_icon'>
            <div>
              <IoAnalyticsOutline />
            </div>
            <span>01</span>
          </div>
          <h4>Case Analysis</h4>
          <p>
            Such on help ye some door if in. Laughter proposal laughing any son
            law consider. Needed except up piqued an.{" "}
          </p>
        </motion.div>
        <motion.div
          className='app__work-item'
          variants={fadeIn("up", "tween", 0.6, 1)}
        >
          <div className='app_icon'>
            <div>
              <FaChess />
            </div>
            <span>02</span>
          </div>
          <h4>Strategic Advice</h4>
          <p>
            Such on help ye some door if in. Laughter proposal laughing any son
            law consider. Needed except up piqued an.{" "}
          </p>
        </motion.div>
        <motion.div
          className='app__work-item'
          variants={fadeIn("up", "tween", 0.7, 1)}
        >
          <div className='app_icon'>
            <div>
              <SlSocialDropbox />
            </div>
            <span>03</span>
          </div>
          <h4>Insight Implementation</h4>
          <p>
            Such on help ye some door if in. Laughter proposal laughing any son
            law consider. Needed except up piqued an.{" "}
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className='app__platforms'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
        <motion.div
          className='shape'
          variants={fadeIn("left", "tween", 0.5, 1)}
        >
          <img src={images.shape2} alt='bg-shape' />
        </motion.div>
        <motion.div
          className='app__platform-text'
          variants={fadeIn("up", "tween", 0.7, 1)}
        >
          <small>Join over 40,000+ businesses worldwide.</small>
          <h2>We're Working Best With Your Favorite Platforms</h2>
          <a href='#top'>View All Brands</a>
        </motion.div>
        <motion.div
          className='app__platform-items'
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false }}
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.8, 1)}
            className='app__platforms-items-one'
          >
            <div className='app__platform-item'>
              <SiAngular color='#dd1b16' />
            </div>
            <div className='app__platform-item'>
              <SiBlackberry color='#4D0026' />
            </div>
            <div className='app__platform-item'>
              <SiAmazonpay color='#333e47' />
            </div>
            <div className='app__platform-item'>
              <SiCodepen color='#3B5998' />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.9, 1)}
            className='app__platforms-items-two'
          >
            <div className='app__platform-item'>
              <SiDigitalocean color='#0080FF' />
            </div>
            <div className='app__platform-item'>
              <SlSocialReddit color='#FF4500' />
            </div>
            <div className='app__platform-item'>
              <SiDropbox color='#3d9ae8' />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HowWeWork;
