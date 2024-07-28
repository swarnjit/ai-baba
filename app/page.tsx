import Banner from "@/app/(common)/components/Banner/Banner";
import Navbar from "@/app/(common)/components/Navbar/Navbar";
import Work from "@/app/(common)/components/FeaturedBlogs";
import CategoryList from "./(common)/components/Categories/Categories";

export default async function Home() {
  return (
    <main>
      <Banner />
      <div className="mx-auto h-screen max-w-7xl">
        <CategoryList />
        <Work />
      </div>
    </main>
  );
}
