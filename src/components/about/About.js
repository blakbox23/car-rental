import React from 'react'
import './AboutStyle.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


function About() {
  return (
    <div className='about'>
        <div className='about-overlay'>
        <div className='about-text'>
        <Zoom><p className='section-header'>Why rent a car <span className='yellow'> with us?</span> </p></Zoom>
        <Fade down><p className='section-text'>We are <span className='yellow'>open 24/7 </span>including the holidays. Book a ride with us today!</p>
        <p className='section-text'>It is a long established fact that a <span className='yellow'>reader</span>  will be distracted by the readable content
        'Content here, content here', making it <span className='yellow'>look like</span> readable English. </p>
        </Fade>
        <p className='section-text section-footer'>We are open 24/7 including the holidays. Book a ride with us today!</p>

        
        </div>
        </div>
        
    </div>
  )
}

export default About