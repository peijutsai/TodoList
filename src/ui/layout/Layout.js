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

    keyPressHandler = (event) => {
        if (event.charCode === 13) {
            this.state.data.push({'order' : 1, 'text' : event.target.value, 'status' : 'processing'})
            event.target.value = ''
        }

        this.setState({
            data : this.state.data
        })
    }

    render() {
        let pageContent = <NoContent />

        if (this.state.data.length > 0) {
            pageContent = <MainContent data={this.state.data}/>
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