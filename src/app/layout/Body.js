import Categories from "../components/Categories";
import FeaturedItemBright from "../components/FeaturedItemBright";
import FeaturedItemGrey from "../components/FeaturedItemGrey";
import FeaturedItemGrey2Cols from "../components/FeaturedItemGrey2Cols"
import TextWithPhoto2Cols from "../components/TextWithPhoto2Cols";

export default function Body() {
  return (
    <>
      <main className="flex flex-col">
        <Categories />
        <FeaturedItemBright />
        <FeaturedItemGrey />
        <FeaturedItemGrey2Cols />
        <TextWithPhoto2Cols headlineText="BRINGING YOU THE BEST AUDIO GEAR" highlightIndex={3}/>
      </main>
    </>
  );
}
