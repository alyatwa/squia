import { auth } from "@/modules/Auth/lib";
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { getSession } from "next-auth/react";

const isServer = typeof window === "undefined";

const getAccessToken = async () => {
  let session = null;

  if (isServer) {
    const sessionServer = await auth();
    // console.log("sessionServer: ", (sessionServer as any)?.jwt);
    session = `${(sessionServer as any)?.jwt}`;
  } else {
    const clientSession = await getSession();
    // console.log("clientSession: ", (clientSession as any)?.jwt);
    session = (clientSession as any)?.jwt;
  }
  return session;
};

// Auth link to add the access token to headers
const authLink = setContext(async (_, { headers }) => {
  const token = await getAccessToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "", // Add the token to the Authorization header
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
    // Access additional details for 401 errors
    if ("statusCode" in networkError && networkError.statusCode === 401) {
      console.error("Authentication error details:", networkError);
    }
  }
});

const client = new ApolloClient({
  link: from([
    authLink,
    errorLink,
    new HttpLink({
      uri:
        process.env.NEXT_PUBLIC_GRAPHQL_URL ||
        "https://obscure-broccoli-r944pg66xrfwgj-8000.app.github.dev/graphql",
    }),
  ]),
  cache: new InMemoryCache(),
});

// Add this errorLink to your Apollo link chain

export default client;
