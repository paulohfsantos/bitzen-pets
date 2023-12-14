import { AxiosResponse } from "axios";

export function handleResponse<T>(response: AxiosResponse<T>): T {
  const { status } = response;
  const possibleStatus = [400, 404, 500];
  const authStatus = [401, 403];

  if (possibleStatus.includes(status)) {
    throw new Error('Status inválido');
  }

  if (authStatus.includes(status)) {
    throw new Error('Não autorizado');
  }

  return response.data;
}
