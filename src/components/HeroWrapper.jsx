import React from "react";

export default function HeroWrapper({
  children,
  shop = false,
  contact = false,
  blog = false,
  productDetail = false,
}) {
  return (
    <div
      className={`${
        !shop && !contact && !blog && !productDetail && "bg-img-gradient"
      } ${
        blog && "bg-blog"
      } relative w-full lg:h-[400px] md:h-[350px] sm:h-[250px]   overflow-hidden bg-cover bg-left bg-no-repeat `}
    >
      {children}
    </div>
  );
}
