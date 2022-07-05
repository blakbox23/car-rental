import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBarStyle.css'; 
import About from '../about/About';
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div className='navbar flex'>
        <div>Logo</div>
        <div className='links flex'>
          <div>
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >Home</Link>
        </div>
            <div> 
              <Link
                activeClass="active"
                to="cars"
                spy={true}
                smooth={true}
                offset={-59}
                duration={500}
              >Cars</Link></div>

            <div> <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-59}
                duration={500}
              >About</Link></div>
            <div>
            <Link
                activeClass="active"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-59}
                duration={500}
              >Reviews</Link>
            </div>
        </div>


        <div className='login-section flex'>
            <div>
              <NavLink to="/login">
             <p className='login-btn'>Login</p> 
              </NavLink>
              </div>
            {/* <div>Sign up</div> */}
        </div>
        
    </div>
  )
}

export default Navbar