import "tailwindcss/tailwind.css";
import Image from "next/image";
import SeeProductBox from "./SeeProductBox";
import AddToCartBox from "./AddToCartBox";
import { useEffect, useState } from "react";

export default function Item2Cols(props) {
  const [item, setItem] = useState(null);
  const flexClass =
    props.imagePosition === "right" ? "flex-row-reverse" : "flex-row";
  const justifyBetween =
    props.imagePosition === "right" ? "justify-between" : "";

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

  return (
    <>
      <section className="self-center">
        <div className={`flex flex-col h-[35rem] w-[69rem] mt-16 mb-16 gap-6`}>
          <div
            className={`flex ${flexClass} ${justifyBetween} items-center gap-12`}
          >
            <Image
              src={item?.image || ""}
              alt={item?.imageAltTxt || ""}
              width={540}
              height={560}
            />
            <div className="flex flex-row h-full items-center justify-center w-[33rem]">
              {props.addToCart ? (
                <AddToCartBox
                  width="25rem"
                  paddingDesc="pr-4"
                  newProduct={item?.newProduct || null}
                  newProductFontColor="orange"
                  btnColor="orange"
                  txtColor="black"
                  headlineText={item?.name || ""}
                  descriptionText={item?.description || ""}
                  price={item?.price || 0}
                  itemId={props.itemId}
                />
              ) : (
                <SeeProductBox
                  width="30rem"
                  newProduct={item?.newProduct || null}
                  newProductFontColor="orange"
                  btnColor="orange"
                  txtColor="black"
                  headlineText={item?.name || ""}
                  descriptionText={item?.description || ""}
                  itemId={props.itemId}
                />
              )}
            </div>
          </div>
 
        </div>
      </section>
    </>
  );
}
