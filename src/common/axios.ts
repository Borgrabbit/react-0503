import { onRequest as onBaseRequest, onRequestProps as onBaseRequestProps } from 'outqource-react/shared';
import axios, { Method, AxiosRequestHeaders } from 'outqource-react/node_modules/axios';

const instance = axios.create({
  baseURL: 'https://api-dev.place-me.kr/',
});

instance.interceptors.request.use(async config => {
  console.log(`[${config.method?.toUpperCase()}] ${config.baseURL}${config.url} | `, config.data);

  const sessionToken = sessionStorage.getItem('sessionToken');
  if (sessionToken) {
    (config.headers as AxiosRequestHeaders)['Authorization'] = `${sessionToken}`;
  }

  return config;
});

instance.interceptors.response.use(response => {
  const { config, data } = response;
  console.log(`[${config.method?.toUpperCase()}] ${response.status} ${config.baseURL}${config.url} | `, data);
  return response;
});

type onRequestProps = Omit<onBaseRequestProps, 'method'> & { method?: Method };

const onRequest = (props: onRequestProps) =>
  onBaseRequest({
    ...props,
    instance,
    method: props?.method ?? 'POST',
    data: props?.data ?? {},
  });

export { instance };

export default onRequest;

