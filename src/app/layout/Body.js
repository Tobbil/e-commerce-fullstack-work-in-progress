import Categories from "../components/Categories";
import FeaturedItemBright from "../components/FeaturedItemBright";
import FeaturedItemGrey from "../components/FeaturedItemGrey"

export default function Body() {
  return (
    <>
      <main className="flex flex-col">
        <Categories />
        <FeaturedItemBright />
        <FeaturedItemGrey />
      </main>
    </>
  );
}
