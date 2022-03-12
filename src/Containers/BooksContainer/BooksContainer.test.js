import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BooksContainer from './BooksContainer'

describe('BooksContainer component', () => {
  test('it renders the component', () => {
    render(<BooksContainer />)
    
    expect(screen.getByRole('heading', { name: 'Books!' })).toBeInTheDocument()
  })
})

