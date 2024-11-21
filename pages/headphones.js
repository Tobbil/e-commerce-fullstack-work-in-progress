import Header from "@/app/layout/Header.js";
import Body from "@/app/layout/Body.js";
import Footer from "@/app/layout/Footer.js";
import Navbar from "@/app/layout/Navbar.js";
import CategoryHeader from "@/app/components/CategoryHeader";
import Categories from "@/app/components/Categories";
import CategoryItem from "@/app/components/CategoryItem";

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
          imageSrc="/XX99MKIIHeadphones.png"
          imageAlt="black XX99 MKII headphones"
          imageWidth={540}
          imageHeight={560}
          headlineText="XX99 Mark II Headphones"
          descriptionText="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          productLink=""
        />
        <Categories />
      </Body>
      <Footer />
    </>
  );
}
