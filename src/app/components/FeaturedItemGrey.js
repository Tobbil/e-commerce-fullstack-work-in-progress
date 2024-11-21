import "tailwindcss/tailwind.css";
import SeeProductBoxNoDesc from "./SeeProductBoxGreyNoDesc";

export default function FeaturedItemGrey() {
  return (
    <>
      <section className="self-center">
        <div className="bg-featured-zx7-grey bg-no-repeat grid justify-center grid-cols-2 h-[20rem] w-[69rem] mt-8 mb-8 gap-6">
          <div className="flex items-center justify-center pb-4">
            <SeeProductBoxNoDesc
              paddingDesc="pr-4"
              newProduct={false}
              headlineText="ZX7 SPEAKER"
              descriptionText=""
            />
          <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
