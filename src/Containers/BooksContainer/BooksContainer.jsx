import { useEffect, useState } from 'react'
import BookTile from '../../Components/BookTile/BookTile'
import SearchBar from '../../Components/SearchBar/SearchBar'
import './BooksContainer.css'

const BooksContainer = () =>  {
  const [books, setBooks] = useState([])
  const [query, setQuery] = useState('design')
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
      const {key, title, author_name, cover_i } = book
      return (
        <BookTile
         key={key}
         title={title}
         author_name={author_name}
         cover_i={cover_i} />
      )
    })
  }

  return (
    <>
    <header>
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