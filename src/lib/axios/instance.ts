/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { getSession } from "next-auth/react";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Cache-control": "no-cache",
  Expires: 0,
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: headers,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  async (request) => {
    const session: any = await getSession();
    if (!session) return request;
    const token = `Bearer ${session.accessToken}`;
    request.headers.Authorization = token;
    return request;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (config) => config,
  (error) => Promise.reject(error)
);

export default instance;
