import { queryOptions } from "@tanstack/react-query";
import { ethers } from "ethers";
import { getBalance } from "./get-balance";

export const walletQueries = {
  balance: (address: string) =>
    queryOptions({
      queryKey: ["balance", address],
      queryFn: () => getBalance(address),
      enabled: !!address,
      select: (data) => ({
        wei: data,
        eth: ethers.formatEther(data), // TODO: move to utils/converter perhaps
      })
    })
}
