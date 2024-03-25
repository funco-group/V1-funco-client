import axios, { AxiosResponse } from "axios";
import { ResCoinType } from "@/interfaces/PriceWindowType";

const url = "https://api.upbit.com";
const version = "v1";

export async function getCoinList(
  success: (response: AxiosResponse<ResCoinType[]>) => void,
) {
  await axios.get(`${url}/${version}/market/all`).then(success);
}

export async function getCurPrice(code: string) {
  await axios.get(`${url}/${version}/ticker/?markets=${code}`);
}
