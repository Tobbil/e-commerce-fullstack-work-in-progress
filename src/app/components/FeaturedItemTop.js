import Image from "next/image";
import SeeProductBox from "../components/SeeProductBox";
import { useState, useEffect } from "react";

export default function FeaturedItemTop(props) {
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

  if (!item) { // Show black div until data is fetched from database
    return (
      <div className="m-0 w-screen bg-[#141414] h-[45rem]">Loading...</div>
    );
  }

  return (
    <div className="flex flex-cols gap-5 overflow-hidden text-darkwhite mb-14 h-[41rem]">
      <div className="flex items-center">
        <SeeProductBox
          width="w-[25rem]"
          paddingDesc="pr-16"
          newProduct={item?.newProduct || ""}
          newProductFontColor="white"
          btnColor="orange"
          txtColor="white"
          headlineText={item?.name || ""}
          descriptionText={item?.description || ""}
          itemId={1}
        />
      </div>
      <div className="relative flex-shrink-0 bottom-20 overflow-hidden scroll-">
        <Image
        className="bottom-50"
          src={"/header_headphones.png"}
          alt={"black headphones"}
          width={710}
          height={729}
        />
      </div>
    </div>
  );
}
