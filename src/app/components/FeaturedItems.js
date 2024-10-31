import "tailwindcss/tailwind.css";
import CategoryThumbnail from "./CategoryThumbnail";
import Image from "next/image";
import SeeProductBox from "./SeeProductBox";

export default function FeaturedItems() {
  return (
    <>
      <div className="w-screen justify-items-center">
        <div className="bg-featured-zx9 grid grid-cols-2 h-[560px] w-[1110px] mt-32 gap-6">
          <div></div>
          <div className="">
            <SeeProductBox
              textColor={"white"}
              newProduct={false}
              lowerOpacityNewProduct={false}
              btnColor={"#D87D4A"}
              headlineText="ZX9 SPEAKER"
              descriptionText="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
            />
          </div>
        </div>
      </div>
    </>
  );
}
