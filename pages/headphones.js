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
          newItem={true}
          imagePosition="left"
          imageSrc="/XX99-MKII-Headphones.png"
          imageAlt="black XX99 MKII headphones"
          imageWidth={540}
          imageHeight={560}
          headlineText="XX99 Mark II Headphones"
          descriptionText="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          productLink=""
        />
        <CategoryItem
          newItem={false}
          imagePosition="right"
          imageSrc="/XX99-MKI-Headphones.png"
          imageAlt="black XX99 MKI headphones"
          imageWidth={540}
          imageHeight={560}
          headlineText="XX99 Mark I Headphones"
          descriptionText="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          productLink=""
        />
        <CategoryItem
          newItem={false}
          imagePosition="left"
          imageSrc="/XX59-Headphones.png"
          imageAlt="white XX59 headphones"
          imageWidth={540}
          imageHeight={560}
          headlineText="XX59 Headphones"
          descriptionText="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
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
