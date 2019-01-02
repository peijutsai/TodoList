import React from 'react'

import './Item.css'

const Item = (props) => {
    let classIsDone = ''

    if (props.data['status'] === 'Done') {
        classIsDone = 'AddLine'
    }

    return (
        <div className='Item'>
            <span>
                <input
                    type='text'
                    value={props.data['order']}
                    onChange={(event) => props.changeOrderHandler(event, props.index)}
                    onBlur={props.sortHandler} />
            </span>

            <span
                className={classIsDone}
                onClick={() => {props.toggleDoneStatusHandler(props.index)}}
                >

                {props.data['text']}

            </span>

            <span>
                <button onClick={() => {props.enterEditModeHandler(props.index)}}>Edit</button>
                <button onClick={() => {props.deleteItemHandler(props.index)}}>Delete</button>
            </span>
        </div>
    )
}

export default Item