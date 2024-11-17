import Categories from "../components/Categories";
import FeaturedItemBright from "../components/FeaturedItemBright";
import FeaturedItemGrey from "../components/FeaturedItemGrey";
import FeaturedItemGrey2Cols from "../components/FeaturedItemGrey2Cols"

export default function Body() {
  return (
    <>
      <main className="flex flex-col">
        <Categories />
        <FeaturedItemBright />
        <FeaturedItemGrey />
        <FeaturedItemGrey2Cols />
      </main>
    </>
  );
}
