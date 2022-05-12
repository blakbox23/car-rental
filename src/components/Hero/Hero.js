import React from 'react'
import Navbar from '../NavBar/NavBar';
import './HeroStyle.css'; 

function Hero() {
  return (
      <>
    <div className='hero'></div>

    <div className='overlay'>
      <div><Navbar/></div>
      <div className='hero-text'>
        <h2>CAR RENTALS</h2>
        <h3>FOR YOUR SPECIAL OCCASIONS</h3>
        <p>We are open 24/7 including the holidays. Book a ride with us today!</p>
        <button>Get Ride</button>
      </div>
    </div>
    </>
  )
}

export default Hero