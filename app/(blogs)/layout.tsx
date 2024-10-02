import { Metadata } from "next";
import Provider from "@/components/Providers/ApolloProvider";

export const metadata: Metadata = {
  title: "AI-BABA | Home",
  description: "You are home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider>{children}</Provider>;
}
