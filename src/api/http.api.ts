import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { ApiError } from '@app/api/ApiError';
import { readToken } from '@app/services/localStorage.service';

export const httpApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

httpApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${readToken()}`,
  } as AxiosRequestConfig['headers'];

  return config;
});

httpApi.interceptors.response.use(
  undefined,
  (error: AxiosError<{ message: string }>) => {
    throw new ApiError<ApiErrorData>(
      error.response?.data?.message || error.message,
      error.response?.data
    );
  }
);

export interface ApiErrorData {
  message: string;
}
