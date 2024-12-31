import "tailwindcss/tailwind.css";
import Image from "next/image";
import SeeProductBox from "./SeeProductBox";
import AddToCartBox from "./AddToCartBox";
import { useEffect, useState } from "react";

export default function Item2Cols(props) {
  const [item, setItem] = useState(null);
  const flexClass =
    props.imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row";
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
  }, [props.itemId]);

  return (
    <>
      <section className="self-center">
        <div
          className={
            "flex flex-col md:h-full lg:h-[35rem] md:w-[43rem] lg:w-[69rem] mt-16 mb-16 gap-6"
          }
        >
          <div
            className={`flex flex-col ${flexClass} ${justifyBetween} items-center md:gap-24 lg:gap-12`}
          >
            <Image
              className="hidden lg:block"
              src={`https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/${props.itemId}/category_item.png`}
              alt={item?.imageAltTxt || ""}
              width={540}
              height={560}
            />
            <Image
              className="hidden md:max-lg:block"
              src={`https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/${props.itemId}/product_detail_top_tablet.png`}
              alt={item?.imageAltTxt || ""}
              width={281}
              height={480}
            />
            <Image
              className="md:hidden mb-12"
              src={`https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/${props.itemId}/product_detail_top_mobile.png`}
              alt={item?.imageAltTxt || ""}
              width={327}
              height={327}
            />
            <div className="flex flex-row h-full items-center justify-center md:w-[20rem] lg:w-[33rem]">
              {props.addToCart ? (
                item ? (
                  <AddToCartBox
                    width="20rem"
                    newProduct={item?.newProduct || null}
                    newProductFontColor="orange"
                    btnColor="orange"
                    txtColor="black"
                    headlineText={item?.name || ""}
                    descriptionText={item?.description || ""}
                    price={item?.price || 0}
                    itemId={props.itemId}
                    item={item}
                  />
                ) : (
                  <p>Loading...</p>
                )
              ) : (
                <SeeProductBox
                  width="25rem"
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
