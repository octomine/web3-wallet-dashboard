import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useWalletStore } from '@entities/wallet/model/wallet-store'
import { AddressInput } from '../AddressInput'

const translations: Record<string, string> = {
  'enterAddress': 'Enter address',
}

const someAddress = '0x1234567890'
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => translations[key] || key
}))

describe('Address input', () => {
  it('should render successfulley', () => {
    render(<AddressInput />)
    const el = screen.getByTestId('input-with-button-control')

    expect(el).toBeInTheDocument()
  })

  it('should render placeholder', () => {
    render(<AddressInput />)
    const el = screen.getByPlaceholderText(translations.enterAddress)

    expect(el).toBeInTheDocument()
  })

  it('should update wallet store on submit', async () => {
    render(<AddressInput />)
    const inputEl = screen.getByTestId('input-control')
    const buttonEl = screen.getByTestId('button-control')

    expect(useWalletStore.getState().address).toBe('')

    await userEvent.type(inputEl, someAddress)
    await waitFor(() => {
      expect(inputEl).toHaveValue(someAddress)
    })

    await userEvent.click(buttonEl)
    await waitFor(() => {
      // TODO: разобраться как тестировать методы в сторе
      // expect(useWalletStore.getState().setAddress).toHaveBeenCalled()
      expect(useWalletStore.getState().address).toBe(someAddress)
    })
  })
})
