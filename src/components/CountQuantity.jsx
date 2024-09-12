import { useCart } from "@/store/cart";
import { useCount } from "@/store/count";
import React from "react";
// import { useCount } from "@app/client/store/count";
// import { useCart } from "@app/client/store/cart";
export default function CountQuantity({ product }) {
  const { cartProducts, addProductAmount, minusProductAmount } = useCart();
  const { count, addCount, minusCount } = useCount();
  return (
    <div className="flex text-sm gap-4 items-center">
      <button
        className="bg-[#f6f7fb] dark:text-primary-p dark:bg-primary w-8 h-8 rounded-md hover:border-color-primary hover:border transition-all ease-in-out duration-200"
        onClick={() =>
          product ? minusProductAmount(product.id) : minusCount()
        }
      >
        &minus;
      </button>
      <p className="border-[#D8D8D8] dark:border-gray-600 border text-sm w-8 h-8 rounded-md flex items-center justify-center">
        {product ? product.amount : count}
      </p>
      <button
        className="bg-[#f6f7fb]  dark:text-primary-p dark:bg-primary  w-8 h-8 rounded-md  hover:border-color-primary hover:border transition-all ease-in-out duration-200"
        onClick={() => (product ? addProductAmount(product.id) : addCount())}
      >
        +
      </button>
    </div>
  );
}
