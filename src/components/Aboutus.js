import React from 'react';
import video from "./video.mp4"
import pic from "../images/Super.jpg"
import pic1 from "../images/image2.jpg"
import "./About.css"


export default function Aboutus() {
  return (
    <div className='container text-justify'>
      <h1 className='headingStyle text-center my-4'>About Us</h1>

     {/* first row */}

      <div className='row my-4'>
        <div className='col-lg-6 ' >
          <video width="550" height="300" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className='col-lg-6'>
          <div  className='aboutContent'>
            <h5 className='headingStyle'>
              <b>Welcome to All Pure Food!</b>
              At All Pure Food, we believe that what you eat has a direct impact on your health and well-being. Our mission is to provide you with the highest quality, purest, and most nourishing food options to support a healthy lifestyle. We are passionate about delivering wholesome, natural, and sustainable food choices that not only taste delicious but also promote overall wellness.
              Our Commitment to Purity:
              We understand the importance of pure and unadulterated food for optimal health. That's why we source our ingredients meticulously, working closely with trusted farmers and suppliers who share our commitment to quality. Our products are free from artificial additives, preservatives, and harmful chemicals. We believe in offering you food as nature intended it to be – pure, clean, and full of nutrients.
            </h5>
          </div>
        </div>
      </div>

     {/* second row */}

      <div className='row my-4'>
        <div className='col-lg-6'>
          <div  className='aboutContent' >
            <h5 className='headingStyle'>
              <b>Our Commitment to Purity:</b>
              We understand the importance of pure and unadulterated food for optimal health. That's why we source our ingredients meticulously, working closely with trusted farmers and suppliers who share our commitment to quality. Our products are free from artificial additives, preservatives, and harmful chemicals. We believe in offering you food as nature intended it to be – pure, clean, and full of nutrients.
              <br /> <b>Sustainability Matters:
              </b>
              We are committed to making a positive impact on our environment. That's why we prioritize sustainability in every aspect of our business. From responsible sourcing to eco-friendly packaging, we strive to minimize our carbon footprint. By choosing All Pure Food, you not only nourish your body but also contribute to a greener and more sustainable future.
              <br /> <b>A Wide Range of Products:</b>
              At All Pure Food, we offer a wide range of products that cater to various dietary preferences and requirements. Whether you follow a vegan, vegetarian, gluten-free, or paleo diet, you'll find something to satisfy your cravings. From wholesome snacks and beverages to pantry staples and specialty ingredients, we have carefully curated a collection that meets our rigorous standards for taste, quality, and nutritional value.
            </h5>
          </div>
        </div>
        <div className='col-lg-6 ' >
          <img width="550" src={pic} alt='product-pic' />
        </div>
      </div>

     {/* third row */}

      <div className='row my-4'>
        <div className='col-lg-6 ' >
          <img width="550" height="450" src={pic1} alt='product-pic' />
        </div>
        <div className='col-lg-6'>
          <div  className='aboutContent'>
            <h5 className='headingStyle'>
              <b>Sustainability Matters:</b>
              We are committed to making a positive impact on our environment. That's why we prioritize sustainability in every aspect of our business. From responsible sourcing to eco-friendly packaging, we strive to minimize our carbon footprint. By choosing All Pure Food, you not only nourish your body but also contribute to a greener and more sustainable future.             
              <br /> <b>Community and Education:</b>
              We believe in fostering a vibrant community of individuals who share our passion for healthy eating and living. Our website is a hub of information and resources, offering insightful articles, recipes, and tips to help you make informed choices and lead a healthier life. We encourage you to join our community, engage with us, and share your own experiences and knowledge.
              <br />
              <b>
                Customer Satisfaction:
              </b>
              Your satisfaction is our top priority. We are committed to providing exceptional customer service and ensuring that you have a seamless shopping experience with us. If you have any questions or need assistance, our friendly and knowledgeable team is here to help.
            </h5>
          </div>
        </div>
      </div>
        <h5 className='text-center'>Thank you for choosing All our Food ingredients as your trusted source for nourishing, pure, and delicious food.</h5>
      <p> Eat Pure. Live Pure. All Pure Food.</p>
    </div>
  );
}