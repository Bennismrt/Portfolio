import React from 'react'
import './Title.css'

function Title(props) {
    return (
    <div className='title'>
        <h1 className="title1">{props.name}</h1>
    </div>
    )
}

export default Title;