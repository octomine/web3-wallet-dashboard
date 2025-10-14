interface IBaseResponse {
  status: string;
  message: string;
}

export interface IGetBalanceResponse extends IBaseResponse {
  result: string;
}
