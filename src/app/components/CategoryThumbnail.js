import "tailwindcss/tailwind.css";
import Image from "next/image";
import Link from "next/link";

export default function CategoryThumbnail(props) {
  return (
    <>
      <div className="overflow-visible h-[20rem] w-[14rem] lg:w-[22rem] relative">
        <Image
          className="absolute bottom-16 lg:top-10"
          src="/OvalShadow.png"
          alt="Oval Shadow"
          width={350}
          height={263}
        />
        <div className="bg-white h-24 w-full"></div>
        <div className="bg-[#f1f1f1] w-full h-[12.75rem] rounded-lg flex flex-col items-center">
          <div className={`relative h-28 ${props.topValue}`}>
            <Image
              src={props.image}
              alt={props.alt}
              width={props.width}
              height={props.height}
            />
          </div>
          <p className="text-fs-18 tracking-129 font-bold">
            {props.categoryName}
          </p>
          <Link href={props.categoryUrl}>
            <div className="relative flex gap-2 pt-4">
              <p className="text-fs-13 tracking-100 opacity-50 font-bold hover:text-orange hover:opacity-100">
                SHOP
              </p>
              <Image
                src="/Arrow.svg"
                alt="Orange arrow"
                width={8}
                height={12}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
