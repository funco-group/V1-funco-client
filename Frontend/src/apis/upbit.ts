import axios, { AxiosResponse } from "axios";
import { ResCoinType } from "@/interfaces/PriceWindowType";
import { ResTickerType } from "@/interfaces/tradeHistory/follow/ResTickerType";

const url = "https://api.upbit.com";
const version = "v1";

export async function getCoinList(
  success: (response: AxiosResponse<ResCoinType[]>) => void,
) {
  await axios.get(`${url}/${version}/market/all`).then(success);
}

export async function getTickerPrice(
  success: (response: AxiosResponse<ResTickerType[]>) => void,
  markets: string,
) {
  await axios.get(`${url}/${version}/ticker?markets=${markets}`).then(success);
}
