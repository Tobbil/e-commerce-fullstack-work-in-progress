import Categories from "../components/Categories";
import FeaturedItemBright from "../components/FeaturedItemBright";
import FeaturedItemGrey from "../components/FeaturedItemGrey";
import FeaturedItemGrey2Cols from "../components/FeaturedItemGrey2Cols"
import FeaturedItemTop from "../components/FeaturedItemTop";
import TextWithPhoto2Cols from "../components/TextWithPhoto2Cols";

export default function Body(props) {
  return (
    <>
      <main className="flex flex-col">
        {props.children}
      </main>
    </>
  );
}
