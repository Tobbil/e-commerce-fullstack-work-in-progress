import Link from "next/link";

export default function SeeProductBox(props) {
  const newProduct = props.item?.newProduct || null;
  const headlineText = props.item?.name || "";
  const descriptionText = props.item?.description || "";
  const paddingDesc = props.paddingDesc;
  const overlineClass = "text-fs-14 tracking-1000 leading-[1.2rem]";

  let btnColorClass;
  let txtColorClass;
  let newProductFontColorClass =
    props.newProductFontColor === "white" ? "text-white" : "text-orange";
  let onHover;
  let newProductOpacity = "";
  let gridClass = "grid grid-rows-4-0.1fr gap-6";
  let width = props.width ? `w-[${props.width}]` : "w-[21rem]";

  switch (props.btnColor) {
    case "black":
      btnColorClass = "bg-black";
      onHover = "hover:bg-[#4C4C4C]";
      break;
    case "orange":
      btnColorClass = "bg-[#D87D4A]";
      onHover = "hover:bg-[#FBAF85]";
  }

  switch (props.txtColor) {
    case "black":
      txtColorClass = "text-black";
      break;
    case "white":
      txtColorClass = "text-white";
  }

  if (newProduct && props.newProductFontColor === "white") {
    newProductOpacity = "opacity-50";
  } else if (!newProduct || !props.displayNewProductOverline) {
    newProductOpacity = "hidden";
    gridClass = "grid grid-rows-3-0.1fr gap-6";
  }

  return (
    <>
      <section className={`${width}`}>
        <div className={`${gridClass} text-center lg:text-left`}>
          <div
            className={`${overlineClass} ${newProductOpacity} ${newProductFontColorClass}`}
          >
            NEW PRODUCT
          </div>
          <h1
            className={`text-h1-mobile lg::text-h1 ${txtColorClass} font-bold uppercase leading-[2rem] md:leading-[3.6rem] tracking-200`}
          >
            {headlineText}
          </h1>
          <div
            className={`text-fs-13 md:text-fs-15 ${txtColorClass} opacity-75 lg:${paddingDesc}`}
          >
            {descriptionText}
          </div>
          <Link href={`/item/${props.item?.id}`}>
            <button
              className={`text-fs-13 font-semibold tracking-100 text-white h-12 w-40 mt-4 mb-10 md:mt-6 md:mb-6 lg:mt-0 lg:mb-0 ${btnColorClass} ${onHover}`}
            >
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
