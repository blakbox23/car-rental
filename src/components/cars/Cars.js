import React from 'react'
import CarTabs from './CarTabs'
import './CarsStyle.css'

function Cars() {
  return (
    <div className='cars'>
      <div className='cars-text'>
        <h2>Explore our top deals</h2>
        <p>Pick a favourite and enjoy </p>
      </div>
      
      <CarTabs />
    </div>
  )
}

export default Cars