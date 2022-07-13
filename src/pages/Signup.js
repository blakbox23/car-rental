import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'


function Signup() {
  return (
      <div className='login-page'>
    <div className='login'>
      <div className="flex-div">
        <div className="name-content">
          <h1 className="logo">Carental</h1>
          <p>Sign up and book a ride with us today!</p>
        </div>
          <form>
            <input type="text" placeholder="First name" required />
            <input type="password" placeholder="Last name" required />
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="ID" required />
            <input type="password" placeholder="Password" required />
            <button className="login-submit">Sign up</button>
            <hr/>
            <p>Already have an account? </p>
            <NavLink to="/login">
            <button className="create-account">Log in</button>
            </NavLink>
          </form>
      </div>
    </div>
    </div>
  )
}

export default Signup