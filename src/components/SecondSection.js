import React from 'react';
import './SecondSection.css'

const SecondSection = () => {
  return (
    <div>
    <div className="row">
  <div className="col-lg-6 col-md-12 col-sm-12">
    
    <div className="first-h1"> <h1>A Smarter Way To <br /> Get Your Ingredients</h1></div> 
    <div className="first-h4">  <h4>Better Service <br /> More Selection <br />
        Customized Packaging</h4></div>
    <div className="btn-div"> <button type="button" className="btn btn-dark btn-lg">Introduction</button>
      <button type="button" className="btn btn-primary btn-lg mybtn">More...</button></div>
  </div>
  <div className="col-lg-6 col-sm-12">
    <img className="main-hero-img" src="img3.jpg" alt='imag' />
  </div>
</div>

    </div>
  );
};

export default SecondSection;
