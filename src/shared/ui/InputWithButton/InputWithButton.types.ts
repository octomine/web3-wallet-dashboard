import { ReactNode } from "react";

export interface IInputWithButtonProps {
  onSubmit: (value: string) => void,
  placeholder?: string,
  buttonLabel?: ReactNode,
}
