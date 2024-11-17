import "tailwindcss/tailwind.css";
import SeeProductBoxNoDesc from "./SeeProductBoxGreyNoDesc";

export default function FeaturedItemGrey() {
  return (
    <>
      <section className="self-center">
        <div className="grid justify-center grid-cols-2 h-[20rem] w-[69rem] mt-8 mb-8 gap-6">
        <div className=""></div>
          <div className="bg-grey flex items-center justify-center pb-4">
            <SeeProductBoxNoDesc
              dimensions="h-300 w-350"
              paddingDesc="pr-4"
              newProduct={false}
              headlineText="YX1 EARPHONES"
              descriptionText=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
