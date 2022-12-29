import Axios, {AxiosResponse, AxiosError} from 'axios';

Axios.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  },
);

export const GetRequest = async (
  url: string,
  config: any = null,
): Promise<any> => {
  Axios.get(url, config)
    .then((response: AxiosResponse<any>): any => {
      return response;
    })
    .catch((err: AxiosError) => err);
};

export const PostRequest = async (
  url: string,
  data: any,
  config: any = null,
): Promise<void> => {
  return Axios.post(url, data, config)
    .then((response: AxiosResponse<any>): any => {
      return response;
    })
    .catch((error: AxiosError): any => {
      return error;
    });
};
