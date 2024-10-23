import styles from "../components/SeeProductBox.module.css";

export default function SeeProductBox(props) {
  const colorInvert = props.colorInvert;
  const newProduct = props.newProduct;
  const headlineText = props.headlineText;
  const descriptionText = props.descriptionText;

  const overlineClass = colorInvert ? "overline-text overline-text-low-opacity" : "overline-text" 
  return (
    <>
      <main>
        <div className={styles.main}>
          <div className={styles["grid-left"]}>
            <div className={newProduct ? overlineClass : `${overlineClass} hidden`}>NEW PRODUCT</div>
            <h1>{headlineText}</h1>
            <div className={styles["see-product-description"]}>{descriptionText}</div>
            <a href="#">
            <button className={styles["see-product-btn"]}>SEE PRODUCT</button></a>
          </div>
        </div>
      </main>
    </>
  );
}
