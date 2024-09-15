import React from 'react'
import SocialLink from "./SocialLinks"
export default function BlogDetail({blog}) {
  return (
    <div className="container">
    <article className="grid-col-4 grid gap-x-4 md:grid-cols-12 md:gap-x-6 lg:gap-x-[30px] isolate relative">
      <div className="-mx-16 md:mx-0 col-span-full md:col-start-2 md:col-end-12 bg-white dark:bg-gray-900 h-[210px] -z-10 absolute inset-x-0"></div>
      <header className="col-span-full mb-5 flex flex-col items-start gap-y-6 pt-16 lg:pt-20 md:col-start-3 md:col-end-11 md:mb-14">
        <a className="bg-accent px-3 py-1 text-xs font-bold uppercase leading-snug text-white transition-colors hover:bg-accent/90 md:text-sm" href="#">Previews</a>
        <h1 className="pb-1 text-2xl font-bold leading-tight tracking-tighter text-primary dark:text-white md:text-3xl lg:pr-20 lg:text-5xl lg:leading-none">
          {blog.title}
        </h1>
        <ul className="mb-4 flex flex-wrap justify-center divide-x divide-accent pt-1 text-xs leading-none tracking-tight md:mb-7 md:text-base">
          <li className="px-2 leading-none first:pl-0">December 21st, 2022</li>
          <li className="px-2 leading-none">Jack Master</li>
          
        </ul>
      </header>
      <div className="col-span-full md:col-start-3 md:col-end-11 grid-col-4 grid gap-x-4 md:grid-cols-8 md:gap-x6 lg:gap-x-[30px]">
        <div className="mb-10 col-span-1 mt-3">
         <SocialLink className="flex md:flex-col sticky top-6"/> 
        </div>
        <div className="col-span-full md:col-start-2 md:col-end-9">
          <div className="vv-prose">
            <p>{blog.content}</p>
            <figure className="col-span-full mb-8 md:col-start-2 md:col-end-12 md:mb-14">
              <a className="group relative block h-full overflow-hidden bg-gray-900" href="#">
                <img className="my-0 aspect-video w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-75 lg:my-0" src={blog.urlToImage} alt="" />
                
              </a>
            </figure>
            {/* <p>
              Packaging manufacturers are also increasingly aware of the role of 'the unboxing trend' in their development, and are continually improving their technologies to meet the demand for higher quality printed packages. Boxes are no longer just a transportation tool - they are a valuable marketing billboard delivered right to the customers.
            </p> */}
          </div>
        </div>
      </div>
     
    </article>
  </div>
  
  )
}
