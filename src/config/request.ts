// import { getSession as getServerSession } from "@/modules/Auth/lib";
import axios, { CreateAxiosDefaults } from "axios";
import { getSession } from "next-auth/react";

const BACKEND_URL = process.env["NEXT_PUBLIC_BACKEND_APP_URL"];

const apiRequest = () => {
  const defaultOptions: CreateAxiosDefaults = {
    timeout: 4000,
    baseURL: `${BACKEND_URL}/api/v1/`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (request) => {
    const isServer = typeof window === "undefined";

    let session = null;

    if (isServer) {
      //   const sessionServer = await getServerSession();
      //   session = `${(sessionServer as any)?.access_token}`;
    } else {
      const clientSession = await getSession();
      console.log("clientSession: ", clientSession);
      session = (clientSession as any)?.access_token;
    }

    if (session) {
      //@ts-ignore
      request.headers.Authorization = `Bearer ${session}`;
    }
    return request;
  });
  return instance;
};

export default apiRequest();
