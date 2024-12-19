import "tailwindcss/tailwind.css";
import SeeProductBoxNoDesc from "./SeeProductBoxGreyNoDesc";
import { useEffect, useState } from "react";

export default function FeaturedItemGrey(props) {

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
        <div className="relative bg-no-repeat bg-[url('/FeaturedZX7Mobile.png')] md:bg-[url('/FeaturedZX7Tablet.png')] lg:bg-[url('/FeaturedZX7Desktop.png')]  flex justify-start h-[20rem] w-[20rem] md:w-[43rem] lg:w-[69rem] mt-8 mb-8 gap-6">
          <div className="flex items-center justify-center w-[25rem] h-[20rem] md:h-[17rem]">
            <SeeProductBoxNoDesc
              paddingDesc="pr-4"
              newProduct={item.newProduct}
              headlineText={item.name}
              descriptionText={item.description}
              itemId={5}
            />
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
