import React from 'react'
import './navbar.css'
import Logo from '../../assets/Frame 17.png'
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <nav id="navbar">
        <img src={Logo} alt="" className="logo" />
        <ul className="navlinks">
                    <Link className='navlink' >Home</Link>
                    <Link className='navlink' >About</Link>
                    <Link className='navlink' >Portfolio</Link>
                    <Link className='navlink' >Clients</Link>
                    <Link className='navlink' >Contact</Link>

            </ul>

            <div className="navbtns">
        <button className="navbtn btn1">Sign In</button>
        <button className="navbtn">Get Started</button>
        </div>
    </nav>
    
    
  )
}

export default Navbar
