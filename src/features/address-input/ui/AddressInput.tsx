'use client'

import { ChangeEvent, FC, useState } from "react";
import { useTranslations } from "next-intl";
import { Input } from "@shared/ui/Input";

export const AddressInput: FC = () => {
  const t = useTranslations()
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  return <Input value={value} onChange={handleOnChange} placeholder={t('enterAddress')}></Input>
}
