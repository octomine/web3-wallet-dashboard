import axios from "axios";
import { ETHERSCAN_CONFIG } from "../config/etherscan.config";

export const apiClient = axios.create({
  baseURL: ETHERSCAN_CONFIG.baseURL,
})
