import Image from "next/image";
import SeeProductBox from "../components/SeeProductBox";

export default function FeaturedItemTop() {
  return (
    <div className="grid grid-cols-2 gap-5 overflow-hidden text-darkwhite">
      <div className="flex items-center">
        <SeeProductBox
          dimensions="h-400 w-400"
          paddingDesc="pr-16"
          newProduct={true}
          btnColor="orange"
          txtColor="white"
          headlineText="XX99 MARK II HEADPHONES"
          descriptionText="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        />
      </div>
      <div className="relative h-[45rem]">
        <Image
          className="absolute"
          src="/header_headphones.png"
          alt="black heapdhones"
          width={710}
          height={729}
        />
      </div>
    </div>
  );
}
