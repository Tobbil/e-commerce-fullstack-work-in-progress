import CategoryThumbnail from "../components/CategoryThumbnail";

export default function Categories() {
  return (
    <>
      <section className="self-center">
        <div className="flex flex-col md:flex-row lg:h-[20rem] lg:w-[69rem] mt-20 gap-4 lg:gap-6">
          <div className="flex content-center">
            <CategoryThumbnail
              topValue="-top-[5rem]"
              div="left"
              categoryName="HEADPHONES"
              image="https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/categories/categories_headphones.png"
              alt="small headphones"
              width={122.95}
              height={160}
              categoryUrl="/headphones"
            />
          </div>
          <div>
            <CategoryThumbnail
              topValue="-top-[4.5rem]"
              div="center"
              categoryName="SPEAKERS"
              image="https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/categories/categories_speaker.png"
              alt="small speaker"
              width={121.49}
              height={146}
              categoryUrl="/speakers"
            />
          </div>
          <div>
            <CategoryThumbnail
              topValue="-top-[4rem]"
              div="right"
              categoryName="EARPHONES"
              image="https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/categories/categories_earphones.png"
              alt="small speaker"
              width={125}
              height={126}
              categoryUrl="/earphones"
            />
          </div>
        </div>
      </section>
    </>
  );
}
