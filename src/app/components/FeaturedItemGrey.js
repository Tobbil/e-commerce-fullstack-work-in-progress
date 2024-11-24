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
        <div className="bg-featured-zx7-grey bg-no-repeat grid justify-center grid-cols-2 h-[20rem] w-[69rem] mt-8 mb-8 gap-6">
          <div className="flex items-center justify-center">
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
