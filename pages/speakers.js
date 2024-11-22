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
          newItem={true}
          imagePosition="left"
          imageSrc="/ZX9-Speaker.png"
          imageAlt="black ZX9 speaker"
          imageWidth={540}
          imageHeight={560}
          headlineText="ZX9 Speaker"
          descriptionText="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          productLink=""
        />
        <CategoryItem
          newItem={false}
          imagePosition="right"
          imageSrc="/ZX7-Speaker.png"
          imageAlt="black ZX7 speaker"
          imageWidth={540}
          imageHeight={560}
          headlineText="ZX7 Speaker"
          descriptionText="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
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
