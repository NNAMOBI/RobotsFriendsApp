import React from 'react'




const SearchBox = ({searchFieldChange}) => {
    return (
        <div className="pa2">
            <input onChange={searchFieldChange} className="pa2 ba b--green bg-lightest-blue" type="search" placeholder="search robots"></input>
        </div>
    )
}



export default SearchBox;