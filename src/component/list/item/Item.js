import React from 'react'

import './Item.css'

const Item = (props) => {
    return (
        <div className='Item'>
            <span>
                <input type='text' defaultValue={props.data['order']} />
            </span>
            
            <span>
                {props.data['text']}
            </span>
            
            <span>
                <button>Edit</button>
                <button>Delete</button>
            </span>
        </div>
    )
}

export default Item