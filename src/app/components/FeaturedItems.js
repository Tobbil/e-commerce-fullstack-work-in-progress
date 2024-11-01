import "tailwindcss/tailwind.css";
import SeeProductBox from "./SeeProductBox";

export default function FeaturedItems() {
  return (
    <>
      <div className="w-screen justify-items-center">
        <div className="bg-featured-zx9 grid content-center grid-cols-2 h-[560px] w-[1110px] mt-32 gap-6">
          <div></div>
          <div className="flex items-center justify-center">
            <SeeProductBox
              dimensions="h-350 w-350"
              paddingDesc="pr-4"
              newProduct={false}
              btnColor="black"
              headlineText="ZX9 SPEAKER"
              descriptionText="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
            />
          </div>
        </div>
      </div>
    </>
  );
}
