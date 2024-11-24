import Header from "@/app/layout/Header.js";
import Body from "@/app/layout/Body.js";
import Footer from "@/app/layout/Footer.js";
import Navbar from "@/app/layout/Navbar.js";
import CategoryHeader from "@/app/components/CategoryHeader";
import Categories from "@/app/components/Categories";
import CategoryItem from "@/app/components/CategoryItem";
import TextWithPhoto2Cols from "@/app/components/TextWithPhoto2Cols";

export default function Speakers() {
  return (
    <>
      <Header>
        <Navbar />
        <CategoryHeader categoryName="SPEAKERS" />
      </Header>
      <Body>
        <CategoryItem
          imagePosition="left"
          itemId={4}
        />
        <CategoryItem
          imagePosition="right"
          itemId={5}
        />
        <Categories />
        <TextWithPhoto2Cols
          headlineText="BRINGING YOU THE BEST AUDIO GEAR"
          highlightIndex={3}
        />
      </Body>
      <Footer />
    </>
  );
}
