import { motion } from "framer-motion";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { fadeIn, image, staggerContainer } from "../../untils.";
import blog from "./../../blog";
import "./SingleBlog.scss";
const SingleBLog = () => {
  const { name } = useParams();
  const navigatrion = useNavigate();

  const handleBack = () => {
    navigatrion(-1);
  };

  return (
    <div className='app__blog-post'>
      <div className='container'>
        {blog
          .filter((blog) => blog.name == name)
          .map((item) => (
            <motion.div
              key={Math.random()}
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false }}
            >
              <div className='hading-container'>
                <div className='atuhor-contenar'>
                  <motion.div
                    className='author'
                    variants={staggerContainer}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: false }}
                  >
                    <motion.img
                      src={item.authorImage}
                      alt='author'
                      variants={image("left")}
                    />
                    <motion.div
                      variants={fadeIn("up", "tween", 0.5, 1)}
                      className='social-medina'
                    >
                      <p>Write by - {item.author}</p>
                      <ul>
                        <li>
                          <a
                            href='https://www.facebook.com/'
                            rel='noreferrer'
                            target='_blank'
                          >
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://twitter.com/?lang=en'
                            rel='noreferrer'
                            target='_blank'
                          >
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://www.linkedin.com/feed/'
                            rel='noreferrer'
                            target='_blank'
                          >
                            <FaLinkedinIn />
                          </a>
                        </li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div
                  className='app__post-heading'
                  variants={staggerContainer}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: false }}
                >
                  <motion.small variants={fadeIn("up", "tween", 0.5, 1)}>
                    {item.name}
                  </motion.small>
                  <motion.h2 variants={fadeIn("up", "tween", 0.6, 1)}>
                    {item.title}
                  </motion.h2>
                </motion.div>
              </div>
              <motion.div
                className='text'
                variants={fadeIn("up", "tween", 0.7, 1)}
              >
                <p>{item.paragraph1}</p>
              </motion.div>
              <motion.div
                className='gallery'
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false }}
              >
                <motion.img
                  src={item.image3Big}
                  alt='image3'
                  variants={fadeIn("up", "tween", 0.5, 1)}
                />
                <motion.img
                  src={item.image4}
                  alt='image4'
                  variants={fadeIn("up", "tween", 0.6, 1)}
                />
                <motion.img
                  src={item.image1}
                  alt='image1'
                  variants={fadeIn("up", "tween", 0.7, 1)}
                />
                <motion.img
                  src={item.image5Big}
                  alt='image5'
                  variants={fadeIn("up", "tween", 0.8, 1)}
                />
                <motion.img
                  src={item.image2}
                  alt='image2'
                  variants={fadeIn("up", "tween", 0.9, 1)}
                />
              </motion.div>
              <motion.div
                className='text'
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false }}
              >
                <motion.p variants={fadeIn("up", "tween", 0.5, 1)}>
                  {item.paragraph2}
                </motion.p>
                <motion.p variants={fadeIn("up", "tween", 0.6, 1)}>
                  {item.paragraph3}
                </motion.p>
                <motion.div
                  className='button'
                  onClick={handleBack}
                  variants={fadeIn("up", "tween", 0.7, 1)}
                >
                  &larr;
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default SingleBLog;
