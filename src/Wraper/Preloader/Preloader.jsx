import React from "react";
import "./Preloader.scss";

const Preloader = ({ loading, children }) => {
  if (loading) {
    return (
      <div className='preloader-wrapper'>
        <div className='spinner'>
          <div className='bounce1'></div>
          <div className='bounce2'></div>
          <div className='bounce3'></div>
        </div>
      </div>
    );
  }
  return children;
};

export default Preloader;
