export default function SeeProductBoxGreyNoDesc(props) {
  const newProduct = props.newProduct;
  const headlineText = props.headlineText;
  const descriptionText = props.descriptionText;
  const overlineClass = "text-fs-14 tracking-1000 leading-[1.2rem]";
  const paddingDesc = props.paddingDesc;

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
            className={`text-h2 text-black font-bold uppercase leading-[3.6rem] tracking-200`}
          >
            {headlineText}
          </h1>
          <a href="#">
            <button
              className={`bg-transparent hover:bg-black border-black border-solid border-2 text-fs-13 font-semibold tracking-100 text-black hover:text-white h-12 w-40`}
            >
              SEE PRODUCT
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
