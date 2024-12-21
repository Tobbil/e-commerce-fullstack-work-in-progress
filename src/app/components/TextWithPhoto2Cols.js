import "tailwindcss/tailwind.css";
import Image from "next/image";

export default function TextWithPhoto2Cols(props) {
  const headlineText = props.headlineText;
  const words = headlineText.split(" ");
  return (
    <>
      <section className="self-center">
        <div className="flex justify-center flex-col-reverse lg:flex-row h-[36.75rem] lg:w-[69rem] mt-32 mb-32 gap-6">
          <div className="flex flex-col justify-center text-center lg:pr-32 w-[20rem] md:w-[43rem]">
            <h1
              className={`text-fs-28 pt-6 md:p-6 md:text-fs-40 text-black font-bold uppercase leading-[1.6rem] tracking-200`}
            >
              {words.map((word, index) =>
                index === props.highlightIndex ? (
                  <span key={index} className="text-fs-28 md:text-fs-40 text-orange font-bold uppercase leading-[3.6rem] tracking-200">{word + " "}</span>
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
            className="block md:hidden"
              src="/man_headphones_mobile.png"
              alt="man wearing headphones"
              width={327}
              height={300}
            />
          <Image
            className="hidden md:max-lg:block"
              src="/man_headphones_tablet.png"
              alt="man wearing headphones"
              width={689}
              height={300}
            />
            <Image
            className="hidden lg:block"
              src="/man_headphones_desktop.png"
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
