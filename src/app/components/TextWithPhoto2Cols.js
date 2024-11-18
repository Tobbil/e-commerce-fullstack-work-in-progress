import "tailwindcss/tailwind.css";
import Image from "next/image";

export default function TextWithPhoto2Cols(props) {
  const headlineText = props.headlineText;
  const words = headlineText.split(" ");
  return (
    <>
      <section className="self-center">
        <div className="grid justify-center grid-cols-2 h-[36.75rem] w-[69rem] mt-32 mb-32 gap-6">
          <div className="flex flex-col justify-center pr-32">
            <h1
              className={`text-fs-40 text-black font-bold uppercase leading-[1.6rem] tracking-200`}
            >
              {words.map((word, index) =>
                index === props.highlightIndex ? (
                  <span key={index} className="text-fs-40 text-orange font-bold uppercase leading-[3.6rem] tracking-200">{word + " "}</span>
                ) : (
                  word + " "
                )
              )}
            </h1>
            <p className="text-fs-15 pt-5 opacity-50">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div>
            <Image
              src="/ManHeadphones.png"
              alt="man wearing headphones"
              width={540}
              height={588}
            />
          </div>
        </div>
      </section>
    </>
  );
}
