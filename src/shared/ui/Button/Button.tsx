import { FC } from "react"
import { IButtonProps } from "./Button.types"

export const Button: FC<IButtonProps> = ({ onClick, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return <button data-testid='button-control' onClick={handleClick}>{children}</button>
}
