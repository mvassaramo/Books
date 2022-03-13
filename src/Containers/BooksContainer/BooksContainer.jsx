import { useEffect, useState } from 'react'
import BookTile from '../../Components/BookTile/BookTile'
import SearchBar from '../../Components/SearchBar/SearchBar'
import './BooksContainer.css'

const BooksContainer = () =>  {
  const [books, setBooks] = useState([])
  const [query, setQuery] = useState('design of everyday things')
  const [debouncedQuery, setDebouncedQuery] = useState(query)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query)
    }, 1000)

    return () => {
      clearTimeout(timerId)
    }
  }, [query])

  useEffect(() => {
    async function fetchBooks () {
      try {
        const result = await fetch(`http://openlibrary.org/search.json?title=${query}`)
        const data = await result.json()
        const books = await data.docs
        setBooks(books)
      } catch (e) {
        return e
      }
    }

    fetchBooks()
  }, [debouncedQuery])



  function renderBooks () {
    return books.map(book => {
      return <BookTile book={book} key={book.key}/>
    })
  }

  return (
    <>
    <header>
      <h1>Books!</h1>
      <SearchBar
        handleSearch={(e) => setQuery(e.target.value)}
      />
    </header>
    <div className='books-container'>
      {renderBooks()}
    </div>
    </>
  )
}

export default BooksContainer