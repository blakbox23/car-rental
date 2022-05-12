import React from 'react'
import './NavBarStyle.css'; 

function Navbar() {
  return (
    <div className='navbar flex'>
        <div>Logo</div>
        <div className='links flex'>
            <div>Home</div>
            <div>Rides</div>
            <div>Services</div>
            <div>About</div>
            <div>Reviews</div>
        </div>
        <div className='login-section flex'>
            <div>Login</div>
            <div>Sign up</div>
        </div>
        
    </div>
  )
}

export default Navbar