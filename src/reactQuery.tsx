"use client";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import { createNotification } from "./components/Notifications";

// import { ApiErrorTypes, TApiErrors } from "./hooks/api/types";

export const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.log("mutationCache error queryClient: ", error);
        const serverResponse = error.response?.data; //as TApiErrors;
        // if (serverResponse?.error === ApiErrorTypes.ValidationError) {
        //    createNotification({
        //       title: "Validation Error",
        //       type: "error",
        //       text: (
        //          <div>
        //             {serverResponse.message?.map(({ message, property }) => (
        //                <div
        //                   className="flex space-y-2"
        //                   key={property}
        //                >
        //                   <div>
        //                      Field <i>{property}</i> {message.toLowerCase()}
        //                   </div>
        //                </div>
        //             ))}
        //          </div>
        //       ),
        //    });
        //    return;
        // }
        if (serverResponse?.statusCode === 401) {
          createNotification({
            title: "Forbidden Access",
            type: "error",
            text: serverResponse.message,
          });
          return;
        }

        createNotification({
          title: "Bad Request",
          type: "error",
          text: (serverResponse as any)?.message ?? "Try later",
        });
      } else {
        createNotification({
          title: "Unknown Error",
          type: "error",
          text: "Try later",
        });
        console.log("error mutationCache: ", error);
      }
    },
  }),
  queryCache: new QueryCache({
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.log("error queryClient: ", error);
        if (error.code == "ERR_NETWORK") {
          /*  createNotification({
                  title: "Internet connection dropped",
                  type: "error",
                  text: "Check you internet connection",
               }); */
        }
      }
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
