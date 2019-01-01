import React from 'react'

import './Item.css'

const Item = (props) => {
    let ifAddLine = ''

    if(props.data['status'] === 'done') {
        ifAddLine= 'AddLine'
    }

    return (
        <div className='Item'>
            <span>
                <input
                    type='text'
                    value={props.data['order']}
                    onBlur={props.resortOrderHandler}
                    onChange={(event) => props.orderChangedHandler(event, props.id)} />
            </span>

            <span
                className={ifAddLine}
                onClick={() => props.toggleToDone(props.id)}>
                {props.data['text']}
            </span>

            <span>
                <button onClick={() => props.editModeHandler(props.id)}>Edit</button>
                <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
            </span>
        </div>
    )
}

export default Item