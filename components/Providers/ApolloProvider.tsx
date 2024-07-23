"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/client";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
