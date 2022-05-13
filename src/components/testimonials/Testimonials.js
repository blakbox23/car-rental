import React from 'react'
import './TestimonialsStyle.css'
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

function Testimonials() {
  return (
    <div className='testimonials'>
      <div className='testimonials-text'>
        <h2>Reviews</h2>
        <p>What Our Customers Say</p>
      </div>
      <div className='testimonial-cards-section'>
        <div className='testimonial-card'>
          <div className='testimonial-image'><img src="https://source.unsplash.com/OWabN5X6xOQ"/></div>
          <p className='testimonial-name'>John Doe</p>
          <div className='testimonial-stars'>
            <AiFillStar color="orange" fontSize="1.1rem"/>
            <AiFillStar color="orange" fontSize="1.1rem"/>
            <AiFillStar color="orange" fontSize="1.1rem"/>
            <AiFillStar color="orange" fontSize="1.1rem"/>
            <BsStarHalf color="orange" fontSize="1.1rem"/>
          
          </div>
          <p className='review'>Testimonail yake penye itaenda alafu tuongezee ma vitu ndo tomake sure iko fiti Testimonail yake penye 
            .Testimonail yake penye itaenda alafu tuongezee ma vitu ndo tomake sure iko fiti.</p>
        </div>

        <div className='testimonial-card'>
          <div className='testimonial-image'><img src="https://source.unsplash.com/OWabN5X6xOQ"/></div>
          <p className='testimonial-name'>John Doe</p>
          <div className='testimonial-stars'>
            <AiFillStar color="orange" fontSize="1.1rem"/>
            <AiFillStar color="orange" fontSize="1.1rem"/>
            <AiFillStar color="orange" fontSize="1.1rem"/>
            <AiFillStar color="orange" fontSize="1.1rem"/>
            <BsStarHalf color="orange" fontSize="1.1rem"/>
          
          </div>
          <p className='review'>Testimonail yake penye itaenda alafu tuongezee ma vitu ndo tomake sure iko fiti Testimonail yake penye 
            .Testimonail yake penye itaenda alafu tuongezee ma vitu ndo tomake sure iko fiti.</p>
        </div>
        <div className='testimonial-card'>
          <div className='testimonial-image'><img src="https://source.unsplash.com/OWabN5X6xOQ"/></div>
          <p className='testimonial-name'>John Doe</p>
          <div className='testimonial-stars'>
            <AiFillStar color="orange" fontSize="1.1rem"/>
            <AiFillStar color="orange" fontSize="1.1rem"/>
            <AiFillStar color="orange" fontSize="1.1rem"/>
            <AiFillStar color="orange" fontSize="1.1rem"/>
            <BsStarHalf color="orange" fontSize="1.1rem"/>
          
          </div>
          <p className='review'>Testimonail yake penye itaenda alafu tuongezee ma vitu ndo tomake sure iko fiti Testimonail yake penye 
            .Testimonail yake penye itaenda alafu tuongezee ma vitu ndo tomake sure iko fiti.</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials