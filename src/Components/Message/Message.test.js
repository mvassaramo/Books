import { render, screen } from '@testing-library/react'
import Message from './Message'

describe('Message', () => {
  it('displays the given props', () => {
    const children='random message to be shown'
    render(<Message children={children} />)

    expect(screen.getByRole('heading', { name: 'random message to be shown' })).toBeVisible()
  })
})