import React, {useRef, useEffect, useState} from 'react'
import About from '../components/about/About'
import Cars from '../components/cars/Cars'
import Hero from '../components/Hero/Hero'
import NavBar from '../components/NavBar/NavBar'
import Testimonials from '../components/testimonials/Testimonials'
import './HomeStyle.css'
import Zoom from 'react-reveal/Zoom';



function Home() {

  const myRef = useRef()
  const[heroVisible, setHeroVisible] = useState();

  console.log(heroVisible)

  
  useEffect(()=>{
    // console.log("my REF", myRef.current)
    const observer = new IntersectionObserver((entries)=> {
      const entry = entries[0];
      setHeroVisible(entry.isIntersecting)
      // console.log('entry', entry); 
    })
    observer.observe(myRef.current)
  }, [])

  return (
    <div className='home'>
        <>
        <div>
            <div className={heroVisible==false ? 'scrolledNav' : 'homeNav'}> <NavBar /> </div>
            <div ref={myRef}></div><Hero id='hero' /> 
            <div><Cars id='cars' /></div>
            <About id='about' />
            <Testimonials id='testimonials' />
        </div>    
        </>

    </div>
  )
}

export default Home