import AddBlog from "@/components/admin/AddBlog";
import { getManyBlogCategories } from "@/data/blogCategories";
// import { getManyCategories } from "@/data/blogCategories";
import React from "react";

export default async function page() {
  const categories = getManyBlogCategories();
  console.log(categories);
  return (
    <div>
      <AddBlog categories={categories} />
    </div>
  );
}
