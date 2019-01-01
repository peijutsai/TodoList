import React, { Component } from 'react'

import Search from '../search/Search'
import List from '../list/List'
import Tabs from '../tabs/Tabs'

class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: this.props.data
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
                return ele['text'] === event.target.value
            })

            this.setState({
                list: filteredlist
            })
        }
    }



    render() {
        return (
            <div>
                <Search searchHandler={this.searchHandler} />
                <List
                    data={this.state.list}
                    orderChangedHandler={this.props.orderChangedHandler}
                    resortOrderHandler={this.props.resortOrderHandler} />
                <Tabs />
            </div>
        )
    }
}


export default MainContent