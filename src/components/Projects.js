import React from 'react';
import Title from './Title';
import './Projects.css';
import Web1 from './Images/web1.JPG';
import Design from './Images/graphic1.jpg';

function Projects() {
    return (
    <div className='projects' id="Projects">
        <Title name="Projects" style={title}/>
        <p>How can I convince you? As a graphic designer and frontend web developer, I've worked on the projects listed below.</p>
        <div className='subProject'>
            <div className='project1'>
                <h1>Web Development</h1>
                <img src={Web1}/>
                <a href='#'><p>More Projects</p></a>
            </div>
            <div className='project2'>
                <h1>Graphic Designer</h1>
                <img src={Design}/>
                <a href='#'><p>More Projects</p></a>
            </div>
        </div>

    </div>
    )
}

export default Projects;

const title = {
    textAlign: "center",
    justifyContent: "center",
    margin:"auto",

}

