"use client";

import { useCartContext } from "../components/CartContext";
import { useState } from "react";
import { convertPrice } from "../../../utils/utils";

export default function AddToCartBox(props) {
  const { addToCart } = useCartContext();
  const newProduct = props.newProduct; // ZMIEN TO WSZYSTKO ZEBY BYLO BRANE Z ITEMA Z PROPSOW
  const headlineText = props.headlineText;
  const descriptionText = props.descriptionText;
  const overlineClass = "text-fs-14 tracking-1000 leading-[1.2rem]";

  let btnColorClass;
  let txtColorClass;
  let newProductFontColorClass =
    props.newProductFontColor === "white" ? "text-white" : "text-orange";
  let onHover;
  let newProductOpacity = "";
  let gridClass = "grid grid-rows-4-0.1fr gap-6";
  let width = props.width ? `w-[${props.width}]` : "w-[21rem]";

  switch (props.btnColor) {
    case "black":
      btnColorClass = "bg-black";
      onHover = "hover:bg-[#4C4C4C]";
      break;
    case "orange":
      btnColorClass = "bg-[#D87D4A]";
      onHover = "hover:bg-[#FBAF85]";
  }

  switch (props.txtColor) {
    case "black":
      txtColorClass = "text-black";
      break;
    case "white":
      txtColorClass = "text-white";
  }

  if (newProduct && props.newProductFontColor === "white") {
    newProductOpacity = "opacity-50";
  } else if (!newProduct) {
    newProductOpacity = "hidden";
    gridClass = "grid grid-rows-5-0.1fr gap-6";
  }

  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    const value = Math.max(1, Math.min(100, Number(e.target.value))); // Limit between 1 and 100
    setQuantity(value);
  };

  const handleAddToCart = () => {
    addToCart({
      ...props.item,
      quantity: quantity,
    });
  };

  return (
    <>
      <section className={width}>
        <div className={gridClass} data-testid="qa-add-to-cart-box">
          <div
            className={`${overlineClass} ${newProductOpacity} ${newProductFontColorClass}`}
            data-testid="qa-new-product-overline"
          >
            NEW PRODUCT
          </div>
          <h1
            className={`text-fs-32 lg:text-fs-40 ${txtColorClass} font-bold uppercase leading-[2rem] lg:leading-[3.6rem] tracking-100 lg:tracking-200`}
            data-testid="qa-product-name"
          >
            {headlineText}
          </h1>
          <div
            className={`text-fs-15 ${txtColorClass} opacity-75`}
            data-testid="qa-product-description"
          >
            {descriptionText}
          </div>
          <div className="font-semibold text-fs-18 tracking-129">
            $ {convertPrice(props.item.price)}
          </div>
          <div className="flex flex-row gap-6">
            <input
              className="w-32 lg:w-40 h-12 text-center bg-[#f1f1f1] self-end"
              id="quantity"
              type="number"
              min="1"
              max="100"
              value={quantity}
              onChange={handleChange}
              aria-label="Quantity"
            />
            <button
              onClick={handleAddToCart}
              className={`text-fs-13 font-semibold tracking-100 text-white h-12 w-44 md:w-32 lg:w-40 mt-6 ${btnColorClass} ${onHover}`}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
