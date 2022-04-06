import React from 'react'
import './Button.css'
function Button(props) {
    return (
    <button className='btn' value={props.value} onClick={props.handleClick}>{props.name}</button>
    )
}

export default Button;