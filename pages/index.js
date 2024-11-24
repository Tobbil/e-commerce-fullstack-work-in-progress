import Header from "@/app/layout/Header.js";
import Body from "@/app/layout/Body.js";
import Footer from "@/app/layout/Footer.js";
import Navbar from "@/app/layout/Navbar.js";
import FeaturedItemTop from "@/app/components/FeaturedItemTop.js";
import FeaturedItemBright from "@/app/components/FeaturedItemBright";
import FeaturedItemGrey from "@/app/components/FeaturedItemGrey";
import FeaturedItemGrey2Cols from "@/app/components/FeaturedItemGrey2Cols";
import Categories from "@/app/components/Categories";
import TextWithPhoto2Cols from "@/app/components/TextWithPhoto2Cols";

export default function Home() {
  return (
    <>
      <Header>
        <Navbar />
        <FeaturedItemTop itemId={1} />
      </Header>
      <Body>
        <Categories />
        <FeaturedItemBright />
        <FeaturedItemGrey />
        <FeaturedItemGrey2Cols />
        <TextWithPhoto2Cols
          headlineText="BRINGING YOU THE BEST AUDIO GEAR"
          highlightIndex={3}
        />
      </Body>
      <Footer />
    </>
  );
}
