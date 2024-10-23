import Image from "next/image";
import styles from "../layout/Header.module.css";
import SeeProductBox from "../components/SeeProductBox";

export default function Header() {
  return (
    <>
      <div className={styles["main"]}>
        <div className={styles["header-box"]}>
          <div className={styles["header-menu"]}>
            <div className={styles["header-menu-grid-left"]}>
              <a href="#">
                <Image src="/audiophile_text.png" alt="Audiophile logo" width={143} height={25} />
              </a>
            </div>
            <div className={styles["header-menu-grid-center"]}>
              <a href="#">HOME</a>
              <a href="#">HEADPHONES</a>
              <a href="#">SPEAKERS</a>
              <a href="#">EARPHONES</a>
            </div>
            <div className={styles["header-menu-grid-right"]}>
              <a href="#">
                <Image src="/basket_icon.png" alt="Basket icon" width={23.33} height={20} />
              </a>
            </div>
          </div>
          <div className={styles["hr-break"]}>
            <hr />
          </div>
          <div className={styles["two-columns"]}>
            <div className={styles["left-column"]}>
              <SeeProductBox 
                colorInvert={true}
                newProduct={true}
                headlineText="XX99 MARK II HEADPHONES"
                descriptionText="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
                />
            </div>
            <div className={styles["right-column"]}>
              <Image src="/header_headphones.png" alt="black heapdhones" width={710} height={729} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
