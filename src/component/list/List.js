import React from 'react'

import Item from '../list/item/Item'
import EditItem from './item/edititem/EditItem';

const List = (props) => {
    let itemViews = []

    itemViews = props.toDoList.map((data, i) => {

        let item = <Item
            data={data} index={i}
            changeOrderHandler={props.changeOrderHandler}
            sortHandler={props.sortHandler}
            toggleDoneStatusHandler={props.toggleDoneStatusHandler}
            deleteItemHandler={props.deleteItemHandler}
            enterEditModeHandler={props.enterEditModeHandler} />

        if (i === props.editModeIndex) {
            item = <EditItem
                tmpData={props.tmpData} index={i}
                deleteItemHandler={props.deleteItemHandler}
                exitEditModeHandler={props.exitEditModeHandler}
                changeTmpOrderHandler={props.changeTmpOrderHandler}
                changeTmpTextHandler={props.changeTmpTextHandler}
                saveItemHandler={props.saveItemHandler}
            />
        }

        return (
            <li key={i}>{item}</li>
        )
    })

    return (
        <div>
            <ul>
                {itemViews}
            </ul>
        </div>
    )
}

export default List