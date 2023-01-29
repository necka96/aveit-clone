import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { fadeIn } from "../../untils.";
import "./AutoCounter.scss";
function AutoCounter({ countNumber, text, offset = 50 }) {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   window.addEventListener("touchstart", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     window.removeEventListener("touchstart", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //   }
  // }, [intervalId]);

  // const handleScroll = () => {
  //   setCount(0);
  //   const id = setInterval(() => {
  //     setCount((count) => {
  //       if (count === countNumber) {
  //         clearInterval(id);
  //         return count;
  //       }
  //       return count + 1;
  //     });
  //   }, 20);
  //   setIntervalId(id);
  // };
  useEffect(() => {
    const handleScroll = () => {
      if (!intervalId) {
        setCount(0);
        const id = setInterval(() => {
          setCount((count) => {
            if (count === countNumber) {
              clearInterval(id);
              setIntervalId(null);
              return count;
            }
            return count + 1;
          });
        }, 20);
        setIntervalId(id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleScroll);
    };
  }, [intervalId]);
  return (
    <motion.div
      className='counter-holder'
      variants={fadeIn("up", "tween", 0.5, 1)}
    >
      <h3>{count}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

export default AutoCounter;
