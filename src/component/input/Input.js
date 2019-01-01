import React from 'react'

import './Input.css'

const Input = (props) => {
    return (
        <input
            type='text'
            placeholder='Add New Todo Item'
            className='Input' 
            onKeyPress={(event) => {props.keyPressHandler(event)}}/>
    )
}

export default Input