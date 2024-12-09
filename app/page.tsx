import Banner from "@/app/(common)/components/Banner/Banner";
import RecentPosts from "@/app/(common)/components/FeaturedBlogs";
import CategoryList from "./(common)/components/Categories/Categories";
import HighlightedArticle from "./(common)/components/HighlightedArticle/HighlightedArtcle";

export default async function Home() {
  return (
    <main>
      <Banner />
      <div className="mx-auto max-w-7xl relative px-4 md:px-6">
        <HighlightedArticle />
        <CategoryList />
        <div id="#recent_posts">
          <RecentPosts />
        </div>
      </div>
    </main>
  );
}
