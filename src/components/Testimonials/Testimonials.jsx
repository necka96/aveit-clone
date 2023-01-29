import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./Testemonial.scss";
const Testimonials = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = props.review;
  const [isActive, setIsActive] = useState(true);

  const prevTestimonial = () => {
    setIsActive(false);
    setTimeout(() => {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex < 0 ? testimonials.length - 1 : newIndex);
      setIsActive(true);
    }, 500);
  };

  const nextTestimonial = () => {
    setIsActive(false);
    setTimeout(() => {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex === testimonials.length ? 0 : newIndex);
      setIsActive(true);
    }, 500);
  };

  return (
    <div className='review-testemonial'>
      <div className={`testimonial ${isActive ? "active" : ""}`}>
        <div className='stars'>
          {testimonials[currentIndex].rating1}
          {testimonials[currentIndex].rating2}
          {testimonials[currentIndex].rating3}
          {testimonials[currentIndex].rating4}
          {testimonials[currentIndex].rating5}
        </div>
        <div className='testimonial-text'>
          <p>{testimonials[currentIndex].testemonial}</p>
        </div>
        <div className='author'>
          <div className='img'>
            <img src={testimonials[currentIndex].image} alt='' />
            <div>
              <h3>{testimonials[currentIndex].author}</h3>
              <p>{testimonials[currentIndex].job}</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={prevTestimonial} className='prev'>
        <AiOutlineLeft />
      </button>
      <button onClick={nextTestimonial} className='next'>
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default Testimonials;
