import "tailwindcss/tailwind.css";
import Image from "next/image";
import SeeProductBox from "./SeeProductBox";

export default function CategoryItem(props) {
  const imagePosition = props.imagePosition;
  return (
    <>
      <section className="self-center">
        <div className="grid justify-center grid-cols-2 h-[35rem] w-[69rem] mt-32 mb-32 gap-6">
          <div className="flex flex-col">
            {imagePosition === "left" ? (
              <Image
                src={props.imageSrc}
                alt={props.imageAlt}
                width={props.imageWidth}
                height={props.imageHeight}
              />
            ) : (
              <SeeProductBox
                paddingDesc="pr-4"
                newProduct={props.newItem}
                newProductFontColor="orange"
                btnColor="orange"
                txtColor="black"
                headlineText={props.headlineText}
                descriptionText="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
              />
            )}
          </div>
          <div className="flex flex-col items-center justify-center">
            {imagePosition === "right" ? (
              <Image
                src={props.imageSrc}
                alt={props.imageAlt}
                width={props.imageWidth}
                height={props.imageHeight}
              />
            ) : (
              <SeeProductBox
                paddingDesc="pr-4"
                newProduct={props.newItem}
                newProductFontColor="orange"
                btnColor="orange"
                txtColor="black"
                headlineText={props.headlineText}
                descriptionText="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
