export default function SeeProductBox(props) {
  const newProduct = props.newProduct;
  const headlineText = props.headlineText;
  const descriptionText = props.descriptionText;
  const overlineClass = "text-fs-14 tracking-1000 leading-[1.2rem]";
  const paddingDesc = props.paddingDesc;

  let btnColorClass;
  let txtColorClass;
  let onHover;

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

  let opacity = "";
  if (newProduct) {
    opacity = "opacity-50";
  } else if (!newProduct) {
    opacity = "opacity-0";
  }

  return (
    <>
      <section className={props.dimensions}>
        <div className="grid grid-rows-4-0.1fr gap-6">
          <div className={`${overlineClass} ${opacity}`}>NEW PRODUCT</div>
          <h1
            className={`text-h1 ${txtColorClass} font-bold uppercase leading-[3.6rem] tracking-200`}
          >
            {headlineText}
          </h1>
          <div className={`text-fs-15 ${txtColorClass} opacity-75 ${paddingDesc}`}>
            {descriptionText}
          </div>
          <a href="#">
            <button
              className={`text-fs-13 font-semibold tracking-100 text-white h-12 w-40 mt-6 ${btnColorClass} ${onHover}`}
            >
              SEE PRODUCT
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
