import Image from "next/image";
import SeeProductBox from "../components/SeeProductBox";

export default function Header() {
  const menuHover = "hover:text-[#d87d4a] transition duration-200 ease-in-out";
  return (
    <>
      <header className="m-0 w-screen bg-[#141414] justify-items-center">
        <div className="relative pt-[2rem] pr-[10rem] pb-[2rem] pl-[10rem]">
          <div className="grid grid-cols-3 text-white h-[2rem] content-center">
            <div className="justify-self-start self-center">
              <a href="#">
                <Image src="/audiophile_text.png" alt="Audiophile logo" width={143} height={25} />
              </a>
            </div>
            <div className="w-full flex justify-center">
              <div className="grid grid-flow-col auto-cols-min gap-8 text-fs-13 font-semibold tracking-200 text-[#f2f2f2] content-center">
                <a className={menuHover} href="#">
                  HOME
                </a>
                <a className={menuHover} href="#">
                  HEADPHONES
                </a>
                <a className={menuHover} href="#">
                  SPEAKERS
                </a>
                <a className={menuHover} href="#">
                  EARPHONES
                </a>
              </div>
            </div>
            <div className="justify-self-end self-center">
              <a href="#">
                <Image src="/basket_icon.png" alt="Basket icon" width={23.33} height={20} />
              </a>
            </div>
          </div>
          <div className="mt-9 opacity-20 mb-[0.1em]">
            <hr />
          </div>
          <div className="grid grid-cols-2 gap-5 overflow-hidden text-darkwhite">
            <div className="flex items-center">
              <SeeProductBox
                dimensions="h-400 w-400"
                paddingDesc="pr-16"
                newProduct={true}
                btnColor="orange"
                headlineText="XX99 MARK II HEADPHONES"
                descriptionText="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
              />
            </div>
            <div className="relative h-[45rem]">
              <Image
                className="absolute"
                src="/header_headphones.png"
                alt="black heapdhones"
                width={710}
                height={729}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
