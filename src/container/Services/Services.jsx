import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiFileText, FiSend } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { TbDeviceAnalytics, TbDeviceDesktopAnalytics } from "react-icons/tb";
import AutoCounter from "../../components/Counter/AutoCounter";
import images from "../../constants/images";
import { fadeIn, staggerContainer } from "../../untils.";
import "./Services.scss";
const Services = () => {
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
  return (
    <motion.div
      className='app__services'
      id='services'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false }}
    >
      <motion.div className='shape' variants={fadeIn("up", "tween", 0.7, 1)}>
        <img src={images.shape1} alt='shape' />
      </motion.div>
      <motion.div
        className='app__services-heading'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
        <motion.small variants={fadeIn("left", "tween", 0.5, 1)}>
          Services We Provide
        </motion.small>
        <motion.h2 variants={fadeIn("left", "tween", 0.5, 1)}>
          We turn information into actionable insights
        </motion.h2>
      </motion.div>
      <motion.div
        className='app__services-items'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
        <motion.div
          className='app__service'
          variants={fadeIn("right", "tween", 0.5, 1)}
        >
          <div className='icon'>
            <h3>
              {" "}
              <MdSecurity />
              Project Creation
            </h3>
          </div>
          <p>
            Such on help ye some door if in. Laughter proposal laughing any son
            law consider. Needed except up piqued an.{" "}
          </p>
          <div className='service-holder'>
            <h4>
              {" "}
              <AiFillCheckCircle />
              Product Development
            </h4>
            <h4>
              {" "}
              <AiFillCheckCircle />
              Product Consultation
            </h4>
            <h4>
              {" "}
              <AiFillCheckCircle />
              Architecture Design
            </h4>
          </div>
        </motion.div>
        <motion.div
          className='app__service'
          variants={fadeIn("up", "tween", 0.6, 1)}
        >
          <div className='icon'>
            <h3>
              {" "}
              <TbDeviceAnalytics /> Software Development
            </h3>
          </div>
          <p>
            Such on help ye some door if in. Laughter proposal laughing any son
            law consider. Needed except up piqued an.{" "}
          </p>
          <div className='service-holder'>
            <h4>
              {" "}
              <AiFillCheckCircle />
              Agile development
            </h4>
            <h4>
              {" "}
              <AiFillCheckCircle />
              Rapid application
            </h4>
            <h4>
              {" "}
              <AiFillCheckCircle />
              Waterfall method
            </h4>
          </div>
        </motion.div>
        <motion.div
          className='app__service'
          variants={fadeIn("left", "tween", 0.7, 1)}
        >
          <div className='icon'>
            <h3>
              {" "}
              <TbDeviceDesktopAnalytics />
              Project Management
            </h3>
          </div>
          <p>
            Such on help ye some door if in. Laughter proposal laughing any son
            law consider. Needed except up piqued an.{" "}
          </p>
          <div className='service-holder'>
            <h4>
              {" "}
              <AiFillCheckCircle />
              Phase management
            </h4>
            <h4>
              {" "}
              <AiFillCheckCircle />
              Phase management
            </h4>
            <h4>
              {" "}
              <AiFillCheckCircle />
              Communication
            </h4>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className='counter'
        style={{ backgroundImage: `url(${images.counter}) ` }}
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
        <AutoCounter countNumber={230} text='Satisfied Customers' />
        <AutoCounter countNumber={89} text='Professional Agents' />
        <AutoCounter countNumber={50} text='Type of services' />
        <motion.div className='from' variants={fadeIn("up", "tween", 0.6, 1)}>
          <h3>Stay update with us</h3>
          <p>
            Dried quick round it or order. Add past see west felt did any. Say
            out noise you taste.
          </p>
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
            <p>Thank you form subscibe</p>
          )}
        </motion.div>
      </motion.div>
      <motion.div
        className='app__documentation'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
        <motion.div
          className='documentaiton-img'
          variants={fadeIn("right", "tween", 0.5, 1)}
        >
          <img src={images.doc} alt='mobile img' />
        </motion.div>
        <motion.div
          className='documentation-text'
          variants={fadeIn("left", "tween", 0.5, 1)}
        >
          <h3>Designed for startups with experienced expert developer</h3>
          <p>
            Chances are good that there’s a cloud software as a service solution
            on the market today that will serve your core back-office needs.
            Many of those products offer the potential not just to move your
            data and processes to cloud{" "}
          </p>
          <div className='documentation-icon'>
            <div>
              <FiFileText />
            </div>
            <h4>Clear Documentation</h4>
          </div>
          <div className='documentation-icon'>
            <div>
              <FaChalkboardTeacher />
            </div>
            <h4> Flexible user interface</h4>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
