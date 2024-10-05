import React from "react";

import Rating from "./Rating";
// import { MdFavoriteBorder } from "react-icons/md";
import { BsCart2, BsCart3, BsCart4 } from "react-icons/bs";
import { useCart } from "@/store/cart";

// import { useWishlist } from "@app/client/store/wishlist";
export default function CartItem({ product }) {
  const { addToCart } = useCart();
  //   const { addToWishlist } = useWishlist();
  return (
    <div
      key={product.id}
      className="flex mb-5 relative justify-between gap-4  border items-center shadow-sm p-6 rounded"
    >
      <div className="flex  gap-10">
        <img
          className="w-20 object-cover rounded shadow h-20"
          src={`${product.images[0].url}`}
          alt=""
        />
        <div className="flex flex-col gap-1">
          <h6 className="text-sm text-color-body">
            {product.name.slice(0, 20)}
          </h6>
          <small>${product.price}</small>
          <Rating rating={Math.ceil(product.rating) || 4} />
        </div>
      </div>
      <div className="flex flex-col gap-5 text-color-body">
        {/* <button onClick={addToCart(product)}> */}
        <BsCart4
          size={30}
          // onClick={addToCart(product)}
          className="cursor-pointer"
        />
        {/* </button> */}
        {/* <button onClick={addToWishlist(product)}> */}

        {/* </button> */}
      </div>
    </div>
  );
}
