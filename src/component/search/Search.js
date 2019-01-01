import React from 'react'

import './Search.css'

const Search = (props) => {
    return (
        <input
            type='text'
            placeholder='Search the Todo List'
            className='Search'
            onKeyPress={props.searchHandler}
        />

    )
}

export default Search