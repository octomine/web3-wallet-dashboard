import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'

import { Button } from '../Button'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
  it('should render', () => {
    render(<Button onClick={() => { }}>Button</Button>)
    const el = screen.getByTestId('button-control')

    expect(el).toBeInTheDocument()
  })

  it('should render label', () => {
    render(<Button onClick={() => { }}>test button</Button>)
    const el = screen.getByText('test button')

    expect(el).toBeInTheDocument()
  })

  it('should call onClick', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>test buttn</Button>)
    const el = screen.getByTestId('button-control')
    userEvent.click(el)

    waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })
})
