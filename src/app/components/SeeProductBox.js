export default function SeeProductBox(props) {
  const newProduct = props.newProduct;
  const headlineText = props.headlineText;
  const descriptionText = props.descriptionText;
  const height = props.height
  const width = props.width
  const overlineClass = "text-fs-14 tracking-1000 leading-[19px]"
  const paddingDesc = props.paddingDesc

  let btnColorClass;
  switch (props.btnColor) {
    case "black":
        btnColorClass = "bg-black"
        break
    case "orange":
        btnColorClass = "bg-[#D87D4A]" 
  }  

  let opacity = "";
  if (newProduct) {
    opacity = "opacity-50";
  } else if (!newProduct) {
    opacity = "opacity-0";
  }
console.log(height);

  return (
    <>
      <main className={`h-[${height}] w-[${width}] flex items-center justify-center`}>
          <div className="grid grid-rows-4-0.1fr gap-6">
            <div className={`${overlineClass} ${opacity}`}>NEW PRODUCT</div>
            <h1 className={`text-h1 text-white font-bold uppercase leading-[58px] tracking-200`}>{headlineText}</h1>
            <div className={`text-fs-15 text-white opacity-75 ${paddingDesc}`}>{descriptionText}</div>
            <a href="#">
              <button
                className={`text-fs-13 font-semibold tracking-100 text-white h-[48px] w-[160px] mt-[1.5rem] ${btnColorClass}`}
              >
                SEE PRODUCT
              </button>
            </a>
          </div>
      </main>
    </>
  );
}
