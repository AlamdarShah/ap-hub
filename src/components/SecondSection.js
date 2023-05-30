import React from 'react';
import './SecondSection.css'

const SecondSection = () => {
  return (
    <div>
    <div className="row">
  <div className="col-lg-6 col-md-12 col-sm-12">
    <div className="first-h1"> <h1>Welcome to Geeks UI <br /> Learning Application</h1></div> 
    <div className="first-h4">  <h4>Hand-picked Instructor and expertly crafted <br /> courses, designed for the modern students and <br />
        entrepreneur.</h4></div>
    <div className="btn-div"> <button type="button" className="btn btn-dark btn-lg">Browse Courses</button>
      <button type="button" className="btn btn-light btn-lg">Are You Instructor</button></div>
  </div>
  <div className="col-lg-6 col-sm-12">
    <img className="main-hero-img" src="img3.jpg" alt='imag' />
  </div>
</div>

    </div>
  );
};

export default SecondSection;
