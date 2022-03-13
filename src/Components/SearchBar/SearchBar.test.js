import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('renders the component', () => {
    render(<SearchBar />)

    expect(screen.getByRole('textbox', { name: 'search' })).toBeVisible()
  })
})

