import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import images from "../../constants/images";
import { navVariants, staggerContainer } from "../../untils.";
import "./Nav.scss";
const Nav = () => {
  const [onScroll, setOnScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setOnScroll(true);
        setToggle(false);
      } else {
        setOnScroll(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 10) {
          setOnScroll(true);
          setToggle(false);
        } else {
          setOnScroll(false);
        }
      });
    };
  }, []);

  return (
    <motion.nav>
      <motion.div
        className={`${
          onScroll ? "app__nav-bar app__nav-scroll" : "app__nav-bar"
        }`}
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
      >
        <motion.div className='app__logo' variants={navVariants}>
          {onScroll ? (
            <img src={images.logoScroll} alt='' />
          ) : (
            <img src={images.logo} alt='' />
          )}
        </motion.div>
        <motion.ul className='item' variants={navVariants}>
          {[
            "home",
            "services",
            "how we work",
            "pricing",
            "contact",
            "blog",
          ].map((item) => (
            <motion.li key={Math.random()}>
              <a href={`#${item}`}>{item}</a>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div className='loginBtn' variants={navVariants}>
          {" "}
          <AiOutlineUser /> Login
        </motion.div>

        <motion.div className='app__navbar-menu' variants={navVariants}>
          <BiMenu onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <IoMdClose onClick={() => setToggle(false)} />
              <ul>
                {[
                  "home",
                  "services",
                  "how we work",
                  "pricing",
                  "contact",
                  "blog",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => setToggle(false)}
                      style={{ color: "var(--white-color)" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
