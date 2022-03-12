import React, { useEffect, useState } from 'react'
import BookTile from '../../Components/BookTile/BookTile'
import './BooksContainer.css'

const BooksContainer = () =>  {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])

  async function fetchBooks () {
    try {
      const title = 'power of moments'
      const result = await fetch(`http://openlibrary.org/search.json?title=${title}`)
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
    <div className='books-container'>
      {renderBooks()}
    </div>
    </>
  )
}

export default BooksContainer