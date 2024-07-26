import Banner from "@/app/(common)/components/Banner";
import Navbar from "@/app/(common)/components/Navbar/Navbar";
import Work from "@/app/(common)/components/FeaturedBlogs";

export default async function Home() {
  return (
    <main>
      <Banner />
      <Work />
    </main>
  );
}
