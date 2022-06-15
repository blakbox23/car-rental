import React from 'react'
import Navbar from '../NavBar/NavBar';
import './HeroStyle.css'; 
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";


function Hero() {
  return (
      <>
    <div className='hero'></div>

    <div className='overlay'>
      <div className='hero-text'>
        
        <Fade down>
          <h2>CAR RENTALS</h2>
          <h3>FOR YOUR SPECIAL OCCASIONS</h3>
        </Fade>

        <Fade up>
        <p>We are open 24/7 including the holidays. Book a ride with us today!</p>
        </Fade>
          
        <Zoom>
          <button>
          <Link
            to="cars"
            spy={true}
            smooth={true}
            offset={-59}
            duration={500}
          >Get ride</Link>
          </button>
        </Zoom> 
             
      </div>
    </div>
    </>
  )
}

export default Hero