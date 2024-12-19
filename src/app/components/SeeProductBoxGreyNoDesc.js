import Link from "next/link";

export default function SeeProductBoxGreyNoDesc(props) {
  const headlineText = props.headlineText;

  return (
    <>
      <section className="pr-10 md:pr-0">
        <div className="self-center grid grid-rows-2-0.1fr gap-6">
          <h1
            className={`text-h2 text-black font-bold uppercase leading-[3.6rem] tracking-200`}
          >
            {headlineText}
          </h1>
          <Link href={`/item/${props.itemId}`}>
            <button
              className={`bg-transparent hover:bg-black border-black border-solid border-2 text-fs-13 font-semibold tracking-100 text-black hover:text-white h-12 w-40`}
            >
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
