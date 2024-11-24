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
        <div className="grid justify-center grid-cols-2 h-[20rem] w-[69rem] mt-8 mb-8 gap-6">
          <div className="">
            <Image
              src={"/FeaturedYX1.png"}
              alt="YX1 earphones"
              width={530}
              height={320}
            />{" "}
            {/* ZMIEN ZEBY JAKOS DYNAMICZNIE BYLO TO LADOWANE A NIE HARCODING */}
          </div>
          <div className="bg-grey flex items-center justify-center">
            <SeeProductBoxNoDesc
              paddingDesc="pr-4"
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
