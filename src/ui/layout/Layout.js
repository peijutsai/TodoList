import React, { Component } from 'react'

import MainContent from '../../component/maincontent/MainContent'
import NoContent from '../../component/nocontent/NoContent'
import Input from '../../component/input/Input'

class Layout extends Component {

    constructor() {
        super()
        this.state = {
            toDoList: [],
            query: '',
            page: 'All',
            editModeIndex: -1,
            tmpData: {}
        }
    }

    /*---------------------------------------------------------------------*/
    /* Event handlers */
    addItemHandler = (event) => {
        if (event.charCode === 13) {
            let newList = [...this.state.toDoList]
            let item = {
                order: 1,
                text: event.target.value,
                status: 'Processing'
            }

            newList.push(item)
            this.setState({
                toDoList: newList
            })

            event.target.value = ''
        }
    }

    searchHandler = (event) => {
        if (event.charCode === 13) {
            this.setState({
                query: event.target.value
            })
        }
    }

    changeOrderHandler = (event, index) => {
        let newList = [...this.state.toDoList]
        newList[index]['order'] = +event.target.value
        this.setState({
            toDoList: newList
        })
    }

    sortHandler = () => {
        let newList = [...this.state.toDoList]
        newList = this.sortByOrder(newList)
        this.setState({
            toDoList: newList
        })
    }

    changePageHandler = (page) => {
        if (this.state.page === page) {
            return
        }

        this.setState({
            page: page
        })
    }

    toggleDoneStatusHandler = (index) => {
        let newList = [...this.state.toDoList]
        let item = newList[index]
        item['status'] = (item['status'] === 'Done' ? 'Processing' : 'Done')

        this.setState({
            toDoList: newList
        })
    }

    deleteItemHandler = (index) => {
        let newList = [...this.state.toDoList]
        newList.pop(index)
        this.setState({
            toDoList: newList,
            editModeIndex: -1
        })
    }

    enterEditModeHandler = (index) => {
        this.setState({
            editModeIndex: index,
            tmpData: Object.assign({}, this.state.toDoList[index])
        })
    }

    exitEditModeHandler = () => {
        this.setState({
            editModeIndex: -1,
            tmpData: {}
        })
    }

    changeTmpOrderHandler = (event) => {
        let newTmpData = this.state.tmpData
        newTmpData['order'] = +event.target.value
        this.setState({
            tmpData: newTmpData
        })
    }

    changeTmpTextHandler = (event) => {
        let newTmpData = this.state.tmpData
        newTmpData['text'] = event.target.value
        this.setState({
            tmpData: newTmpData
        })
    }

    saveItemHandler = (index) => {
        let newList = [...this.state.toDoList]
        newList[index] = this.state.tmpData

        newList = this.sortByOrder(newList)

        this.setState({
            toDoList: newList,
            editModeIndex: -1,
            tmpData: {}
        })
    }

    /*---------------------------------------------------------------------*/
    /* Helper functions */
    filterListByQuery = (toDoList) => {
        if (this.state.query.length === 0) {
            return toDoList
        }


        return toDoList.filter(ele => {
            return ele['text'].includes(this.state.query)
        })
    }

    filterListByPage = (toDoList) => {
        if (this.state.page === 'All') {
            return toDoList
        }

        return toDoList.filter(ele => {
            return ele['status'] === this.state.page
        })
    }

    sortByOrder = (newList) => {
        newList.sort((ele1, ele2) => {

            if (ele1['order'] > ele2['order']) {
                return 1

            } else if (ele1['order'] < ele2['order']) {
                return -1

            } else {
                return 0
            }
        })

        return newList
    }

    /*---------------------------------------------------------------------*/
    /* Render*/
    render() {
        let mainBlock = <NoContent />
        if (this.state.toDoList.length !== 0) {

            let toDoList = this.state.toDoList
            toDoList = this.filterListByQuery(toDoList)
            toDoList = this.filterListByPage(toDoList)

            mainBlock =
                <MainContent
                    toDoList={toDoList}
                    editModeIndex={this.state.editModeIndex}
                    tmpData={this.state.tmpData}
                    searchHandler={this.searchHandler}
                    changeOrderHandler={this.changeOrderHandler}
                    sortHandler={this.sortHandler}
                    page={this.state.page}
                    changePageHandler={this.changePageHandler}
                    toggleDoneStatusHandler={this.toggleDoneStatusHandler}
                    deleteItemHandler={this.deleteItemHandler}
                    enterEditModeHandler={this.enterEditModeHandler}
                    exitEditModeHandler={this.exitEditModeHandler}
                    changeTmpOrderHandler={this.changeTmpOrderHandler}
                    changeTmpTextHandler={this.changeTmpTextHandler}
                    saveItemHandler={this.saveItemHandler}
                />
        }

        return (
            <div>
                {mainBlock}
                <Input addItemHandler={this.addItemHandler} />
            </div >
        )
    }
}

export default Layout