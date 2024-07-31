import Banner from "@/app/(common)/components/Banner/Banner";
import Navbar from "@/app/(common)/components/Navbar/Navbar";
import Work from "@/app/(common)/components/FeaturedBlogs";
import CategoryList from "./(common)/components/Categories/Categories";
import HighlightedArticle from "./(common)/components/HighlightedArticle/HighlightedArtcle";

export default async function Home() {
  return (
    <main>
      <Banner />
      <div className="mx-auto max-w-7xl relative">
        <HighlightedArticle />
        <CategoryList />
        <Work />
      </div>
    </main>
  );
}
