export interface IEtherscanResponse<T> {
  status: string;
  message: string;
  result: T;
}
