import React, { Component } from 'react'

import MainContent from '../../component/maincontent/MainContent'
import NoContent from '../../component/nocontent/NoContent'
import Input from '../../component/input/Input'

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    orderChangedHandler = (event, id) => {
        let newList = [...this.state.data]
        newList[id]['order'] = +event.target.value
        this.setState({
            data: newList
        })
    }

    resortOrderHandler = () => {
        let newList = [...this.state.data]
        newList.sort((ele1, ele2) => {

            if (ele1['order'] > ele2['order']) {
                return 1

            } else if (ele1['order'] < ele2['order']) {
                return -1

            } else {
                return 0
            }
        })

        // console.log(newList)

        this.setState({
            data: newList
        })
    }

    keyPressHandler = (event) => {
        if (event.charCode === 13) {
            this.state.data.push({ 'order': 1, 'text': event.target.value, 'status': 'processing' })
            event.target.value = ''
        }

        this.setState({
            data: this.state.data
        })
    }

    render() {
        let pageContent = <NoContent />

        if (this.state.data.length > 0) {
            pageContent =
                <MainContent
                    data={this.state.data}
                    orderChangedHandler={this.orderChangedHandler}
                    resortOrderHandler={this.resortOrderHandler} />
        }

        return (
            <div>
                {pageContent}
                <Input keyPressHandler={this.keyPressHandler} />
            </div>
        )
    }
}


export default Layout