import "tailwindcss/tailwind.css";
import SeeProductBoxNoDesc from "./SeeProductBoxNoDesc";

export default function FeaturedItems() {
  return (
    <>
      <section className="self-center">
        <div className="bg-featured-zx7-grey bg-no-repeat grid justify-center grid-cols-2 h-[20rem] w-[69rem] mt-8 mb-8 gap-6">
          <div className="flex items-center justify-center pb-4">
            <SeeProductBoxNoDesc
              dimensions="h-300 w-350"
              paddingDesc="pr-4"
              newProduct={false}
              btnColor="black"
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
