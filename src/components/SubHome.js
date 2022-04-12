import React from 'react'
import './SubHome.css'
import Linked from './assets/Linked-01.png'
import Insta from './assets/Insta-01.png'
import Github from './assets/github-01.png'


export function SubHome() {
    const Linked1 = () => {
        window.open("https://www.linkedin.com/in/benni-setiady/");
    };
    const Insta1 = () => {
        window.open("https://www.instagram.com/bennysmrt/");
    };
    const Github1 = () => {
        window.open("https://github.com/Bennismrt");
    };
    


    return (
        <div className='subHome'>
            <h1>“Let's make something<br/>out of nothing”</h1>
            <button><a href='#About'>Get Started</a></button>
        </div>
    )
}
