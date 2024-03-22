import axios, { AxiosResponse } from "axios";
import { ResCoinType } from "@/interfaces/PriceWindowType";

export default async function getCoinList(
  success: (response: AxiosResponse<ResCoinType[]>) => void,
) {
  axios.get(`https://api.upbit.com/v1/market/all`).then(success);
}
