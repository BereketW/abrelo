import React from "react";
import { X, Delete, DeleteIcon } from "lucide-react";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { useCart } from "@app/client/store/cart";
import CountQuantity from "./CountQuantity";
import Rating from "./Rating";
import { useCart } from "@/store/cart";
import { usePathname } from "next/navigation";
export default function CartItem({ product, fixed=false, flex=false }) {
 const pathname = usePathname()
  const { removeFromCart, cartProducts } = useCart();
  console.log(cartProducts)
  // console.log(removeFromCart);
  
  return (
    <div key={product?.id} className={`flex ${fixed ? "w-[400px]" :""}  mb-5 relative justify-between items-center gap-4`}>
      <img className="w-20 rounded h-20" src={product?.image} alt="" />

      <div className="flex flex-col gap-1 ">
        <Rating rating={4} />
        <h6 className="text-sm">{product?.title.slice(0, 20)}</h6>
        <small>${product?.price}</small>
      </div>
      <CountQuantity product={product} />
      <button
        className={`${!flex ? "absolute top-0 right-3"
          :""
        }`}
        onClick={() => removeFromCart(product.id)}
      >
      <DeleteIcon className={`h-6 dark:hover:text-hero ${!flex ?"absolute  -top-3 right-1":" " } w-6  dark:bg-inherit dark:text-primary-p bg-white hover:text-hero transition-all duration-200`}  />
      </button>
    </div>
  );
}
