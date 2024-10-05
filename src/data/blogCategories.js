"use server";

import fetcher from "./fetcher";
// import revalidate from "./revalidate.service";

export async function createBlogCategory(data) {
  try {
    const category = await fetcher.post("/blogCategories", data);
    return category.data;
  } catch (error) {
    // console.log({ error: error });
    return { error: error };
  }
}

export async function getManyBlogCategories(query = "") {
  const res = await fetcher.get(`/blogCategories?category=${query}`);
  console.log(res);
  return res.data;
}

export async function getOneBlogCategory(id) {
  const res = await fetcher.get(`/blogCategories/${id}`);
  return res.data;
}

export async function updateBlogCategorie(id, data) {
  const res = await fetcher.put(`/blogCategories/${id}`, data);
  return res.data;
}

export async function deleteBlogCategorie(id) {
  const res = await fetcher.get(`/blogCategories/${id}`);
  return res.data;
}
