import React from 'react'
// import App from '../App'

const Contacts=({contact,remove})=>{
    return(
        <div>
            <p><b>{contact.name}:</b> {contact.number}
            <button onClick={remove}>delete</button></p>
            
        </div>
    )
}

export default Contacts