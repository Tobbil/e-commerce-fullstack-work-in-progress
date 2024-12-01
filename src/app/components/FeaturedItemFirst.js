import SeeProductBox from "./SeeProductBox";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function FeaturedItemFirst(props) {
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
        <div className="bg-white h-[35rem] w-[69rem]">Loading...</div>
      </section>
    );
  }

  return (
    <>
      <section className="self-center">
        <div className="bg-featured-first-mobile md:bg-[url('/FeaturedFirstBgTablet.png')] lg:bg-[url('/FeaturedFirstBgDesktop.png')] bg-no-repeat flex flex-col justify-evenly md:justify-end lg:grid lg:grid-cols-2 content-center h-[45rem] w-[20rem] md:w-[43rem] lg:h-[35rem] lg:w-[69rem] mt-32 mb-8 gap-6 items-center">
          <div className="relative md:pb-0">
          <Image
              className="md:hidden justify-self-center"
              src="/ZX9-nobg-mobile.png"
              width={172}
              height={207}
              alt="black and white speaker"
            />
            <Image
              className="hidden md:max-lg:block justify-self-center"
              src="/ZX9-nobg-small.png"
              width={197}
              height={237}
              alt="black and white speaker"
            />
            <Image
              className="hidden lg:block absolute -top-[11.45rem] left-28"
              src="/ZX9-nobg-large.png"
              width={410}
              height={493}
              alt="black and white speaker"
            />
          </div>
          <div className="flex items-center justify-center">
            <SeeProductBox
              paddingDesc="pr-4"
              newProduct={item.newProduct}
              btnColor="black"
              txtColor="white"
              headlineText={item.name}
              descriptionText={item.description}
              itemId={4}
            />
          </div>
        </div>
      </section>
    </>
  );
}
