import React from 'react'
import './SearchBar.css'

const SearchBar = props => {
  return (
    <input
      type='text'
      aria-label='search'
      className='search-bar'
      placeholder='search'
      onChange={props.handleSearch}/>
  )
}

export default SearchBar