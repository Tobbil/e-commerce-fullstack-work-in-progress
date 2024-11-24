import Header from "@/app/layout/Header.js";
import Body from "@/app/layout/Body.js";
import Footer from "@/app/layout/Footer.js";
import Navbar from "@/app/layout/Navbar.js";
import CategoryHeader from "@/app/components/CategoryHeader";
import Categories from "@/app/components/Categories";
import CategoryItem from "@/app/components/CategoryItem";
import TextWithPhoto2Cols from "@/app/components/TextWithPhoto2Cols";

export default function Headphones() {
  return (
    <>
      <Header>
        <Navbar />
        <CategoryHeader categoryName="HEADPHONES" />
      </Header>
      <Body>
        <CategoryItem
          imagePosition="left"
          imageWidth={540}
          imageHeight={560}
          itemId={1}
        />
        <CategoryItem
          imagePosition="right"
          imageWidth={540}
          imageHeight={560}
          itemId={2}
        />
        <CategoryItem
          imagePosition="left"
          imageWidth={540}
          imageHeight={560}
          itemId={3}
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
