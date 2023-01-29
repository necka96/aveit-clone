import React from "react";
import Blog from "../../container/Blog/Blog";
import Contact from "../../container/Contact/Contact";
import Header from "../../container/Header/Header";
import HowWeWork from "../../container/HowWeWork/HowWeWork";
import Pricing from "../../container/Pricing/Pricing";
import Review from "../../container/Review/Review";
import Services from "../../container/Services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <HowWeWork />
      <Pricing />
      <Review />
      <Contact />
      <Blog />
    </>
  );
};

export default Home;
