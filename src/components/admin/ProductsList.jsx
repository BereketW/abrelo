import { DeleteIcon, Edit, EyeIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pagination from "./Pagination";

const products = [
  {
    name: "Black T-Shirt",
    sizes: "S, M",
    price: "$80",
    stock: "486 items sold, 200 items left",
    category: "Fashion",
    rating: 4.8,
    reviews: 58,
  },
  {
    name: "Blue Jeans",
    sizes: "30, 32, 34",
    price: "$60",
    stock: "300 items sold, 150 items left",
    category: "Clothing",
    rating: 4.5,
    reviews: 45,
  },
  {
    name: "Running Shoes",
    sizes: "8, 9, 10",
    price: "$120",
    stock: "200 items sold, 80 items left",
    category: "Footwear",
    rating: 4.7,
    reviews: 30,
  },
  {
    name: "Leather Wallet",
    sizes: "One Size",
    price: "$50",
    stock: "150 items sold, 50 items left",
    category: "Accessories",
    rating: 4.6,
    reviews: 25,
  },
  {
    name: "Smart Watch",
    sizes: "One Size",
    price: "$200",
    stock: "400 items sold, 100 items left",
    category: "Electronics",
    rating: 4.9,
    reviews: 70,
  },
];

export default function ProductsList() {
  return (
    <div>
        <table className="w-full">
          <thead>
            <tr className="border-b bg-white text-[#5d7186]">
              <th className=" p-4 text-left">Product & Size</th>
              <th className=" p-4 text-left">Price</th>
              <th className=" p-4 text-left">Stock</th>
              <th className=" p-4 text-left">Category</th>
              <th className=" p-4 text-left">Rating</th>
              <th className=" p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b bg-white">
                <td className="flex gap-2">
                  <img
                    src={"https://techzaa.getappui.com/larkon/admin/assets/images/product/p-1.png"}
                    width={50}
                    height={50}
                    alt={product.name}
                  />
                  <span>
                    <h1>{product.name}</h1>
                    <h2 className="text-[#8686a7] text-sm">Size: {product.sizes}</h2>
                  </span>
                </td>
                <td className="text-[#8686a7] text-sm">{product.price}</td>
                <td className="text-sm">{product.stock}</td>
                <td className="text-[#8686a7] text-sm">{product.category}</td>
                <td className="gap-1 justify-center items-center text-[#8686a7] text-sm">
                  <span className="bg-[#8686a7] mr-2 px-2 py-1 text-white inline rounded">
                    <Star size={15} className="inline" fill="yellow" color="yellow" /> {product.rating}
                  </span>
                  {product.reviews} Reviews
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <Link href={"#"} className="p-1 bg-[#8686a7] rounded">
                      <EyeIcon color="white" />
                    </Link>
                    <Link href={"#"} className="p-1 rounded group hover:bg-[#ff6c2f] transition-colors duration-200 bg-[#ff3d5430]">
                      <Edit className="text-[#ff6c2f] group-hover:text-white" />
                    </Link>
                    <Link href={"#"} className="p-1 rounded group hover:bg-hero transition-colors duration-200 bg-[#ff3d5430]">
                      <DeleteIcon className="text-hero group-hover:text-white" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
    </div>

  );
}
