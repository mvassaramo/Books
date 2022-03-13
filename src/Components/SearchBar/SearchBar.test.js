import React from 'react'
import { render, screen } from '@testing-library/react'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('renders the component', () => {
    render(<SearchBar />)

    expect(screen.getByRole('textbox', { name: 'search' })).toBeVisible()
  })
})

