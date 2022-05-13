import React from 'react'
import CarTabs from './CarTabs'
import './CarsStyle.css'

function Cars() {
  return (
    <div className='cars'>
      <h4>Explore our top deals</h4>
      <h5>Pick a favourite and enjoy </h5>
      <CarTabs />
    </div>
  )
}

export default Cars