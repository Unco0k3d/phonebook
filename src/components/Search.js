import React from 'react'

export default function Search(props){
    // console.log(props)
    return(
        <div>
            <input
                type="text"
                onChange={props.handleSearchValue}
                value={props.search}
                placeholder="Search Contacts"
            />
        </div>
    )
}