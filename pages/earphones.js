import Header from "@/app/layout/Header.js";
import Body from "@/app/layout/Body.js";
import Footer from "@/app/layout/Footer.js";
import Navbar from "@/app/layout/Navbar.js";
import CategoryHeader from "@/app/components/CategoryHeader";
import Categories from "@/app/components/Categories";
import CategoryItem from "@/app/components/CategoryItem";
import TextWithPhoto2Cols from "@/app/components/TextWithPhoto2Cols";

export default function Earphones() {
  return (
    <>
      <Header>
        <Navbar />
        <CategoryHeader categoryName="EARPHONES" />
      </Header>
      <Body>
        <CategoryItem
          newItem={true}
          imagePosition="left"
          imageSrc="/YX1-Earphones.png"
          imageAlt="black YX1 wireless earphones"
          imageWidth={540}
          imageHeight={560}
          headlineText="YX1 Wireless Earphones"
          descriptionText="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          productLink=""
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
