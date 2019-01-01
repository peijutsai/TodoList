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

    toggleToDone = (id) => {
        let doneData = this.state.data

        if (doneData[id]['status'] !== 'done') {
            doneData[id]['status'] = 'done'
        
        } else {
            doneData[id]['status'] = 'processing'
        }

        this.setState({
            data: doneData
        })
    }

    deleteHandler= (id) => {
        let content = this.state.data
        content.pop(id)

        this.setState({
            data: content
        }) 
    }

    render() {
        let pageContent = <NoContent />

        if (this.state.data.length > 0) {
            
            pageContent =
                <MainContent
                    data={this.state.data}
                    orderChangedHandler={this.orderChangedHandler}
                    resortOrderHandler={this.resortOrderHandler}
                    toggleToDone={this.toggleToDone} 
                    deleteHandler={this.deleteHandler}/>
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