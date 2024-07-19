import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCSM_URL,
  cache: new InMemoryCache(),
});
