import styles from "../components/Categories.module.css";
import CategoryThumbnail from "../components/CategoryThumbnail";

export default function Categories() {
  return (
    <>
      <div className={styles["categories-container"]}>
        <div className={styles["categories"]}>
          <div className={styles["category-left"]}>
            <CategoryThumbnail
              div="left"
              categoryName="HEADPHONES"
              image="/categories_headphones.png"
              alt="small headphones "
              width={122.95}
              height={160}
            />
          </div>
          <div className={styles["category-center"]}>
            <CategoryThumbnail
              div="center"
              categoryName="SPEAKERS"
              image="/categories_speaker.png"
              alt="small speaker"
              width={121.49}
              height={146}
            />
          </div>
          <div className={styles["category-right"]}>
            <CategoryThumbnail
              div="right"
              categoryName="EARPHONES"
              image="/categories_earphones.png"
              alt="small speaker"
              width={125}
              height={126}
            />
          </div>
        </div>
      </div>
    </>
  );
}
