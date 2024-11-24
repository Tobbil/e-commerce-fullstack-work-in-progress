import Image from "next/image";
import SeeProductBox from "../components/SeeProductBox";
import React from "react";
import { useState, useEffect } from "react";

export default function FeaturedItemTop(props) {
  const [item, setItem] = useState(null);
  useEffect(() => {
    async function getItem() {
      try {
        const response = await fetch(`/api/item?id=${props.itemId}`);
        const item = await response.json()
        setItem(item[0]);
      } catch (error) {
        console.error("Error fetching item!");
      }
    }
    getItem();
    console.log(item);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5 overflow-hidden text-darkwhite mb-14">
      <div className="flex items-center">
        <SeeProductBox
          width="w-[25rem]"
          paddingDesc="pr-16"
          newProduct={item.newProduct}
          newProductFontColor="white"
          btnColor="orange"
          txtColor="white"
          headlineText={item.name}
          descriptionText={item.description}
        />
      </div>
      <div className="relative h-[45rem]">
        <Image
          className="absolute"
          src="/header_headphones.png"
          alt="black heapdhones"
          layout="responsive"
          width={1}
          height={1}
        />
      </div>
    </div>
  );
}
