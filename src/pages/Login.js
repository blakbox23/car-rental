import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'


function Login() {
  return (
      <div className='login-page'>
    <div className='login'>
      <div className="flex-div">
        <div className="name-content">
          <h1 className="logo">Carental</h1>
          <p>Login and book a ride with us today!</p>
        </div>
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            {/* <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required /> */}
            <button className="login-submit">Log in</button>
            <hr/>
            <p>Don't have an account? </p>
            <NavLink to="/signup">
            <button className="create-account">Sign up</button>
            </NavLink>
          </form>
      </div>
    </div>
    </div>
  )
}

export default Login