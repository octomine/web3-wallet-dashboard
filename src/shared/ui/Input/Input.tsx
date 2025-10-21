import { FC } from "react"

import { IInputProps } from "./Input.types"

export const Input: FC<IInputProps> = ({ value, onChange, onEnter, placeholder = '' }) => {
  const enterKeyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && event.key === 'Enter') {
      onEnter()
    }
  }

  return (
    <input
      data-testid='input-control'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyUp={enterKeyHandler}
    />
  )
}
