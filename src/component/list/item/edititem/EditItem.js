import React from 'react'

import './EditItem.css'

const EditItem = (props) => {

    return (
        <div className='EditItem'>
            <span>
                <input
                    type='text'
                    value={props.tmpData['order']}
                    onChange={props.changeTmpOrderHandler}
                    />
            </span>

            <span>
                <input
                    type='text'
                    value={props.tmpData['text']}
                    onChange={props.changeTmpTextHandler}
                    />
            </span>

            <span>
                <button onClick={props.exitEditModeHandler}>Cancel</button>
                <button onClick={() => {props.saveItemHandler(props.index)}}>Save</button>
                <button onClick={() => {props.deleteItemHandler(props.index)}}>Delete</button>
            </span>
        </div>

    )
}

export default EditItem