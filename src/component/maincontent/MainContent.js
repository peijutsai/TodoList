import React, { Component } from 'react'

import Search from '../search/Search'
import List from '../list/List'
import Tabs from '../tabs/Tabs'

class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: this.props.data,
            page: 'All',
            editModeId: -1
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            list: nextProps.data
        })
    }

    searchHandler = (event) => {
        let filteredlist = []

        if (event.charCode === 13) {
            if (event.target.value.length === 0) {
                this.setState({
                    list: this.props.data
                })
                return
            }

            filteredlist = this.props.data.filter(ele => {
                return ele['text'].includes(event.target.value)
            })

            this.setState({
                list: filteredlist
            })
        }
    }

    allPageHandler = () => {
        this.setState({
            list: this.props.data,
            page: 'All'
        })
    }

    processingPageHandler = () => {
        let processingPageContent = []

        processingPageContent = this.props.data.filter(ele => {
            return ele['status'] === 'processing'
        })

        this.setState({
            list: processingPageContent,
            page: 'Processing'
        })

    }

    donePageHandler = () => {
        let donePageContent = []

        donePageContent = this.props.data.filter(ele => {
            return ele['status'] === 'done'
        })

        console.log(donePageContent)

        this.setState({
            list: donePageContent,
            page: 'Done'
        })
    }

    editModeHandler = (id) => {
        this.setState({
            editModeId: id
        })
    }

    cancelHandler = (id) => {
        this.setState({
            editModeId: -1
        }) 
    }

    render() {
        return (
            <div>
                <Search searchHandler={this.searchHandler} />

                <List
                    data={this.state.list}
                    orderChangedHandler={this.props.orderChangedHandler}
                    resortOrderHandler={this.props.resortOrderHandler}
                    toggleToDone={this.props.toggleToDone}
                    deleteHandler={this.props.deleteHandler}
                    editModeHandler={this.editModeHandler}
                    editModeId={this.state.editModeId} 
                    cancelHandler={this.cancelHandler}
                    saveHandler={this.saveHandler}/>

                <Tabs
                    currentPage={this.state.page}
                    allPageHandler={this.allPageHandler}
                    processingPageHandler={this.processingPageHandler}
                    donePageHandler={this.donePageHandler} />
            </div>
        )
    }
}


export default MainContent