import React from 'react'

const BookTile = props => {
  console.log(props)
  
  function renderBookCoverImage () {
    console.log('COVER', props.book.cover_i)
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
    <>
      <h3>{props.book.title}</h3>
      <h5 aria-label='author'>Author: {props.book.author_name}</h5>
      {props.book.cover_i
        ? renderBookCoverImage()
        : renderDefaultCoverImage()
      }
    </>
  )
}

export default BookTile