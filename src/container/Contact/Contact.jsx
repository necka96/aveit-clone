import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiOutlinePhoneArrowUpRight } from "react-icons/hi2";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import images from "../../constants/images";
import { staggerContainer } from "../../untils.";
import { fadeIn } from "./../../untils.";
import "./Contact.scss";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [isFormSubmint, setIsFormSubmint] = useState(false);

  const { name, email, number, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsFormSubmint(true);
  };
  return (
    <motion.div
      className='app__contact'
      id='contact'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false }}
    >
      <motion.div
        className='app__contant-image'
        variants={fadeIn("up", "tween", 0.5, 1)}
      >
        <img src={images.contactShape} alt='shape contact' />
      </motion.div>
      <motion.div
        className='app__contact-holder'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
        <motion.div
          className='form-holder'
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false }}
        >
          <motion.div
            className='heading'
            variants={fadeIn("right", "tween", 0.6, 1)}
          >
            <small>Contact Us</small>
            <h2>Then book your trip from our exclusive offers.</h2>
          </motion.div>
          {!isFormSubmint ? (
            <motion.form
              onSubmit={handleSubmit}
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false }}
            >
              <motion.div
                className='name'
                variants={fadeIn("up", "tween", 0.6, 1)}
              >
                <input
                  type='text'
                  required
                  placeholder='Name'
                  value={name}
                  onChange={handleChange}
                  name='name'
                />
              </motion.div>
              <motion.div
                className='email'
                variants={fadeIn("up", "tween", 0.7, 1)}
              >
                <input
                  type='email'
                  required
                  placeholder='Email*'
                  value={email}
                  onChange={handleChange}
                  name='email'
                />
                <input
                  type='tel'
                  required
                  placeholder='Phone'
                  value={number}
                  onChange={handleChange}
                  name='number'
                />
              </motion.div>
              <motion.div variants={fadeIn("up", "tween", 0.8, 1)}>
                <textarea
                  placeholder='Please describe what you need. *'
                  value={message}
                  onChange={handleChange}
                  name='message'
                ></textarea>
              </motion.div>
              <motion.div variants={fadeIn("up", "tween", 0.9, 1)}>
                <button className='btn'>Send Now</button>
              </motion.div>
            </motion.form>
          ) : (
            <motion.p variants={fadeIn("up", "tween", 0.5, 1)}>
              Thank you {name} for contact us
            </motion.p>
          )}
        </motion.div>
        <motion.div
          className='address-holder'
          variants={fadeIn("up", "tween", 0.5, 1)}
        >
          <div className='item'>
            <div className='icon'>
              <SlLocationPin />
            </div>
            <div className='info'>
              <h5>Location</h5>
              <p>
                22 Baker Street, London, <br />
                United Kingdom, W1U 3BW
              </p>
            </div>
          </div>
          <div className='item'>
            <div className='icon'>
              <HiOutlinePhoneArrowUpRight />
            </div>
            <div className='info'>
              <h5>Make a Call</h5>
              <p>
                +1-940-394-2948 <br />
                +1-389-385-3807
              </p>
            </div>
          </div>
          <div className='item'>
            <div className='icon'>
              <MdOutlineMarkEmailRead />
            </div>
            <div className='info'>
              <h5>flaticon-email</h5>
              <p>
                info@Maxa.com <br /> support@Maxa.com
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
