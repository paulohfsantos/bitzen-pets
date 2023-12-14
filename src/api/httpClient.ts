import { AxiosRequestHeaders } from "axios";

export interface HttpClient {
  auth<T>(url: string, body: unknown): Promise<T>;
  register<T>(url: string, body: unknown): Promise<T>;
  get<T>(url: string, header: AxiosRequestHeaders): Promise<T>;
  post<T>(url: string, body: unknown, header: AxiosRequestHeaders): Promise<T>;
  put<T>(url: string, body: unknown, header: AxiosRequestHeaders): Promise<T>;
  delete<T>(url: string, header: AxiosRequestHeaders): Promise<T>;
}
