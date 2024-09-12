"use client";
import Link from "next/link";
import ProductDetail from "../../../components/ProductDetail";
import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { ThemeProvider } from "next-themes";
// import { jewelery } from "@app/client/api/products";
// import ProductDetail from "@app/client/components/global/ProductDetail";
// import { getOneProduct } from "@app/client/data/products";
// import Message from "@app/client/components/global/Message";
// import { Footer } from "antd/es/layout/layout";
// import Header from "@app/client/components/global/Header";
// import { useItemViewed } from "@app/client/store/vieweditems";
// import ItemsViewed from "@app/client/components/global/ItemsViewed";
// import Subscribe from "@app/client/components/global/Subscribe";

export default function Home({ params }) {
  // const { addItemViewed } = useItemViewed();

  // const productFiltered = jewelery.filter(
  //   (product) => product.id === Number(params.productId)
  // );

  // function handleAddToItems(product) {
  //   addItemViewed(product);
  // }
  //   const singleProduct = await getOneProduct(params.productId);
  //   console.log("");
  const [products, setProducts] = useState([]); // State to store fetched products
  const [singleProduct, setSingleProduct] = useState(null); // State to store a single product

  // Fetch products when the component mounts
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("http://localhost:8000/api/products");
        const data = await response.json();
        setProducts(data.products);

        // Filter out the single product using params.shopId (assuming it's the product ID)
        const filteredProduct = data.products.find(
          (product) => product.id === parseInt(params.shopId) // Ensure you're comparing with the right data type
        );

        setSingleProduct(filteredProduct); // Set the filtered product in state
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    getProducts();
  }, [params.shopId]); // Run the effect when the component mounts and when params.shopId changes

  console.log("Single product:", singleProduct);

  if (!singleProduct) {
    return <div>Loading...</div>; // Display loading state while the product is being fetched
  }

  // Render the ProductDetail component with the single product data
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <Header className="px-24" />
      <ProductDetail singleProduct={singleProduct} id={params.shopId} />
    </ThemeProvider>
  );
}
