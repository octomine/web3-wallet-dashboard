import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
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

  it('should call onChange', async () => {
    const onChange = jest.fn()
    render(<Input value='' onChange={onChange} />)
    const el = screen.getByTestId('input-control')
    await userEvent.type(el, 'test');

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(4)
    })
  })

  it('should call onEnter on enter key up', async () => {
    const onEnter = jest.fn()
    render(<Input value='test value' onChange={() => { }} onEnter={onEnter} />)
    const el = screen.getByTestId('input-control')

    fireEvent.keyUp(el, { key: 'Enter', code: 'Enter', keyCode: 13, charCode: 13 })
    await waitFor(() => {
      expect(onEnter).toHaveBeenCalled()
    })
  })

  it('should render with placeholder', () => {
    render(<Input value='test value' onChange={() => { }} placeholder='test placeholder' />)
    const el = screen.getByPlaceholderText('test placeholder')

    expect(el).toBeInTheDocument()
  })
})
