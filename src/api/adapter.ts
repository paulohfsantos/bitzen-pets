import { api } from ".";
import { HttpClient } from "./httpClient";
// import { handleResponse } from "./utils/response";
// import { ApiResponse } from "../types/response";

export class AxiosAdapter implements HttpClient {
  async auth<T>(url: string, body: unknown): Promise<T> {
    const response = await api.post<T>(url, body);
    return response.data
  }

  async register<T>(url: string, body: unknown): Promise<T> {
    const response = await api.post<T>(url, body);
    return response.data
  }

  async get<T>(url: string, header: any): Promise<T> {
    const response = await api.get<T>(url, header);
    return response.data
  }

  async post<T>(url: string, body: unknown, header: any): Promise<T> {
    const response = await api.post<T>(url, body, header);
    return response.data
  }

  async put<T>(url: string, body: unknown, header: any): Promise<T> {
    const response = await api.put<T>(url, body, header);
    return response.data
  }

  async delete<T>(url: string, header: any): Promise<T> {
    const response = await api.delete<T>(url, header);
    return response.data
  }
}
