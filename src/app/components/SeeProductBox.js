export default function SeeProductBox(props) {
  const newProduct = props.newProduct;
  const lowerOpacityNewProduct = props.lowerOpacityNewProduct
  const headlineText = props.headlineText;
  const descriptionText = props.descriptionText;

  const overlineClass = "text-fs-14 tracking-1000 leading-[19px]"
  const btnColor = `bg-[${props.btnColor}]`
  const txtColor = `text-${props.textColor}`

  let opacity = "";
  if (newProduct && lowerOpacityNewProduct) {
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
            <h1 className={`text-h1 ${txtColor} font-bold uppercase leading-[58px] tracking-200`}>{headlineText}</h1>
            <div className={`text-fs-15 ${txtColor} opacity-75 pr-12`}>{descriptionText}</div>
            <a href="#">
              <button
                className={`text-fs-13 font-semibold tracking-100 text-white h-[48px] w-[160px] mt-[1.5rem] ${btnColor}`}
              >
                SEE PRODUCT
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
