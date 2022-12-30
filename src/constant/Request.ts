import Axios, {AxiosResponse, AxiosError} from 'axios';

const BASE_URL: string = 'https://a005-110-136-216-104.ngrok.io';

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
  return Axios.get(`${BASE_URL}/api/${url}`, config)
    .then((response: AxiosResponse<any>): any => {
      return response;
    })
    .catch((err: AxiosError) => err);
};

export const PostRequest = async (
  url: string,
  data: any,
  config: any = null,
): Promise<any> => {
  return Axios.post(`${BASE_URL}/api/${url}`, data, config)
    .then((response: AxiosResponse<any>): any => {
      return response;
    })
    .catch((error: AxiosError): any => {
      return error;
    });
};
