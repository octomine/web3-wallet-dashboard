import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AddressInput } from '../AddressInput'

const translations: Record<string, string> = {
  'enterAddress': 'Enter address',
}
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => translations[key] || key
}))

describe('Address input', () => {
  it('should render input field', () => {
    render(<AddressInput />)
    const el = screen.getByTestId('input-control')

    expect(el).toBeInTheDocument()
  })

  it('should render placeholder', () => {
    render(<AddressInput />)
    const el = screen.getByPlaceholderText(translations.enterAddress)

    expect(el).toBeInTheDocument()
  })

  it('should render input value', () => {
    render(<AddressInput />)
    const el = screen.getByTestId('input-control')
    userEvent.type(el, 'test value')

    waitFor(() => {
      expect(el).toHaveValue('test value')
    })
  })
})
