import { useEffect, useState } from 'react'
import BookTile from '../../Components/BookTile/BookTile'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Message from '../../Components/Message/Message'
import './BooksContainer.css'

const BooksContainer = () =>  {
  const [books, setBooks] = useState([])
  const [query, setQuery] = useState('design of everyday things')
  const [debouncedQuery, setDebouncedQuery] = useState(query)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)

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
        setIsLoading(false)
      } catch (e) {
        console.log(e)
        setError(true)
        setIsLoading(false)
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
        {isLoading ? <Message>Loading...</Message> : ''}
        {error ? <Message>Something wen't wrong!</Message> : renderBooks()}
      </div>
    </>
  )
}

export default BooksContainer