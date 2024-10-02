import React from "react";

export default function Contact() {
  return (
    <main id="main-content" className="grow  lg:pt-0">
      <div className="pt-14 pb-10 lg:pb-10 lg:pt-40">
        <div className="container">
          <div className="relative -mt-20 mb-14 grid grid-cols-12 gap-x-5 gap-y-10 md:gap-x-[30px] shadow-3xl lg:-mt-[200px] lg:mb-40 py-10 md:py-20 lg:py-22 xl:py-24 isolate">
            <div className="col-start-2 col-end-12 md:col-end-6 md:pb-16">
              <h2 className="font-bold text-primary dark:text-white text-2xl md:text-3xl md:leading-none mb-4 lg:text-4xl xl:text-5xl leading-none tracking-tight xl:tracking-tight xl:mb-10">
                Something
                <br />
                in your <span className="text-hero">mind</span>?<br />
                {"Let’s"} talk!
              </h2>
              <div className="lg:text-lg tracking-tighter lg:leading-8 lg:pr-10">  <p>Send us a message and {"let’s"} discuss your ideas, suggestions, and more!</p>
              </div>
            </div>
            <div className="col-start-2 md:col-start-6 col-end-12">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-7" action="#">
                <div className="md:col-span-full lg:col-span-1">
                  <input
                    className="group-[.is-success]:bg-input-success border border-gray-300 group-[.is-error]:border-danger group-[.is-error]:bg-input-invalid group-[.is-error]:text-danger group-[.is-success]:pr-16 group-[.is-invalid]:pr-16 border-base bg-[length:14px_14px,_46px_46px] bg-[position:right_26px_center,_right_10px_center] bg-no-repeat font-bold leading-8 tracking-tight text-primary transition-all duration-150 placeholder:font-normal placeholder:text-gray-500/60  focus:outline-0 focus:ring-0 dark:border-white/10  dark:text-white dark:bg-inherit dark:placeholder:text-gray-500/80  w-full px-7 py-4 "
                    type="text"
                    name="post-name"
                    id="post-name"
                    placeholder="Name"
                  />
                  <p className="group-[.is-error]:block mt-2 hidden text-sm font-bold text-danger"></p>
                </div>
                <div className="md:col-span-full lg:col-span-1">
                  <input
                    className="border border-gray-300 group-[.is-success]:bg-input-success group-[.is-error]:border-danger group-[.is-error]:bg-input-invalid group-[.is-error]:text-danger group-[.is-success]:pr-16 group-[.is-invalid]:pr-16 border-base bg-[length:14px_14px,_46px_46px] bg-[position:right_26px_center,_right_10px_center] bg-no-repeat font-bold leading-8 tracking-tight text-primary transition-all duration-150 placeholder:font-normal placeholder:text-gray-500/60 focus:border-indigo-500 focus:outline-0 focus:ring-0 dark:border-white/10  dark:text-white dark:bg-inherit dark:placeholder:text-gray-500/80  w-full px-7 py-4"
                    type="email"
                    name="post-email"
                    id="post-email"
                    placeholder="Email"
                  />
                  <p className="group-[.is-error]:block mt-2 hidden text-sm font-bold text-danger"></p>
                </div>
                <div className="col-span-full">
                  <textarea
                    className="border border-gray-300 block border-base w-full px-7 py-4 leading-8 tracking-tight text-primary transition-all duration-150 placeholder:text-gray-500/60 focus:border-indigo-500 focus:outline-0 focus:ring-0 dark:border-white/10  dark:bg-inherit dark:text-white dark:placeholder:text-gray-500/80  h-40 md:h-52"
                    name="post-comment"
                    id="post-comment"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="col-span-full">
                  <input
                    className="bg-hero  dark:bg-inheritfont-bold text-white text-lg tracking-tight py-5 leading-normal mt-4 md:mt-8 hover:cursor-pointer hover:bg-hero/90 transition-colors block w-full"
                    type="submit"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>
            {/* <img
              className="hidden pointer-events-none md:block absolute -z-10 left-0 bottom-0 md:max-w-[290px] lg:max-w-[370px] xl:max-w-none h-auto"
              src="https://valkivid.dan-fisher.dev/assets/img/yt1/contact-form-decoration.png"

              alt=""
            /> */}
          </div>
         
        </div>
      </div>
    </main>
  );
}