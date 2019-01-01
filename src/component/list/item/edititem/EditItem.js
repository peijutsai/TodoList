import React from 'react'

import './EditItem.css'

const EditItem = (props) => {

    return (
        <div className='EditItem'>
            <span>
                <input
                    type='text'
                    value={props.data['order']}/>
            </span>

            <span>
                <input
                    type='text'
                    value={props.data['text']}/>
            </span>

            <span>
                <button onClick={() => props.cancelHandler(props.id)}>Cancel</button>
                <button onClick={() => props.saveHandler(props.id)}>Save</button>
                <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
            </span>
        </div>

    )
}

export default EditItem