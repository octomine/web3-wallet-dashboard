'use client'

import { QueryClientProvider } from "@tanstack/react-query"
import { FC, PropsWithChildren } from "react"
import { NextIntlClientProvider } from "next-intl"
import { queryClient } from "@/shared/api/query-client"
import messages from "@/shared/i18n/messages/ru.json"

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider locale="ru" messages={messages}>
        {children}
      </NextIntlClientProvider>
    </QueryClientProvider>
  )
}

export default Providers
