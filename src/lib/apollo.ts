import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_URL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN_ACESS}`,
  },
  cache: new InMemoryCache(),
});
