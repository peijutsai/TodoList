import React from 'react'

import Item from '../list/item/Item'

const List = (props) => {
    let list = []

    list = props.data.map((ele, i) => {
        return <li key={i} ><Item data={ele} /></li>
    })

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default List