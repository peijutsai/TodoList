import React from 'react'

import Search from '../search/Search'
import List from '../list/List'
import Tabs from '../tabs/Tabs'

const MainContent = (props) => {
    return (
        <div>
            <Search searchHandler={props.searchHandler} />

            <List
                toDoList={props.toDoList}
                editModeIndex={props.editModeIndex}
                tmpData={props.tmpData}
                changeOrderHandler={props.changeOrderHandler}
                sortHandler={props.sortHandler}
                toggleDoneStatusHandler={props.toggleDoneStatusHandler}
                deleteItemHandler={props.deleteItemHandler}
                enterEditModeHandler={props.enterEditModeHandler}
                exitEditModeHandler={props.exitEditModeHandler}
                changeTmpOrderHandler={props.changeTmpOrderHandler}
                changeTmpTextHandler={props.changeTmpTextHandler}
                saveItemHandler={props.saveItemHandler}
            />

            <Tabs
                page={props.page}
                changePageHandler={props.changePageHandler} />
        </div>
    )
}


export default MainContent