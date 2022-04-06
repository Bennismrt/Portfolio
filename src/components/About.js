import React from 'react';
import Profile2 from './assets/profile01-01.png';
import Button from './Button'
import './About.css'
import Title from './Title';


function About() {
    const handleClick = () => {
        window.open("https://drive.google.com/file/d/1kAVOuDGseKR2Lp5Pks0bl4AMDsIG9sr2/view?usp=sharing");
    };
    return (
    <div className='about' id='About'>
        <Title name="About Me"/>
        <div className='about1'>
            <div className='aboutA'>
                <h1>Hi, I’m <span> Benni Setiady</span></h1>
                <p>A fresh graduate with specialization in frontend web development and graphic design from Mercu Buana University. Has ability to communicate clearly with people at all levels, have a strong work ethic towards work and seeking a role where I can contribute and apply my knowledge as a Frontend Web Engineer.</p>
                <Button name="Download my CV" handleClick={handleClick} style={ButtonStyle}/>
            </div>
            <div className='aboutB'>
                <img src={Profile2}></img>
            </div>
        </div>
        
    </div>
    )


}

export default About;

const ButtonStyle = {
    padding: "13px 20px",
    width: "300px",
    fontSize: "15px",
    borderRadius: "10px",
    fontSize: '20px'
}