import React from "react";

export default function Blog({news}) {
 

  return (
    <div className="grid lg:px-24 md:px-16 sm:px-8 px-4 lg:mt-24 mt-12 grid-cols-12 gap-y-7 sm:gap-[30px]">
      {news.map((post) => (
        <div
          key={post.title}
          className="col-span-full sm:col-span-6 lg:col-span-4"
        >
          <figure className="group overflow-hidden bg-gray-900">
            <a href={post.url}>
              <img
                className="aspect-[37/24] h-full w-full max-w-full object-cover duration-300 group-hover:scale-110 group-hover:opacity-75"
                src={post.urlToImage}
                alt={post.title}
              />
            </a>
          </figure>
          <div className="relative -mt-20 mr-8 lg:mr-10">
            <div className="inline-flex bg-hero px-2 py-[6px] text-xs font-bold uppercase leading-none text-white">
              Entertainment
            </div>
            <div className="bg-white dark:bg-gray-800 p-6">
              <h2 className="mb-4 text-xl font-bold leading-6 lg:tracking-tighter">
                <a
                  href={post.url}
                  className="text-primary transition-colors hover:text-hero dark:text-white dark:hover:text-hero"
                >
                  {post.title}
                </a>
              </h2>
              <div className="text-sm">{post.publishedAt}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
