import Categories from "../components/Categories";
import FeaturedItems from "../components/FeaturedItems";

export default function Body() {
  return (
    <>
      <main className="flex flex-col">
        <Categories />
        <FeaturedItems />
      </main>
    </>
  );
}
