import { AxiosResponse } from "axios";
import localAxios from "@/utils/http-commons";
import { FavoriteCoinResponseType } from "@/interfaces/PriceWindowType";

const domain = "crypto";
// const version = "v1";

export async function getFavoriteCoinList(
  success: (response: AxiosResponse<FavoriteCoinResponseType>) => void,
) {
  await localAxios.get(`/${domain}/favorite`).then(success);
}

export async function addFavoriteCoin(code: string) {
  await localAxios.post(`/${domain}/favorite`, {
    ticker: code,
  });
}

export async function removeFavoriteCoin(code: string) {
  await localAxios.delete(`/${domain}/favorite/${code}`);
}
