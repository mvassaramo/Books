import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BookTile from './BookTile'

describe('BookTile', () => {
  it('renders the component', () => {
    const book = { title: 'random book title' }
    render(<BookTile book={book} />)

    expect(screen.getByRole('heading', { name: 'random book title' })).toBeInTheDocument()
  })
})