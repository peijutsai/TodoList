import React from 'react'

import Item from '../list/item/Item'
import EditItem from './item/edititem/EditItem';

const List = (props) => {
    let list = []

    list = props.data.map((ele, i) => {

        let item = <Item data={ele} id={i}
            orderChangedHandler={props.orderChangedHandler}
            resortOrderHandler={props.resortOrderHandler}
            toggleToDone={props.toggleToDone}
            editModeHandler={props.editModeHandler}
            deleteHandler={props.deleteHandler} />

        if (i === props.editModeId) {
            item = <EditItem data={ele} id={i}
            cancelHandler={props.cancelHandler}
            saveHandler={props.saveHandler}
            deleteHandler={props.deleteHandler}/>
        }
        
        return (
            <li key={i}>{item}</li>
        )
    })

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default List