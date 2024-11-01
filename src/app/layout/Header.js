import Image from "next/image";
import SeeProductBox from "../components/SeeProductBox";

export default function Header() {
  const menuHover = "hover:text-[#d87d4a] transition duration-200 ease-in-out";
  return (
    <>
      <div className="m-0 w-screen bg-[#141414]">
        <div className="relative pt-[32px] pr-[165px] pb-[36px] pl-[165px] ">
          <div className="grid grid-cols-3 text-white h-[28px] content-center">
            <div className="justify-self-start self-center">
              <a href="#">
                <Image src="/audiophile_text.png" alt="Audiophile logo" width={143} height={25} />
              </a>
            </div>
            <div className="grid grid-cols-menu gap-4 text-fs-13 font-semibold tracking-200 justify-items-center items-center text-[#f2f2f2]">
              <a className={`${menuHover} pl-[2rem]`} href="#">
                HOME
              </a>
              <a className={menuHover} href="#">
                HEADPHONES
              </a>
              <a className={`${menuHover} pl-[0.5rem]`} href="#">
                SPEAKERS
              </a>
              <a className={menuHover} href="#">
                EARPHONES
              </a>
            </div>
            <div className="justify-self-end self-center">
              <a href="#">
                <Image src="/basket_icon.png" alt="Basket icon" width={23.33} height={20} />
              </a>
            </div>
          </div>
          <div className="mt-[36px] opacity-20 mb-[0.1em]">
            <hr />
          </div>
          <div className="grid grid-cols-2 gap-[20px] overflow-hidden text-darkwhite">
            <div className="flex items-center" id="product1">
              <SeeProductBox
                height="400px"
                width="400px"
                paddingDesc="pr-16"
                newProduct={true}
                btnColor="orange"
                headlineText="XX99 MARK II HEADPHONES"
                descriptionText="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
              />
            </div>
            <div className="h-[734px]">
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
      </div>
    </>
  );
}
