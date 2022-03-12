import React from 'react'
import './BookTile.css'

const BookTile = props => {  
  function renderBookCoverImage () {
    return (
      <img
        alt={`${props.book.title} cover`}
        src={`https://covers.openlibrary.org/b/id/${props.book.cover_i}-M.jpg`}
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
      <h3>{props.book.title}</h3>
      {props.book.cover_i
        ? renderBookCoverImage()
        : renderDefaultCoverImage()
      }
      <h5 aria-label='author'>Author: {props.book.author_name}</h5>
    </div>
  )
}

export default BookTile