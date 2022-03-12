import React, { useEffect, useState } from 'react'
import BookTile from '../../Components/BookTile/BookTile'
import SearchBar from '../../Components/BookTile/SearchBar/SearchBar'
import './BooksContainer.css'

const BooksContainer = () =>  {
  const [books, setBooks] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    console.log('called useEffect')
    fetchBooks()
  }, [searchQuery])

  async function fetchBooks () {
    try {
      const result = await fetch(`http://openlibrary.org/search.json?title=${searchQuery}`)
      const data = await result.json()
      const books = await data.docs
      setBooks(books)
    } catch (e) {
      return e
    }
  }

  function renderBooks () {
    return books.map(book => {
      return <BookTile book={book} key={book.key}/>
    })
  }

  return (
    <>
    <h1>Books!</h1>
    <SearchBar handleSearch={(e) => setSearchQuery(e.target.value)}/>
    <div className='books-container'>
      {renderBooks()}
    </div>
    </>
  )
}

export default BooksContainer