import React from 'react';
import Title from './Title';
import './Projects.css';
import Web1 from './Images/web1.JPG';
import Design from './Images/graphic1.jpg';
import LoadMore from './views/LoadMore';

function Projects() {
    const handleClick = () => {
        window.open("https://github.com/Bennismrt");
    };
    const handleClick2 = () => {
        window.open("https://drive.google.com/file/d/1aCfK4ZgYLyS8Cnd6EipN_ZKJhc9gWr4I/view?usp=sharing");
    };
    return (
    <div className='projects' id="Projects">
        <Title name="Projects" style={title}/>
        <p>How can I convince you? As a graphic designer and frontend web developer, I've worked on the projects listed below.</p>
        <div className='subProject'>
            <div className='project1'>
                <h1>Web Development</h1>
                <img src={Web1}/>
                <LoadMore name="Load More" onClick={handleClick}/>
            </div>
            <div className='project2'>
                <h1>Graphic Designer</h1>
                <img src={Design}/>
                <LoadMore name="Load More" onClick={handleClick2}/>
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

