import React from 'react';
import Title from './Title';
import './Services.css'

function Services() {
    return (
    <div className='services' id="Services">
        <Title name="Services"/>
        <p className='p'>The services that I present are web development based on HTML, CSS and React JS, besides that you can also enjoy graphic design services.</p>
        <div className='image'>
            <div className='image1a'>
                    <h2>Web development</h2>
                    <p>Frontend web dev</p>
                </div>
                <div className='image2a'>
                    <h2>Design Graphic</h2>
                    <p>UI/UX</p>
                </div>
        </div>
    </div>
    ) 
}

export default Services