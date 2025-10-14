import { apiClient } from "@/shared/api/api-client";
import { IGetBalanceResponse } from "./types";

export const getBalance = async (address: string): Promise<string> => {
  try {
    const response = await apiClient.get<IGetBalanceResponse>('/', {
      params: {
        chainid: '1',
        module: 'account',
        tag: 'latest',
        action: 'balance',
        address,
        apikey: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY,
      }
    });
    return response.data.result
  } catch (error) {
    console.log(error)
    return 'ERROR!!1'// TODO: handle error
  }
}
