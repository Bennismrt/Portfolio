import React from 'react';
import Profile2 from './assets/profile2.png';
import Button from './Button'
import './About.css'
import Title from './Title';


function About() {
    const handleClick = () => {
        window.open("https://drive.google.com/file/d/1kAVOuDGseKR2Lp5Pks0bl4AMDsIG9sr2/view?usp=sharing");
    };
    return (
    <div className='about' id='About'>
        <div className='about1'>
            <img src={Profile2}/>
        </div>
        <div className='about2'>
            <Title name="About"/>
            <p>Fresh graduate with specialization in frontend web development and graphic design from Mercu Buana University. Has ability to communicate clearly with people at all levels, have a strong work ethic towards work and seeking a role where I can contribute and apply my knowledge as a Frontend Web Engineer.</p>
            <Button name="Download my CV" handleClick={handleClick} />
        </div>
    </div>
    )
}

export default About;