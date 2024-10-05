"use client";
import Link from "next/link";
import ProductDetail from "../../../components/ProductDetail";
// import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { ThemeProvider } from "next-themes";
import { getOneProduct } from "@/data/products";
import HeroWrapper from "@/components/HeroWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
// import { jewelery } from "@app/client/api/products";
// import ProductDetail from "@app/client/components/global/ProductDetail";
// import { getOneProduct } from "@app/client/data/products";
// import Message from "@app/client/components/global/Message";
// import { Footer } from "antd/es/layout/layout";
// import Header from "@app/client/components/global/Header";
// import { useItemViewed } from "@app/client/store/vieweditems";
// import ItemsViewed from "@app/client/components/global/ItemsViewed";
// import Subscribe from "@app/client/components/global/Subscribe";

export default function Home({ singleProduct }) {
  // const { addItemViewed } = useItemViewed();

  // const productFiltered = jewelery.filter(
  //   (product) => product.id === Number(params.productId)
  // );

  // function handleAddToItems(product) {
  //   addItemViewed(product);
  // }
  //   const singleProduct = await getOneProduct(params.productId);
  //   console.log("");
  // const [products, setProducts] = useState([]); // State to store fetched products
  // const [singleProduct, setSingleProduct] = useState(null); // State to store a single product

  // Fetch products when the component mounts
  // useEffect(() => {
  //   async function getProducts() {
  //     try {
  //       const data = await getOneProduct(params.shopId);
  //       setSingleProduct(data);

  //       // Filter out the single product using params.shopId (assuming it's the product ID)

  //       // setSingleProduct(filteredProduct); // Set the filtered product in state
  //     } catch (error) {
  //       console.error("Failed to fetch products:", error);
  //     }
  //   }
  //   getProducts();
  // }, [params.shopId]); // Run the effect when the component mounts and when params.shopId changes

  // console.log("Single product:", singleProduct);

  // if (!singleProduct) {
  //   return <div>Loading...</div>; // Display loading state while the product is being fetched
  // }

  // Render the ProductDetail component with the single product data
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <HeroWrapper productDetail>
        <Header className="lg:px-12 xl:px-24 md:px-16 sm:px-8 px-4" />
        <div className="absolute bg-hero-gradient -z-50 shop-bg-gradient w-full h-full top-0 right-0">
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Autoplay]}
            className="h-full transition-all duration-300 "
          >
            <SwiperSlide className="absolute inset-0 shop-bg-gradient">
              <div className="relative object-cover h-full w-full">
                <img
                  src="/assets/shop-1.jpeg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-[#212f42] opacity-80" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <img
                  src="/assets/shop-2.jpeg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-[#212f42] opacity-90" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <img
                  src="/assets/shop-3.jpeg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-[#212f42] opacity-80" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <img
                  src="/assets/shop-4.jpeg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-[#212f42] opacity-80" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <img
                  src="/assets/shop-5.jpeg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-[#212f42] opacity-80" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </HeroWrapper>
      <ProductDetail singleProduct={singleProduct} id={params.shopId} />
    </ThemeProvider>
  );
}
