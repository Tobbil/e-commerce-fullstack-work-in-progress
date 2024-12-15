import Image from "next/image";
import SeeProductBox from "../components/SeeProductBox";
import { useState, useEffect } from "react";

export default function FeaturedItemTop(props) {
  const awsUrl = "https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com";
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
    // Show black div until data is fetched from database
    return (
      <div className="m-0 w-screen bg-[#141414] h-[45rem]">Loading...</div>
    );
  }

  return (
    <div
      // SKROC TE KLASE
      className={`w-screen bg-[url('https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/1/header_featured_sm_md.png')] 
                  bg-no-repeat bg-[center_bottom_2rem] lg:bg-none self-center flex flex-cols gap-5 overflow-hidden text-darkwhite 
                  mb-14 h-[41rem] justify-evenly pr-0 pl-0 lg:pr-40 lg:pl-40`}
    >
      <div className="flex items-center">
        <SeeProductBox
          width="w-[25rem]"
          paddingDesc="pr-16"
          newProductFontColor="white"
          displayNewProductOverline={true}
          btnColor="orange"
          txtColor="white"
          item={item}
        />
      </div>
      <div className="hidden lg:flex relative flex-shrink-0 overflow-hidden lg:bottom-10 left-5">
        <Image
          src={`${awsUrl}/items/${props.itemId}/header_featured.png`}
          alt={"black headphones"}
          width={710}
          height={729}
        />
      </div>
    </div>
  );
}
