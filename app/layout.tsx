"use client";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";
import "./globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/client";

export const metadata: Metadata = {
  title: "AI-BABA | Home",
  description: "You are home",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
