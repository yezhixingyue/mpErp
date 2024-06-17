/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

export interface IMpResponse<D = any> {
  Data: D
  DataNumber: number
  Message: string
  Status: number
}

export interface IMPAxiosInstance extends AxiosInstance {
  get<T = any, R = AxiosResponse<IMpResponse<T>>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  post<T = any, R = AxiosResponse<IMpResponse<T>>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
  put<T = any, R = AxiosResponse<IMpResponse<T>>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
  delete<T = any, R = AxiosResponse<IMpResponse<T>>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
}
