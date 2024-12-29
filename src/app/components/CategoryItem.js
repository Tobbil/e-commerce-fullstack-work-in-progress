"use client";

import "tailwindcss/tailwind.css";
import Image from "next/image";
import SeeProductBox from "./SeeProductBox";
import { useEffect, useState } from "react";

export default function CategoryItem(props) {
  const [item, setItem] = useState(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [isTabletViewport, setIsTabletViewport] = useState(false);
  const [isDesktopViewport, setIsDesktopViewport] = useState(false);

  useEffect(() => {
    // Define a function to check the viewport size
    const handleResize = () => {
      setIsMobileViewport(window.innerWidth < 768);
      setIsTabletViewport(window.innerWidth >= 768 && window.innerWidth < 1024);
      setIsDesktopViewport(window.innerWidth >= 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const imagePosition = props.imagePosition;
  const desktopFlexClass =
    imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row";
  // change the whole logic for desktop/mobile/tablet to flex reverse on desktop and regular flex on others

  return (
    <>
      <section className="self-center w-[20rem] md:w-[43rem] lg:w-[69rem] mt-16 md:max-lg:mt-8 md:max-lg:mb-8 lg:mt-16 lg:mb-16">
        <div
          className={`flex flex-col text-center ${desktopFlexClass} items-center gap-12 lg:gap-24`}
        >
          <div>
            <Image
              className="block md:max-lg:hidden"
              src={`https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/${props.itemId}/category_item.png`}
              alt={item?.imageAltTxt || ""}
              width={540}
              height={560}
            />
            <Image
              className="hidden md:max-lg:block pb-8"
              src={`https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/${props.itemId}/category_item_tablet.png`}
              alt={item?.imageAltTxt || ""}
              width={689}
              height={352}
            />
          </div>
          <SeeProductBox
            width={isMobileViewport ? "20rem" : "25rem"}
            displayNewProductOverline={true}
            newProductFontColor="orange"
            btnColor="orange"
            txtColor="black"
            item={item}
          />
        </div>
      </section>
    </>
  );
}
