import { queryOptions } from "@tanstack/react-query";
import { getBalance } from "./get-balance";

export const walletQueries = {
  balance: (address: string) =>
    queryOptions({
      queryKey: ["balance", address],
      queryFn: () => getBalance(address),
    })
}
