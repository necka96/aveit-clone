import { motion } from "framer-motion";
import React from "react";
import { fadeIn, staggerContainer } from "../../untils.";
import Testimonials from "./../../components/Testimonials/Testimonials";
import review from "./../../review";
import "./Review.scss";
const Review = () => {
  return (
    <motion.div
      className='review'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false }}
    >
      <motion.div
        className='app__review-heading'
        variants={fadeIn("left", "tween", 0.5, 1)}
      >
        <small>Review</small>
        <h2>10,000+ Happy Customers</h2>
      </motion.div>
      <motion.div variants={fadeIn("up", "tween", 0.6, 1)}>
        <Testimonials review={review} />
      </motion.div>
    </motion.div>
  );
};

export default Review;
