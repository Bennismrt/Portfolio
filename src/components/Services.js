import React from 'react';
import Title from './Title';
import './Services.css'

function Services() {
    return (
    <div className='services' id="Services">
        <Title name="Services"/>
        <p>The services that I present are web development based on HTML, CSS and React JS, besides that you can also enjoy graphic design services. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className='image'>
            <div className='image1a'>
                <h1>Web development</h1>
                <p>Frontend web dev</p>
            </div>
            <div className='image2a'>
                <h1>Design Graphic</h1>
                <p>UI/UX</p>
            </div>
        </div>
    </div>
    ) 
}

export default Services;
