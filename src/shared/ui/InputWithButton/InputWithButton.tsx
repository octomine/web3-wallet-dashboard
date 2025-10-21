'use client'

import { FC, useState } from "react"

import { Input } from "../Input"
import { Button } from "../Button"
import { IInputWithButtonProps } from "./InputWithButton.types"

export const InputWithButton: FC<IInputWithButtonProps> = ({ onSubmit, placeholder, buttonLabel }) => {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(value)
    }
  }

  return (
    <div data-testid='input-with-button-control' className="flex flex-row gap-2">
      <Input
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onEnter={handleSubmit}
      />
      <Button onClick={handleSubmit}>{buttonLabel}</Button>
    </div>
  )
}
