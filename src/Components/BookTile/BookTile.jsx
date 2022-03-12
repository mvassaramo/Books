import React from 'react'

const BookTile = props => {
  console.log({ props })
  return (
    <><h3>{props.book.title}</h3></>
  )
}

export default BookTile