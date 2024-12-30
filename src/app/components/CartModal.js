import React from "react";
import Image from "next/image";
import { convertPrice } from "../../../utils/utils";

export default function CartModal({ isOpen, cartItems, removeAll }) {
  if (!isOpen) return null;

  const handleRemoveAll = () => removeAll();

  return (
    <div className="fixed inset-0 text-black bg-black bg-opacity-50 flex justify-end pointer-events-none z-50 pr-5 md:pr-10 lg:pr-40 pt-32" data-testid="cart-modal">
      <div className="bg-white rounded-lg shadow-lg pointer-events-auto z-60 w-96 p-6 relative h-fit">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold mb-4">Cart ({cartItems.length})</h2>
          <p className="text-fs-13 cursor-pointer" onClick={handleRemoveAll}>
            Remove all
          </p>
        </div>
        <div className="space-y-4" data-testid="cart-items">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={`https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/${item.id}/category_item.png`}
                  alt={item?.imageAltTxt || ""}
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    ${convertPrice(item.price)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-sm"
                  onClick={() => item.onDecrease(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-sm"
                  onClick={() => item.onIncrease(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">
            $
            {convertPrice(
              cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )
            )}
          </span>
        </div>
        <div className="flex justify-center">
          <button
            onClick={null} // ADD CHECKOUT LINK
            className={`text-fs-13 font-semibold tracking-100 text-white h-12 w-44 md:w-32 lg:w-40 mt-6 bg-[#D87D4A] hover:bg-[#FBAF85]`}
          >
            {" "}
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
