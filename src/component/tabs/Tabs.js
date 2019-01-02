import React from 'react'

import './Tabs.css'

const Tabs = (props) => {
    let all = ''
    let processing = ''
    let done = ''

    if(props.page === 'All') {
        all = 'ChangeColor'
    
    } else if (props.page === 'Processing') {
        processing = 'ChangeColor'

    } else {
        done = 'ChangeColor'
    }


    return (
        <div className='Tabs'>
            <button onClick={() => props.changePageHandler("All")} className={all}>All</button>
            <button onClick={() => props.changePageHandler("Processing")} className={processing}>Processing</button>
            <button onClick={() => props.changePageHandler("Done")} className={done}>Done</button>
        </div>
    )
}

export default Tabs