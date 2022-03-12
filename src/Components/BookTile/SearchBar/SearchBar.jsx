import React from 'react'

const SearchBar = props => {
  return (
    <input aria-label='search' onChange={props.handleSearch}/>
  )
}

export default SearchBar