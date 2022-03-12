import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BookTile from './BookTile'

describe('BookTile', () => {
  it('displays the book title', () => {
    const book = { title: 'random book title' }
    render(<BookTile book={book} />)

    expect(screen.getByRole('heading', { name: 'random book title' })).toBeInTheDocument()
  })

  it('displays the book author', () => {
    const book = { title: 'random book title', author_name: 'author name' }
    render(<BookTile book={book} />)
    screen.debug()
    expect(screen.getByRole('heading', { name: 'author' })).toBeInTheDocument()
  })

  it('displays the book cover image if there is an isbn', () => {
    const book = { title: 'book with image', author_name: 'author name', cover_i: 12345 }
    render(<BookTile book={book} />)

    expect(screen.getByRole('img', { name: 'book with image cover'})).toBeVisible()
  })

  it('displays a default image if book has no isbn', () => {
    const book = { title: 'book with image', author_name: 'author name' }
    render(<BookTile book={book} />)

    expect(screen.getByRole('img', { name: 'book cover unavailable'})).toBeVisible()
  })
})