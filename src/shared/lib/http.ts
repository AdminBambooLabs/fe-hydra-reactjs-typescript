import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import { API_URL } from "./env.ts";

export const http = axios.create({
  baseURL: API_URL,
  timeout: 12_000,
});

export type HttpError = {
  status: number;
  message: string;
  details?: unknown;
};

function toHttpError(e: unknown): HttpError {
  const err = e as AxiosError<any>;
  if (err.response) {
    return {
      status: err.response.status,
      message: err.response.data?.message ?? err.message,
      details: err.response.data,
    };
  }
  if (err.request) {
    return { status: 0, message: "Network error or no response" };
  }
  return { status: -1, message: (e as Error).message };
}

export async function get<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const { data } = await http.get<T>(url, config);
    return data;
  } catch (e) {
    throw toHttpError(e);
  }
}

export async function post<T>(
  url: string,
  body?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const { data } = await http.post<T>(url, body, config);
    return data;
  } catch (e) {
    throw toHttpError(e);
  }
}

export async function put<T>(
  url: string,
  body?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const { data } = await http.put<T>(url, body, config);
    return data;
  } catch (e) {
    throw toHttpError(e);
  }
}

export async function del<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const { data } = await http.delete<T>(url, config);
    return data;
  } catch (e) {
    throw toHttpError(e);
  }
}
