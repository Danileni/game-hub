import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5c6201c51a4343938d102f8d860e0e4a",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data);
  }
}

export default APIClient;