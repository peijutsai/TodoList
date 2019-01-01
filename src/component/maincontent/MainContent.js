import React, { Component } from 'react'

import Search from '../search/Search'
import List from '../list/List'
import Tabs from '../tabs/Tabs'

class MainContent extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         list : []
    //     }
    // }

    render() {
        return (
            <div>
                <Search />
                <List data={this.props.data}/>
                <Tabs />
            </div>
        )
    }
}


export default MainContent