import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState("navUl")

    const navToggle = () => {
        if (active === "navUl"){
            setActive("navUl navUlActive");
        }else setActive("navUl");
        
    }
    return(
        <div className='navbar'>
            <h1><a href='#home' className='navTitle'>Portfolio</a></h1>
            <svg onClick={navToggle} xmlns="http://www.w3.org/2000/svg" className='hambu' viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
            <ul className={active} onClick={navToggle}>
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