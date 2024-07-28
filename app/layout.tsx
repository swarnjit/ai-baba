import Navbar from "@/app/(common)/components/Navbar/Navbar";
import { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/Providers/ApolloProvider";
import Footer from "./(common)/components/Footer";

export const metadata: Metadata = {
  title: "AI-BABA | Home",
  description: "You are home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Provider>{children}</Provider>
        <Footer />
      </body>
    </html>
  );
}
