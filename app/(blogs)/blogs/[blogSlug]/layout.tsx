import { Metadata } from "next";
import Provider from "@/components/Providers/ApolloProvider";
import SidePanel from "@/components/SidePanel/SidePanel";

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
    <Provider>
      <div className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative">
        <SidePanel>{children}</SidePanel>
      </div>
    </Provider>
  );
}
