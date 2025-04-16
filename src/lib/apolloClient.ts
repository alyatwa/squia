import { getSession as getServerSession } from "@/modules/Auth/lib";
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

const isServer = typeof window === "undefined";

const getAccessToken = async () => {
  let session = null;

  if (isServer) {
    const sessionServer = await getServerSession();
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

const client = new ApolloClient({
  link: from([
    authLink,
    new HttpLink({
      uri:
        process.env.NEXT_PUBLIC_GRAPHQL_URL ||
        "https://obscure-broccoli-r944pg66xrfwgj-8000.app.github.dev/graphql",
    }),
  ]),
  cache: new InMemoryCache(),
});

export default client;
