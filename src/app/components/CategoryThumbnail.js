import "tailwindcss/tailwind.css";
import Image from "next/image";

export default function CategoryThumbnail(props) {
  return (
    <>
      <div className="grid grid-rows-categories bg-[#f1f1f1] overflow-visible h-[284px] justify-items-center">
          <div className="bg-white h-16 w-full"></div>
          <div className={props.image === "/categories_earphones.png" ? "relative h-28 -top-[4em]" : "relative h-28 -top-[5em]"}> {/* zmien to zeby bylo przekazywane w propsach */}
            <Image src={props.image} alt={props.alt} width={props.width} height={props.height} />
          </div>
          <p className="text-fs-18 tracking-129 font-bold">{props.categoryName}</p>
      </div>
    </>
  );
}
