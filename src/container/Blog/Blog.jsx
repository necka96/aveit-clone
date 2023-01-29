import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import blog from "../../blog";
import { staggerContainer } from "../../untils.";
import { fadeIn } from "./../../untils.";
import "./Blog.scss";
const Blog = () => {
  return (
    <motion.div
      className='app__blog'
      id='blog'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false }}
    >
      <motion.div
        className='app__blog-heading'
        variants={fadeIn("left", "tween", 0.5, 1)}
      >
        <small>LATEST NEWS</small>
        <h2>Most Popular Breaking News & Top Stories</h2>
      </motion.div>
      <motion.div
        className='blog'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
        {blog.map((item) => (
          <motion.div
            className='blog-item'
            key={item.name}
            variants={fadeIn("up", "tween", 0.5, 1)}
          >
            <div className='main-img'>
              <div className={`${item.mainImage ? "item" : "text"}`}>
                {item.mainImage && <img src={item.mainImage} alt='' />}

                <div className='date'>{item.date}</div>
                <div>
                  <div className='main-author'>
                    <Link to={`/${item.name}`}>{item.title}</Link>
                    {<p>{item.mainText}</p>}
                    <div>
                      <img src={item.authorImage} alt={item.author} />
                      <span>{item.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Blog;
