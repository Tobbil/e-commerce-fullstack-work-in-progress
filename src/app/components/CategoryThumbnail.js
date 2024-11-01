import "tailwindcss/tailwind.css";
import Image from "next/image";

export default function CategoryThumbnail(props) {
  return (
    <>
      <div className="grid grid-rows-categories bg-[#f1f1f1] overflow-visible h-[284px] justify-items-center">
        <Image className="absolute" src="/OvalShadow.png" alt="Oval Shadow" width={350} height={263} />
        <div className="bg-white h-16 w-full"></div>
        <div className={`relative h-28 ${props.topValue}`}>
          <Image src={props.image} alt={props.alt} width={props.width} height={props.height} />
        </div>
        <p className="text-fs-18 tracking-129 font-bold">{props.categoryName}</p>
        <div className="grid grid-cols-2 gap-4 items-center">
          <p className="text-fs-13 tracking-100 opacity-50 font-bold ">SHOP</p>
          <Image src="/Arrow.png" alt="Orange arrow" width={8} height={18} />
        </div>
      </div>
    </>
  );
}
