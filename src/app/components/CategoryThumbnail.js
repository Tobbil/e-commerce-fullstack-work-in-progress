import styles from "./CategoryThumbnail.module.css";
import Image from "next/image";

export default function CategoryThumbnail(props) {
  return (
    <>
      <div className={styles["category"]}>
          <div className={styles["blank-div-white-bg"]}></div>
          <div className={styles[`category-image-${props.div}`]}>
            <Image src={props.image} alt={props.alt} width={props.width} height={props.height} />
          </div>
          <p className="paragraph-bold">{props.categoryName}</p>
      </div>
    </>
  );
}
