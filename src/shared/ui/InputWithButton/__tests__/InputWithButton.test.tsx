import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { InputWithButton } from '../InputWithButton'

describe('InputWithButton', () => {
  it('should render', () => {
    render(<InputWithButton onSubmit={() => { }} />)
    const el = screen.getByTestId('input-with-button-control')

    expect(el).toBeInTheDocument()
  })

  it('should render input placeholder', () => {
    render(<InputWithButton onSubmit={() => { }} placeholder='Enter address' />)
    const el = screen.getByPlaceholderText('Enter address')

    expect(el).toBeInTheDocument()
  })

  it('should render button label', () => {
    render(<InputWithButton onSubmit={() => { }} buttonLabel='Submit' />)
    const el = screen.getByText('Submit')

    expect(el).toBeInTheDocument()
  })

  it('should render input value', async () => {
    render(<InputWithButton onSubmit={() => { }} />)

    const el = screen.getByTestId('input-control')
    await userEvent.type(el, 'test value')

    await waitFor(() => {
      expect(el).toHaveValue('test value')
    })
  })

  it('should submit value on click', async () => {
    const onSubmit = jest.fn()
    render(<InputWithButton onSubmit={onSubmit} />)

    const elInput = screen.getByTestId('input-control')
    const elButton = screen.getByTestId('button-control')

    await userEvent.type(elInput, 'test value')
    await waitFor(() => {
      expect(elInput).toHaveValue('test value')
    })

    userEvent.click(elButton)
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith('test value')
    })
  })

  it('should submit value on enter', async () => {
    const onSubmit = jest.fn()
    render(<InputWithButton onSubmit={onSubmit} />)

    const elInput = screen.getByTestId('input-control')

    await userEvent.type(elInput, 'test value')
    await waitFor(() => {
      expect(elInput).toHaveValue('test value')
    })

    userEvent.keyboard('{enter}')
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith('test value')
    })
  })
})
