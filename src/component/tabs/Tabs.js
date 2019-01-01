import React from 'react'

import './Tabs.css'

const Tabs = (props) => {
    let all = ''
    let processing = ''
    let done = ''

    if(props.currentPage === 'All') {
        all = 'ChangeColor'
    
    } else if (props.currentPage === 'Processing') {
        processing = 'ChangeColor'

    } else {
        done = 'ChangeColor'
    }


    return (
        <div className='Tabs'>
            <button onClick={() => props.allPageHandler()} className={all}>All</button>
            <button onClick={() => props.processingPageHandler()} className={processing}>Processing</button>
            <button onClick={() => props.donePageHandler()} className={done}>Done</button>
        </div>
    )
}

export default Tabs