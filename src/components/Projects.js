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
        <Title name="Projects" style={ProjectsTitle}/>
        <p>How can I convince you? As a graphic designer and frontend web developer, I've worked on the projects listed below. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className='class'>
        <div className='subProjectsA'>
            <h1>Web Developments</h1>
            <img src={Web1}></img>
            <LoadMore name="Load More" style={LoadMoreSet} onClick={handleClick}/>
        </div>
        <div className='subProjectsB'>
            <h1>Graphic Design</h1>
            <img src={Design}></img>
            <LoadMore name="Load More" style={LoadMoreSet} onClick={handleClick2}/>
        </div>
        </div>

    </div>
    )
}

export default Projects;

const ProjectsTitle = {
    fontSize: "54px",
    paddingBottom: "52px",
    textAlign:"center"
}

const LoadMoreSet = {
    fontSize: "20px"
}

