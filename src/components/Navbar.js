import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <div className='navbar'>
            <h1 className='navTitle'>Portfolio</h1>
            <ul className='navUl'>
            <li><a href="#Home" className='navText'>Home</a></li>
            <li><a href="#About" className='navText'>About</a></li>
            <li><a href="#Services" className='navText'>Services</a></li>
            <li><a href="#Projects" className='navText'>Project</a></li>
            <li><a href="#Skills" className='navText'>Skills</a></li>
            <li><a href="#Contact" className='navText'>Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;

// const Li = {
//     textDecoration: none;
// }