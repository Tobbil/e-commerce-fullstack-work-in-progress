import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

export default function RecommendedItem(props) {
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

  return (
    <div className="flex flex-col w-[20rem] self-center items-center mt-14">
      <Image
        className="md:hidden"
        src={`https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/${props.itemId}/product_detail_recommended_mobile.png`}
        alt={item?.imageAltTxt || ""}
        width={327}
        height={120}
      />
      <Image
        className="hidden md:max-lg:block"
        src={`https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/${props.itemId}/product_detail_recommended_tablet.png`}
        alt={item?.imageAltTxt || ""}
        width={223}
        height={318}
      />

      <Image
        className="hidden lg:block"
        src={`https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/${props.itemId}/product_detail_recommended.png`}
        alt={item?.imageAltTxt || ""}
        width={350}
        height={318}
      />
      <h1 className="text-fs-32 text-center mt-8 mb-4">
        {item?.shortName.toUpperCase() || ""}
      </h1>
      <Link href={`/item/${props.itemId}`}>
        <button
          className={`text-fs-13 font-semibold tracking-100 text-white h-12 w-40 mt-4 mb-10 md:mt-6 md:mb-6 lg:mt-0 lg:mb-0 bg-[#D87D4A] hover:bg-[#FBAF85]`}
        >
          SEE PRODUCT
        </button>
      </Link>
    </div>
  );
}
