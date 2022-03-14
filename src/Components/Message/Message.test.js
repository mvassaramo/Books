import { render, screen } from '@testing-library/react'
import Message from './Message'

describe('Message', () => {
  it('renders the component', () => {
    render(<Message />)

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('displays the given props', () => {
    const children='random message to be shown'
    render(<Message children={children} />)

    expect(screen.getByText('random message to be shown')).toBeVisible()
  })
})