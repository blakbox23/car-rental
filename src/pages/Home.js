import React from 'react'
import About from '../components/about/About'
import Cars from '../components/cars/Cars'
import Hero from '../components/Hero/Hero'
import NavBar from '../components/NavBar/NavBar'
import Testimonials from '../components/testimonials/Testimonials'

function Home() {
  return (
    <div className='home'>
        <>
        <div>
            {/* <NavBar /> */}
            <Hero id='hero' /> 
            <Cars id='cars' />
            <About id='about' />
            <Testimonials id='testimonials' />
        </div>
     
        
        </>

    </div>
  )
}

export default Home