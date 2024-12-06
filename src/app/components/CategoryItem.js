import "tailwindcss/tailwind.css";
import Image from "next/image";
import SeeProductBox from "./SeeProductBox";
import { useEffect, useState } from "react";

export default function CategoryItem(props) {
  const [item, setItem] = useState(null);
  console.log(props);
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
    console.log(item);
  }, [props.itemId]);

  const imagePosition = props.imagePosition;
  return (
    <>
      <section className="self-center">
        <div className="grid justify-center grid-cols-2 h-[35rem] w-[69rem] mt-16 mb-16 gap-6">
          <div className="flex flex-col items-center justify-center">
            {imagePosition === "left" ? (
              <Image
                src={item?.image || ""}
                alt={item?.imageAltTxt || ""}
                width={540}
                height={560}
              />
            ) : (
              <SeeProductBox
                paddingDesc="pr-4"
                displayNewProductOverline={true}
                newProductFontColor="orange"
                btnColor="orange"
                txtColor="black"
                item={item}
              />
            )}
          </div>
          <div className="flex flex-col items-center justify-center">
            {imagePosition === "right" ? (
              <Image
                src={item?.image || ""}
                alt={item?.imageAltTxt || ""}
                width={540}
                height={560}
              />
            ) : (
                <SeeProductBox
                paddingDesc="pr-4"
                displayNewProductOverline={true}
                newProductFontColor="orange"
                btnColor="orange"
                txtColor="black"
                item={item}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
