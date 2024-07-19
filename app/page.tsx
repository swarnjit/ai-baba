import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar/Navbar";
import Work from "@/components/FeaturedBlogs";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Work />
    </main>
  );
}
