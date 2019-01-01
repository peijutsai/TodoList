import React from 'react'

import './Item.css'

const Item = (props) => {
    return (
        <div className='Item'>
            <span>
                <input
                    type='text'
                    value={props.data['order']}
                    onBlur={props.resortOrderHandler}
                    onChange={(event) => props.orderChangedHandler(event, props.id)} />
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