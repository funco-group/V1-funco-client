import axios from "axios";

// const { VITE_VUE_API_URL } = import.meta.env;

const localAxios = axios.create({
  // baseURL: VITE_VUE_API_URL,
  baseURL: "http://192.168.229.193:8080",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

localAxios.interceptors.request.use(
  function (config) {
    if (sessionStorage.getItem("accessToken")) {
      config.headers.Authorization = `Bearer ${sessionStorage.getItem(
        "accessToken",
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// localAxios.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//         if (error.response.status === httpStatusCode.UNAUTHORIZED) {
//             tokenRegenerate();
//             error.config.headers = {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
//             };
//             const response = await axios.request(error.config);
//             return response;
//         }
//         return Promise.reject(error);
//     }
// );

export default localAxios;
