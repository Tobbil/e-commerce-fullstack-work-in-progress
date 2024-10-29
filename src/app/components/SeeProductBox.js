export default function SeeProductBox(props) {
  const colorInvert = props.colorInvert;
  const newProduct = props.newProduct;
  const headlineText = props.headlineText;
  const descriptionText = props.descriptionText;

  const overlineClass = colorInvert
    ? "text-fs-14 tracking-1000 leading-[19px] opacity-50"
    : "text-fs-14 tracking-1000 leading-[19px]";
  let opacity = "";
  if (newProduct && colorInvert) {
    opacity = "opacity-50";
  } else if (!newProduct) {
    opacity = "opacity-0";
  }

  return (
    <>
      <main>
        <div className="grid grid-cols-2 h-[734px] items-center">
          <div className="grid grid-rows-4-0.1fr gap-4">
            <div className={`${overlineClass} ${opacity}`}>NEW PRODUCT</div>
            <h1 className="text-h1 font-bold uppercase leading-[58px] tracking-200">{headlineText}</h1>
            <div className="text-fs-15 opacity-75 pr-12">{descriptionText}</div>
            <a href="#">
              <button className="text-fs-13 font-semibold tracking-100 text-white h-[48px] w-[160px] mt-[1.5rem] bg-[#D87D4A]">
                SEE PRODUCT
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
