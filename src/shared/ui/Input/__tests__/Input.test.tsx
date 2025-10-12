import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Input } from '../Input'

describe('Input', () => {
  it('should render', () => {
    render(<Input value='test value' onChange={() => { }} />)
    const el = screen.getByTestId('input-control')

    expect(el).toBeInTheDocument()
  })

  it('should render with value', () => {
    render(<Input value='test value' onChange={() => { }} />)
    const el = screen.getByDisplayValue('test value')

    expect(el).toBeInTheDocument()
  })

  it('should call onChange', () => {
    const onChange = jest.fn()
    render(<Input value='test value' onChange={onChange} />)
    const el = screen.getByTestId('input-control')
    userEvent.type(el, 'test value');

    waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(1)
    })
  })

  it('should render with placeholder', () => {
    render(<Input value='test value' onChange={() => { }} placeholder='test placeholder' />)
    const el = screen.getByPlaceholderText('test placeholder')

    expect(el).toBeInTheDocument()
  })
})
