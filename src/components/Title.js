import React from 'react'
import './Title.css'

function Title(props) {
    return (
    <div className='title'>
        <h1 className='h1' style={props.style}>{props.name}</h1>
    </div>
    )
}

export default Title;
