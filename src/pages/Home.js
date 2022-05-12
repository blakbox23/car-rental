import React from 'react'
import About from '../components/about/About'
import Cars from '../components/cars/Cars'
import Hero from '../components/Hero/Hero'
import NavBar from '../components/NavBar/NavBar'

function Home() {
  return (
    <div className='home'>
        <>
        <div>
            {/* <NavBar /> */}
            <Hero />
            <Cars />
            <About />
        </div>
     
        
        </>

    </div>
  )
}

export default Home