import React from 'react'
import './CarCard.css'

function CarCard() {
  return (
    <div className='car-card'>
      <div className='car-card-image'> <img src="https://source.unsplash.com/3ZUsNJhi_Ik" /> </div>
      <div className='car-card-text'>
          <p>2018 Honda Civic</p>
          <p><span className='price'>Ksh 3,500</span> per day</p>
      </div>
      <button className='car-card-button'>Rent Now</button>
    </div>
  )
}

export default CarCard