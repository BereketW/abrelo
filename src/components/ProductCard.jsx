import Image from "next/image";
import React from "react";
import Rating from "./Rating";

export default function ProductCard() {
  return (
   <div className="border border-black">
        <img src="https://valkivid.dan-fisher.dev/assets/img/yt1/samples/product-1-370x438.jpg" alt="product image" height={400} width={300} />
        <span>CLOTHING</span>
        <h3>Product Name</h3>
        <Rating rating={4}/>
        <span>$16</span>

   </div>
  );
}
