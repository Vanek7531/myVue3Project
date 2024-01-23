import { refreshToken } from "@/use/helper";
import axios from "axios";
// // The base URL for API requests
const API_URL = "/api";

// Create an instance of axios with the base URL of the API
const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BACK_URL,
});

declare module "axios" {
  export interface InternalAxiosRequestConfig {
    meta: any;
  }
}

http.interceptors.request.use(
  async (config) => {
    // Тут можем описывать уходящий запрос
    // Приделывать к нему хедеры и обрабатывать данные для отправки

    let token = sessionStorage.getItem("tokenAccess");
    if (token && token.length > 0) {
      (config.headers!["Authorization"] = `Bearer ${(token = token
        ?.slice(1, 5)
        .includes("ey")
        ? token?.slice(1, -1)
        : token)}`),
        refreshToken();
    }

    // console.log("here каждый запрос?");
    // if (token && token?.length > 0) {
    // ...config.headers,
    // (config.headers!["Authorization"] = `Bearer ${(token = token
    //   ?.slice(1, 5)
    //   .includes("ey")
    //   ? token?.slice(1, -1)
    //   : token)}`),
    //   refreshToken();
    // Authorization: `token ${token}`,

    // }

    return config;
  },
  (error) => Promise.reject(error)
);

const httpService: any = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch,
};

// Export axios instance
export default httpService;
