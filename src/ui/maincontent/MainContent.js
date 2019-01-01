import React, { Component } from 'react'

import NoToDO from '../../component/notodos/NoToDos'
import AddNewItem from '../../component/addnewitem/AddNewItem'

class MainContent extends Component {
    render() {
        return (
            <div>
                <NoToDO />
                <AddNewItem />
            </div>
        )

    }
}

export default MainContent