import React from "react";

export default function Blog({ error, isLoading, news, cut = false }) {
  console.log("news", news);
  if (cut) news.length = 3;
  return (
    <div className="grid lg:-top-20 -top-10 md:-top-16 lg:px-12 px-6 bg-white dark:bg-[#262d34] relative mx:mx-32 md:mx-16 sm:mx-8 p-4 lg:pt-20 pt-12 grid-cols-12 gap-y-7 sm:gap-[30px]">
      {news.map((post) => (
        <div
          key={post.title}
          className="col-span-full sm:col-span-6 lg:col-span-4"
        >
          <figure className="group overflow-hidden bg-gray-900">
            <a href={post.url}>
              <img
                className="aspect-[37/24] h-full w-full max-w-full object-cover duration-300 group-hover:scale-110 group-hover:opacity-75"
                src={post.images[0].url}
                alt={post.blogTitle}
              />
            </a>
          </figure>
          <div className="relative -mt-20 mr-8 lg:mr-10">
            <div className="inline-flex bg-hero  px-2 py-[6px] text-xs font-bold uppercase leading-none text-white">
              {post.categorySlug}
            </div>
            <div className="bg-white dark:bg-[#262d34] p-6">
              <h2 className="mb-4 text-xl font-bold leading-6 lg:tracking-tighter">
                <a
                  href={`/blog/${post.id}`}
                  className="text-primary transition-colors hover:text-hero dark:text-white dark:hover:text-hero"
                >
                  {post.blogTitle}
                </a>
              </h2>
              <div className="text-sm">{post.createdAt}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
