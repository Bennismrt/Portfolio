import React from 'react'
import './SubHome.css'
import Profile1 from './assets/profile.png';
export function SubHome() {
    

    return (
        <div className='subHome'>
            <div className='title'>
            <h1 className='title1'>Hi,</h1>
            <h1 className='title2'>I'm Benni Setiady</h1>
            <h1 className='title3'>"A frontend web developer and graphic designer"</h1>
            </div>
            <div className='image'>
            <img src={Profile1} className="image1"/>
            </div>
        </div>
    )
}
