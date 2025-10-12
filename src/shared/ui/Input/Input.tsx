import { FC } from "react"

import { IInputProps } from "./Input.types"

export const Input: FC<IInputProps> = ({ value, onChange, placeholder = '' }) => {
  return (
    <input data-testid='input-control' value={value} onChange={onChange} placeholder={placeholder}></input>
  )
}
