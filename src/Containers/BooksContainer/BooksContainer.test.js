import React from 'react'
import { render, screen } from '@testing-library/react'
import BooksContainer from './BooksContainer'

describe('BooksContainer component', () => {
  test('it renders the component', () => {
    render(<BooksContainer />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})

