import Image from "next/image";

export default function Footer() {
  const menuHover = "hover:text-[#d87d4a] transition duration-200 ease-in-out";

  return (
    <>
      <footer className="m-0 w-screen h-[365px] bg-[#141414] grid grid-cols-2">
        <div className="pl-40 w-[555px]">
          <a href="#">
            <Image className="pt-20" src="/audiophile_text.png" alt="Audiophile logo" width={143} height={25} />
          </a>
          <p className="text-fs15 text-white font-medium opacity-50 pt-10 w-[580px] justify-left">
            Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound
            specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
            facility - we&apos;re open 7 days a week.
          </p>
          <p className="text-fs15 text-white font-medium opacity-50 pt-12">Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="w-[555px]">
          <div className="grid grid-flow-col auto-cols-min gap-8 text-fs-13 font-semibold tracking-200 text-[#f2f2f2] pl-10 pt-20 justify-self-end">
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
          <div className="grid grid-flow-col gap-4 text-fs-13 font-semibold tracking-200 text-[#f2f2f2] pl-10 pt-20 justify-self-end">
            <a className={menuHover} href="https://www.facebook.com">
              <Image src="/FB_Icon.png" alt="Facebook icon" width={24} height={24} />
            </a>
            <a className={menuHover} href="https://www.twitter.com">
              <Image src="/Twitter_Icon.png" alt="Twitter icon" width={24} height={24} />
            </a>
            <a className={menuHover} href="https://www.instagram.com">
              <Image src="/IG_Icon.png" alt="Instagram icon" width={24} height={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
