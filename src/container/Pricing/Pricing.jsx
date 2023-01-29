import { motion } from "framer-motion";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { fadeIn, staggerContainer } from "../../untils.";
import "./Pricing.scss";
const Pricing = () => {
  return (
    <motion.div
      className='app__pricing'
      id='pricing'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false }}
    >
      <motion.div
        className='app__pricing-heading'
        variants={fadeIn("right", "tween", 0.5, 1)}
      >
        <small>Our Packages</small>
        <h2>Take a look of our Pricing and select Your Choice</h2>
      </motion.div>
      <motion.div
        className='pricing-cards'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
        <motion.div className='card' variants={fadeIn("up", "tween", 0.6, 1)}>
          <div className='card-heading'>
            <p className='plan-title'>Basic</p>
            <h3>
              <sup>$</sup>24.66 <sub>/mo</sub>
            </h3>
          </div>
          <div className='plan'>
            <div>
              <p>10 Keywords Optimized </p>
              <BsCheck2Circle color='#00a37b' />
            </div>
            <div>
              <p>3 Top 10 Ranking </p>
              <AiOutlineCloseCircle color='#ff99af' />
            </div>
            <div>
              <p>Web site Analysis </p>
              <AiOutlineCloseCircle color='#ff99af' />
            </div>
            <div>
              <p>Keyword Research </p>
              <BsCheck2Circle color='#00a37b' />
            </div>
            <div>
              <p>Content Optimization </p>
              <BsCheck2Circle color='#00a37b' />
            </div>
          </div>
          <a href='#top' className='btn'>
            Choose plan
          </a>
        </motion.div>
        <motion.div
          className='card active'
          variants={fadeIn("up", "tween", 0.5, 1)}
        >
          <div className='card-heading'>
            <p className='plan-title'>Starter Plan</p>
            <h3>
              <sup>$</sup>29.12 <sub>/mo</sub>
            </h3>
          </div>
          <div className='plan'>
            <div>
              <p>12 Keywords Optimized </p>
              <BsCheck2Circle color='#00a37b' />
            </div>
            <div>
              <p>6 Top 10 Ranking </p>
              <AiOutlineCloseCircle color='#ff99af' />
            </div>
            <div>
              <p>Web site Analysis </p>
              <AiOutlineCloseCircle color='#ff99af' />
            </div>
            <div>
              <p>Keyword Research </p>
              <BsCheck2Circle color='#00a37b' />
            </div>
            <div>
              <p>Content Optimization </p>
              <BsCheck2Circle color='#00a37b' />
            </div>
          </div>
          <a href='#top' className='btn'>
            Choose plan
          </a>
        </motion.div>
        <motion.div className='card' variants={fadeIn("up", "tween", 0.6, 1)}>
          <div className='card-heading'>
            <p className='plan-title'>Premium Plan</p>
            <h3>
              <sup>$</sup>59.50 <sub>/mo</sub>
            </h3>
          </div>
          <div className='plan'>
            <div>
              <p>16 Keywords Optimized </p>
              <BsCheck2Circle color='#00a37b' />
            </div>
            <div>
              <p>9 Top 10 Ranking </p>
              <AiOutlineCloseCircle color='#ff99af' />
            </div>
            <div>
              <p>Web site Analysis </p>
              <AiOutlineCloseCircle color='#ff99af' />
            </div>
            <div>
              <p>Keyword Research </p>
              <BsCheck2Circle color='#00a37b' />
            </div>
            <div>
              <p>Content Optimization </p>
              <BsCheck2Circle color='#00a37b' />
            </div>
          </div>
          <a href='#top' className='btn'>
            Choose plan
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Pricing;
