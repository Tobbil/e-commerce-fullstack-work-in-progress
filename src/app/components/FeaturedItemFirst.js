import "tailwindcss/tailwind.css";
import SeeProductBox from "./SeeProductBox";
import { useEffect, useState } from "react";

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
        <div className="bg-featured-zx9 grid content-center grid-cols-2 h-[35rem] w-[69rem] mt-32 mb-8 gap-6">
          <div></div>
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
