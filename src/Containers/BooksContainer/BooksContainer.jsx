import React, { useEffect, useState } from 'react'

const BooksContainer = () =>  {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])

  async function fetchBooks () {
    try {
      const title = 'why we sleep'
      const result = await fetch(`http://openlibrary.org/search.json?title=${title}`)
      const data = await result.json()
      const books = await data.docs
      setBooks(books)
    } catch (e) {
      return e
    }
  }

  return (
    <h1>Books!</h1>
  )
}

export default BooksContainer