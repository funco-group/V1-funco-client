import axios from "axios";

export default async function getFavoriteCoinList(
  success: (response: AxiosResponse<any>) => void,
) {
  axios.get(`http://192.168.229.193:8080/crypto/favorite`).then(success);
}
