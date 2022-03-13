import React from 'react'
import './BookTile.css'

const BookTile = ({ title, cover_i, author_name}) => {  
  function renderBookCoverImage () {
    return (
      <img
        alt={`${title} cover`}
        src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
      />
    )
  }

  function renderDefaultCoverImage () {
    return (
      <img
        alt='book cover unavailable'
        src='https://dhmckee.com/wp-content/uploads/2018/11/defbookcover-min.jpg'
      />
    )
  }

  return (
    <div className='book-tile'>
      <h3>{title}</h3>
      {cover_i
        ? renderBookCoverImage()
        : renderDefaultCoverImage()
      }
      <h5 aria-label='author'>Author: {author_name}</h5>
    </div>
  )
}

export default BookTile