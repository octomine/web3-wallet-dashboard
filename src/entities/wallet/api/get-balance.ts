import { ETHERSCAN_CONFIG } from "@/shared/config/etherscan.config";
import { apiClient } from "@shared/api/api-client";
import { IEtherscanResponse } from "@shared/api/types";

export const getBalance = async (address: string): Promise<string> => {
  try {
    const response = await apiClient.get<IEtherscanResponse<string>>('/', {
      params: {
        chainid: '1',
        module: 'account',
        tag: 'latest',
        action: 'balance',
        address,
        apikey: ETHERSCAN_CONFIG.apikey,
      }
    })
    return response.data.result
  } catch (error) {
    console.log(error)
    return 'ERROR!!1'// TODO: handle error
  }
}
