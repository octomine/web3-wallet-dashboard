'use client'

import { FC } from "react";
import { useTranslations } from "next-intl";
import { InputWithButton } from "@/shared/ui/InputWithButton";
import { useWalletStore } from "@/entities/wallet/model/wallet-store";

export const AddressInput: FC = () => {
  const t = useTranslations()
  const { setAddress } = useWalletStore()

  const handleSubmit = (address: string) => {
    setAddress(address);
  }

  return <InputWithButton onSubmit={handleSubmit} placeholder={t('enterAddress')} />
}
