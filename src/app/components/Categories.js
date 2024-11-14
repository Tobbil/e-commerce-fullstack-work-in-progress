import "tailwindcss/tailwind.css";
import CategoryThumbnail from "../components/CategoryThumbnail";

export default function Categories() {
  return (
    <>
      <section className="self-center">
        <div className="grid grid-cols-3 h-[20rem] w-[69rem] mt-28 gap-6">
          <div>
            <CategoryThumbnail
              topValue="-top-[5rem]"
              div="left"
              categoryName="HEADPHONES"
              image="/categories_headphones.png"
              alt="small headphones"
              width={122.95}
              height={160}
            />
          </div>
          <div>
            <CategoryThumbnail
              topValue="-top-[4.5rem]"
              div="center"
              categoryName="SPEAKERS"
              image="/categories_speaker.png"
              alt="small speaker"
              width={121.49}
              height={146}
            />
          </div>
          <div>
            <CategoryThumbnail
              topValue="-top-[4rem]"
              div="right"
              categoryName="EARPHONES"
              image="/categories_earphones.png"
              alt="small speaker"
              width={125}
              height={126}
            />
          </div>
        </div>
      </section>
    </>
  );
}
