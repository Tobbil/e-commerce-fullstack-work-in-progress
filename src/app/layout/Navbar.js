import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const menuHover = "hover:text-[#d87d4a] transition duration-200 ease-in-out";

  return (
    <>
      <nav>
        <div className="grid grid-cols-3 text-white h-[2rem] content-center">
          <div className="justify-self-start self-center">
            <Link href="/">
              <Image
                src="/audiophile_text.png"
                alt="Audiophile logo"
                width={143}
                height={25}
              />
            </Link>
          </div>
          <div className="w-full flex justify-center">
            <div className="grid grid-flow-col auto-cols-min gap-8 text-fs-13 font-semibold tracking-200 text-[#f2f2f2] content-center">
              <Link className={menuHover} href="/">
                HOME
              </Link>
              <Link className={menuHover} href="/headphones">
                HEADPHONES
              </Link>
              <Link className={menuHover} href="/speakers">
                SPEAKERS
              </Link>
              <Link className={menuHover} href="/earphones">
                EARPHONES
              </Link>
            </div>
          </div>
          <div className="justify-self-end self-center">
            <Link href="/cart">
              <Image
                src="/basket_icon.png"
                alt="Basket icon"
                width={23.33}
                height={20}
              />
            </Link>
          </div>
        </div>
      </nav>
      <div className="mt-9 opacity-20 mb-[0.1em]">
        <hr />
      </div>
    </>
  );
}
