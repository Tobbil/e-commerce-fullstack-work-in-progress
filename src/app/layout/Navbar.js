import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const menuHover = "hover:text-[#d87d4a] transition duration-200 ease-in-out";

  return (
    <>
      <nav>
        <div className="grid grid-cols-navbar-mobile md:grid-cols-navbar-tablet lg:grid-cols-navbar-desktop text-white h-[2rem] items-center justify-self-center md:justify-items-start md:w-[43rem] lg:w-[69rem]">
          <div className="lg:hidden col-start-auto">
            <Image
              src="/menu_icon.png"
              alt="menu icon"
              width={16}
              height={15}
            />
          </div>
          <div className="col-start-2 lg:col-start-1 justify-self-center md:justify-self-start">
            <Link href="/">
              <Image
                src="/audiophile_text.png"
                alt="Audiophile logo"
                width={143}
                height={25}
              />
            </Link>
          </div>
          <div className="hidden xl:w-full lg:flex lg:justify-center">
            <div className="grid grid-flow-col auto-cols-min gap-4 xl:gap-8 text-fs-13 font-semibold tracking-200 text-[#f2f2f2] content-center">
              <ul className="">
                <li className="inline mr-8">
                  <Link className={menuHover} href="/">
                    HOME
                  </Link>
                </li>
                <li className="inline mr-8">
                  <Link className={menuHover} href="/headphones">
                    HEADPHONES
                  </Link>
                </li>
                <li className="inline mr-8">
                  <Link className={menuHover} href="/speakers">
                    SPEAKERS
                  </Link>
                </li>
                <li className="inline">
                  <Link className={menuHover} href="/earphones">
                    EARPHONES
                  </Link>
                </li>
              </ul>
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
      <div className="mt-9 opacity-20 mb-[0.1em] md:w-[43rem] lg:w-[69rem] justify-self-center">
        <hr />
      </div>
    </>
  );
}
