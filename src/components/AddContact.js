import React from 'react'

const AddContact=(props)=>{

    return(
        <form onSubmit={props.addContact}>
        <div>
          <input
            type="text"
            onChange={props.handleNameValue}
            placeholder="Name"
            value={props.newName}
            required
          />
        </div>
        <div>
          <input
            type="tel"
            onChange={props.handleNumberValue}
            placeholder="Number"
            // pattern="[0-9]{7}"
            value={props.newNumber}
            required
          />
          Format: 123-456-7890
          <div>
            <button type="submit">Enter</button>
          </div>
        </div>
      </form>
    )
}

export default AddContact