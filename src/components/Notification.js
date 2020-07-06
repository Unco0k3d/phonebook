import React from 'react'

const Notification=({confirm})=>{
    if(confirm===null)
        return null

    return(
        <div className='confirm'>
            {confirm}
        </div>
    )
}

export default Notification