import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BookTile from './BookTile'

describe('BookTile', () => {
  it('displays the book title', () => {
    const title = 'random book title'
    render(<BookTile title={title} />)

    expect(screen.getByRole('heading', { name: 'random book title' })).toBeInTheDocument()
  })

  it('displays the book author', () => {
    const title = 'random book title'
    const author_name = 'author name'
    render(<BookTile title={title} author_name={author_name} />)

    expect(screen.getByText('Author: author name')).toBeInTheDocument()
  })

  it('displays the book cover image if there is an isbn', () => {
    const title = 'book with image'
    const cover_i = 12345
    render(<BookTile title={title} cover_i={cover_i} />)

    expect(screen.getByRole('img', { name: 'book with image cover'})).toBeVisible()
  })

  it('displays a default image if book has no isbn', () => {
    render(<BookTile />)

    expect(screen.getByRole('img', { name: 'book cover unavailable'})).toBeVisible()
  })
})