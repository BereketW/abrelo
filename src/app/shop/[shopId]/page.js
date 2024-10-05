import ProductDetail from "@/components/ProductDetail";
import { getOneProduct } from "@/data/products";
import { ThemeProvider } from "next-themes";
import React from "react";

export default async function page({ params }) {
  const singleProduct = await getOneProduct(params.shopId);

  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="light">
      <ProductDetail singleProduct={singleProduct} />
    </ThemeProvider>
  );
}
