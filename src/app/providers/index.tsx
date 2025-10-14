'use client'

import { QueryClientProvider } from "@tanstack/react-query"
import { FC, PropsWithChildren } from "react"
import { queryClient } from "@/shared/api/query-client"

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default Providers
