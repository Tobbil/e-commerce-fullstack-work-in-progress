import "tailwindcss/tailwind.css";
import SeeProductBoxNoDesc from "./SeeProductBoxGreyNoDesc";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FeaturedItemGrey2Cols(props) {
  const [item, setItem] = useState(null);
  useEffect(() => {
    async function getItem() {
      try {
        const response = await fetch(`/api/item?id=${props.itemId}`);
        const item = await response.json();
        setItem(item[0]);
      } catch (error) {
        console.error("Error fetching item!");
      }
    }
    getItem();
  }, [props.itemId]);

  if (!item) {
    // Show empty div until data is fetched from database
    return (
      <section className="self-center">
        <div className="bg-white h-[20rem] w-[69rem]">Loading...</div>
      </section>
    );
  }
  return (
    <>
      <section className="self-center">
        <div className="flex flex-col md:flex-row h-[26rem] w-[20rem] md:h-[18.5rem] md:w-[43rem] lg:w-[69rem] overflow-hidden mt-8 mb-8 gap-6">
          <div>
            <Image
            className="block md:hidden"
              src={"/FeaturedYX1Mobile.png"}
              alt={item.alt}
              width={327}
              height={200}
            />
            <Image
            className="hidden md:max-lg:block"
              src={"/FeaturedYX1Tablet.png"}
              alt={item.alt}
              width={339}
              height={320}
            />
            <Image
            className="hidden lg:block"
              src={"/FeaturedYX1Desktop.png"}
              alt={item.alt}
              width={540}
              height={320}
            />
          </div>
          <div className="bg-grey rounded-lg flex items-center justify-center h-[20rem] md:h-[18.5rem] w-[20rem] lg:w-[40rem] pl-6">
            <SeeProductBoxNoDesc
              headlineText={item?.name || ""}
              descriptionText={item?.name || ""}
              itemId={6}
            />
          </div>
        </div>
      </section>
    </>
  );
}
