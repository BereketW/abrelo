import Image from "next/image";
import React from "react";
export default function About() {
  return (
    <main id="main-content" className="grow dark:bg-[#262d34]  lg:pt-0">
      <div className="pt-14 pb-24 lg:pb-52 lg:pt-40">
        <div className="container">
          <figure className="relative -mt-20 mb-14 bg-white shadow-3xl lg:-mt-[200px] lg:mb-40">
            <a href="#">
              {/* <img className="h-auto w-full" src="assets/img/yt1/samples/about-youtube-img.jpg"
          alt="YouTube Channel"/> */}
            </a>
          </figure>
          <section className="grid grid-cols-12 gap-x-5 gap-y-10 md:gap-x-6 lg:gap-x-[30px] mb-20 md:mb-40 lg:mb-52 xl:mb-60">
            <div className="col-span-full md:col-start-1 md:col-end-6 lg:col-start-2 lg:col-end-6 xl:pt-14">
              <hgroup className="flex flex-col-reverse gap-y-2 md:gap-y-3 mb-6 md:mb-12">
                <h2 className="text-2xl font-bold leading-none text-primary dark:text-white md:text-3xl lg:text-4xl lg:tracking-tighter xl:text-5xl">
                  Who is Abreham Tekeste?
                </h2>
                <p className="leading-tight tracking-tighter text-primary dark:text-white xl:text-2xl">
                  Get to know me
                </p>
              </hgroup>
              <div className="tracking-tighter md:text-lg md:leading-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="col-span-full md:col-start-7 md:col-end-13 md:pl-7 lg:col-start-7 lg:col-end-12 lg:pl-[70px]">
              <figure className="relative isolate mx-auto w-fit after:absolute after:left-0 after:top-0 after:-z-10 after:ml-[20px] after:mt-[20px] after:h-full after:w-full after:bg-hero after:lg:ml-[30px] after:lg:mt-[30px]">
                {/* <img           src="https://yt3.ggpht.com/ytc/AAUvwnjnKn-gLP2S7YuxnRIAO3pBNFgU9wxDVsZlzsabQQ=s900-c-k-c0x00ffffff-no-rj"
 alt="Jack Parker"/> */}
                <Image
                  src={"/assets/about-abrelo.jpg"}
                  width={400}
                  height={300}
                  alt="abrelo"
                />
              </figure>
            </div>
          </section>
          <section className="mb-16 grid grid-cols-12 gap-x-5 gap-y-10 md:mb-28 md:gap-x-6 lg:mb-44 lg:gap-x-[30px] xl:mb-52">
            <div className="col-span-full">
              <hgroup className="flex flex-col-reverse gap-y-2 md:gap-y-3 mb-6 md:mb-12 xl:mb-[70px] items-center">
                <h2 className="text-2xl font-bold leading-none text-primary dark:text-white md:text-3xl lg:text-4xl lg:tracking-tighter xl:text-5xl">
                  Channel Stats
                </h2>
                <p className="leading-tight tracking-tighter text-primary dark:text-white xl:text-2xl">
                  Take a look at the
                </p>
              </hgroup>
            </div>
            <div className="col-span-full grid grid-cols-12 gap-5 md:gap-[30px]">
              <div className="col-span-full grid grid-cols-9 gap-5 md:gap-[30px] lg:col-span-9">
                <div className="col-span-full md:col-span-3">
                  <div className="relative flex h-[360px] flex-col items-center justify-center overflow-hidden bg-white dark:bg-gray-800 pb-16 text-center shadow-3xl">
                    <div className="mb-2 text-3xl font-bold uppercase leading-none tracking-tighter text-primary dark:text-white lg:mb-4 lg:text-4xl xl:text-5xl">
                      235
                    </div>
                    <hgroup>
                      <h5 className="text-lg text-primary dark:text-white">
                        Videos Posted
                      </h5>
                      <p className="text-sm">of all time</p>
                    </hgroup>
                    <svg
                      className="absolute -right-[32px] -bottom-[20px] h-[116px] w-[calc(100%+32px)] min-w-[480px]"
                      width="480"
                      height="116"
                      viewBox="0 0 480 116"
                      fill="none"
                      stroke="none"
                    >
                      <path
                        className="fill-gray-150 dark:fill-gray-700"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M469.1 7.999L455.1 9.999L444.1 0.999001L434.1 19.999L421.1 26.999L409.1 24.999L404.1 18.999L389.1 34.1L372.1 41.999L342.1 17.999L335.1 26.999L327.1 24.999L319.1 19.999L312.1 27.999H300.1L282.1 39.999L271.1 35.999L262.1 45.999L250.1 33.999L235.1 34.1L226.1 16.999L216.1 19.999L210.1 12.999L194.1 27.999L171.1 6.999L166.1 15.1L156.1 21.999L140.1 7.999L119.1 14.999L104.1 10.1L91.1 25.999H74.1L66.1 16.999L57 21.999L43.1 4.999L34.1 10.1L23 4.999L12 6.999L1 3.999V114.999H478.1L469.1 7.999Z"
                      ></path>
                      <path
                        className="fill-gray-180 dark:fill-gray-900"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M443.785 -0.550426L455.393 8.94694L470.008 6.85918L479.188 115.999H0V2.68975L12.0443 5.97456L23.1312 3.95875L34.0523 8.97756L43.3404 3.71327L57.2476 20.722L66.3175 15.7385L74.5491 24.999H90.6259L103.759 8.93678L119.097 13.946L140.327 6.86914L156.173 20.7339L165.359 14.3961L170.883 5.44671L194.091 26.6367L210.179 11.5544L216.436 18.8542L226.601 15.8045L235.702 33.0959L250.511 32.9962L262.062 44.5466L270.808 34.8287L281.966 38.8863L299.797 26.999H311.646L318.908 18.6998L327.496 24.0672L334.711 25.8709L341.933 16.5848L372.241 40.8309L388.517 33.2684L404.165 17.5147L409.631 24.0736L420.927 25.9564L433.357 19.2632L443.785 -0.550426ZM444.415 2.54843L434.843 20.7348L421.273 28.0416L408.569 25.9244L404.035 20.4832L389.684 34.9316L371.959 43.1671L342.267 19.4132L335.489 28.1271L326.704 25.9308L319.292 21.2982L312.554 28.999H300.403L282.234 41.1117L271.392 37.1693L262.138 47.4514L249.689 35.0018L234.498 35.1041L225.599 18.1935L215.764 21.1438L210.021 14.4436L194.109 29.3613L171.317 8.5513L166.841 15.8039L156.027 23.2641L139.873 9.12887L119.103 16.052L104.441 11.2632L91.5741 26.999H73.6509L65.8825 18.2595L56.7524 23.276L42.8596 6.28473L34.1477 11.2224L22.8688 6.03925L11.9557 8.02345L2 5.30825V113.999H477.012L468.192 9.13882L454.807 11.0511L444.415 2.54843Z"
                      ></path>
                    </svg>
                    <svg
                      className="absolute -left-[28px] -bottom-[52px] h-[115px] w-[calc(100%+28px)] min-w-[480px]"
                      width="479"
                      height="115"
                      viewBox="0 0 479 115"
                      fill="none"
                    >
                      <path
                        className="fill-hero"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.09998 7.99901L23.1 9.99901L34.1 0.100006L44.1 19.999L58.1 27.999L67.1 22.999L74.1 18.999L89.1 34.999L106.1 41.999L136.1 17.999L143.1 26.999L151.1 24.1L159.1 19.999L166.1 27.999H178.1L196.1 39.999L207.1 35.999L216.1 45.999L228.1 33.999L243.1 34.999L252.1 16.999L262.1 19.999L268.1 12.999L284.1 27.999L304.1 24.1L312.1 15.999L322.1 21.999L338.1 7.99901L359.1 14.999L374.1 10.999L387.1 25.999H404.1L412.1 16.999L422.1 21.999L435.1 4.99901L444.1 10.999L456.1 4.99901L467.1 6.99901L478.1 3.99901V114.999H0.0999756L9.09998 7.99901Z"
                      ></path>
                      <path
                        className="fill-hero-600"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.1 9.99901L9.09998 7.99901L0.0999756 114.999H478.1V3.99901L467.1 6.99901L456.1 4.99901L444.1 10.999L435.1 4.99901L422.1 21.999L412.1 16.999L404.1 25.999H387.1L374.1 10.999L359.1 14.999L338.1 7.99901L322.1 21.999L312.1 15.999L304.1 24.1L284.1 27.999L268.1 12.999L262.1 19.999L252.1 16.999L243.1 34.999L228.1 33.999L216.1 45.999L207.1 35.999L196.1 39.999L178.1 27.999H166.1L159.1 19.999L151.1 24.1L143.1 26.999L136.1 17.999L106.1 41.999L89.1 34.999L74.1 18.999L67.1 22.999L58.1 27.999L44.1 19.999L34.1 0.100006L23.1 9.99901ZM33.4897 3.33977L23.7428 12.1111L10.9153 10.2786L2.27526 112.999H476.1V6.61751L467.189 9.0479L456.398 7.086L443.956 13.3069L435.55 7.70281L422.684 24.5273L412.576 19.4733L404.998 27.999H386.187L373.407 13.2536L359.036 17.0859L338.555 10.2587L322.32 24.4637L312.419 18.5226L305.089 25.9449L283.478 30.1578L268.258 15.8883L262.772 22.2886L253.137 19.398L244.294 37.083L228.872 36.0549L216.024 48.9038L206.516 38.3396L195.833 42.2244L177.494 29.999H165.192L158.623 22.491L151.9 25.9374L142.414 29.3748L135.766 20.8274L106.429 44.2973L87.9375 36.6833L73.721 21.519L68.0818 24.7415L58.0861 30.2946L42.5839 21.4362L33.4897 3.33977Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="col-span-full md:col-span-3">
                  <div className="relative flex h-[360px] flex-col items-center justify-center overflow-hidden bg-white dark:bg-gray-800 pb-16 text-center shadow-3xl">
                    <div className="mb-2 text-3xl font-bold uppercase leading-none tracking-tighter text-primary dark:text-white lg:mb-4 lg:text-4xl xl:text-5xl">
                      942k
                    </div>
                    <hgroup>
                      <h5 className="text-lg text-primary dark:text-white">
                        Subscribers
                      </h5>
                      <p className="text-sm">of all time</p>
                    </hgroup>
                    <svg
                      className="absolute -right-[32px] -bottom-[20px] h-[116px] w-[calc(100%+32px)] min-w-[480px]"
                      width="480"
                      height="116"
                      viewBox="0 0 480 116"
                      fill="none"
                      stroke="none"
                    >
                      <path
                        className="fill-gray-150 dark:fill-gray-700"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M469.1 7.999L455.1 9.999L444.1 0.999001L434.1 19.999L421.1 26.999L409.1 24.999L404.1 18.999L389.1 34.1L372.1 41.999L342.1 17.999L335.1 26.999L327.1 24.999L319.1 19.999L312.1 27.999H300.1L282.1 39.999L271.1 35.999L262.1 45.999L250.1 33.999L235.1 34.1L226.1 16.999L216.1 19.999L210.1 12.999L194.1 27.999L171.1 6.999L166.1 15.1L156.1 21.999L140.1 7.999L119.1 14.999L104.1 10.1L91.1 25.999H74.1L66.1 16.999L57 21.999L43.1 4.999L34.1 10.1L23 4.999L12 6.999L1 3.999V114.999H478.1L469.1 7.999Z"
                      ></path>
                      <path
                        className="fill-gray-180 dark:fill-gray-900"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M443.785 -0.550426L455.393 8.94694L470.008 6.85918L479.188 115.999H0V2.68975L12.0443 5.97456L23.1312 3.95875L34.0523 8.97756L43.3404 3.71327L57.2476 20.722L66.3175 15.7385L74.5491 24.999H90.6259L103.759 8.93678L119.097 13.946L140.327 6.86914L156.173 20.7339L165.359 14.3961L170.883 5.44671L194.091 26.6367L210.179 11.5544L216.436 18.8542L226.601 15.8045L235.702 33.0959L250.511 32.9962L262.062 44.5466L270.808 34.8287L281.966 38.8863L299.797 26.999H311.646L318.908 18.6998L327.496 24.0672L334.711 25.8709L341.933 16.5848L372.241 40.8309L388.517 33.2684L404.165 17.5147L409.631 24.0736L420.927 25.9564L433.357 19.2632L443.785 -0.550426ZM444.415 2.54843L434.843 20.7348L421.273 28.0416L408.569 25.9244L404.035 20.4832L389.684 34.9316L371.959 43.1671L342.267 19.4132L335.489 28.1271L326.704 25.9308L319.292 21.2982L312.554 28.999H300.403L282.234 41.1117L271.392 37.1693L262.138 47.4514L249.689 35.0018L234.498 35.1041L225.599 18.1935L215.764 21.1438L210.021 14.4436L194.109 29.3613L171.317 8.5513L166.841 15.8039L156.027 23.2641L139.873 9.12887L119.103 16.052L104.441 11.2632L91.5741 26.999H73.6509L65.8825 18.2595L56.7524 23.276L42.8596 6.28473L34.1477 11.2224L22.8688 6.03925L11.9557 8.02345L2 5.30825V113.999H477.012L468.192 9.13882L454.807 11.0511L444.415 2.54843Z"
                      ></path>
                    </svg>
                    <svg
                      className="absolute -left-[28px] -bottom-[52px] h-[115px] w-[calc(100%+28px)] min-w-[480px]"
                      width="479"
                      height="115"
                      viewBox="0 0 479 115"
                      fill="none"
                    >
                      <path
                        className="fill-hero"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.09998 7.99901L23.1 9.99901L34.1 0.100006L44.1 19.999L58.1 27.999L67.1 22.999L74.1 18.999L89.1 34.999L106.1 41.999L136.1 17.999L143.1 26.999L151.1 24.1L159.1 19.999L166.1 27.999H178.1L196.1 39.999L207.1 35.999L216.1 45.999L228.1 33.999L243.1 34.999L252.1 16.999L262.1 19.999L268.1 12.999L284.1 27.999L304.1 24.1L312.1 15.999L322.1 21.999L338.1 7.99901L359.1 14.999L374.1 10.999L387.1 25.999H404.1L412.1 16.999L422.1 21.999L435.1 4.99901L444.1 10.999L456.1 4.99901L467.1 6.99901L478.1 3.99901V114.999H0.0999756L9.09998 7.99901Z"
                      ></path>
                      <path
                        className="fill-hero-600"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.1 9.99901L9.09998 7.99901L0.0999756 114.999H478.1V3.99901L467.1 6.99901L456.1 4.99901L444.1 10.999L435.1 4.99901L422.1 21.999L412.1 16.999L404.1 25.999H387.1L374.1 10.999L359.1 14.999L338.1 7.99901L322.1 21.999L312.1 15.999L304.1 24.1L284.1 27.999L268.1 12.999L262.1 19.999L252.1 16.999L243.1 34.999L228.1 33.999L216.1 45.999L207.1 35.999L196.1 39.999L178.1 27.999H166.1L159.1 19.999L151.1 24.1L143.1 26.999L136.1 17.999L106.1 41.999L89.1 34.999L74.1 18.999L67.1 22.999L58.1 27.999L44.1 19.999L34.1 0.100006L23.1 9.99901ZM33.4897 3.33977L23.7428 12.1111L10.9153 10.2786L2.27526 112.999H476.1V6.61751L467.189 9.0479L456.398 7.086L443.956 13.3069L435.55 7.70281L422.684 24.5273L412.576 19.4733L404.998 27.999H386.187L373.407 13.2536L359.036 17.0859L338.555 10.2587L322.32 24.4637L312.419 18.5226L305.089 25.9449L283.478 30.1578L268.258 15.8883L262.772 22.2886L253.137 19.398L244.294 37.083L228.872 36.0549L216.024 48.9038L206.516 38.3396L195.833 42.2244L177.494 29.999H165.192L158.623 22.491L151.9 25.9374L142.414 29.3748L135.766 20.8274L106.429 44.2973L87.9375 36.6833L73.721 21.519L68.0818 24.7415L58.0861 30.2946L42.5839 21.4362L33.4897 3.33977Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="col-span-full md:col-span-3">
                  <div className="relative flex h-[360px] flex-col items-center justify-center overflow-hidden bg-white dark:bg-gray-800 pb-16 text-center shadow-3xl">
                    <div className="mb-2 text-3xl font-bold uppercase leading-none tracking-tighter text-primary dark:text-white lg:mb-4 lg:text-4xl xl:text-5xl">
                      6.8M
                    </div>
                    <hgroup>
                      <h5 className="text-lg text-primary dark:text-white">
                        Views
                      </h5>
                      <p className="text-sm">of all time</p>
                    </hgroup>
                    <svg
                      className="absolute -right-[32px] -bottom-[20px] h-[116px] w-[calc(100%+32px)] min-w-[480px]"
                      width="480"
                      height="116"
                      viewBox="0 0 480 116"
                      fill="none"
                      stroke="none"
                    >
                      <path
                        className="fill-gray-150 dark:fill-gray-700"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M469.1 7.999L455.1 9.999L444.1 0.999001L434.1 19.999L421.1 26.999L409.1 24.999L404.1 18.999L389.1 34.1L372.1 41.999L342.1 17.999L335.1 26.999L327.1 24.999L319.1 19.999L312.1 27.999H300.1L282.1 39.999L271.1 35.999L262.1 45.999L250.1 33.999L235.1 34.1L226.1 16.999L216.1 19.999L210.1 12.999L194.1 27.999L171.1 6.999L166.1 15.1L156.1 21.999L140.1 7.999L119.1 14.999L104.1 10.1L91.1 25.999H74.1L66.1 16.999L57 21.999L43.1 4.999L34.1 10.1L23 4.999L12 6.999L1 3.999V114.999H478.1L469.1 7.999Z"
                      ></path>
                      <path
                        className="fill-gray-180 dark:fill-gray-900"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M443.785 -0.550426L455.393 8.94694L470.008 6.85918L479.188 115.999H0V2.68975L12.0443 5.97456L23.1312 3.95875L34.0523 8.97756L43.3404 3.71327L57.2476 20.722L66.3175 15.7385L74.5491 24.999H90.6259L103.759 8.93678L119.097 13.946L140.327 6.86914L156.173 20.7339L165.359 14.3961L170.883 5.44671L194.091 26.6367L210.179 11.5544L216.436 18.8542L226.601 15.8045L235.702 33.0959L250.511 32.9962L262.062 44.5466L270.808 34.8287L281.966 38.8863L299.797 26.999H311.646L318.908 18.6998L327.496 24.0672L334.711 25.8709L341.933 16.5848L372.241 40.8309L388.517 33.2684L404.165 17.5147L409.631 24.0736L420.927 25.9564L433.357 19.2632L443.785 -0.550426ZM444.415 2.54843L434.843 20.7348L421.273 28.0416L408.569 25.9244L404.035 20.4832L389.684 34.9316L371.959 43.1671L342.267 19.4132L335.489 28.1271L326.704 25.9308L319.292 21.2982L312.554 28.999H300.403L282.234 41.1117L271.392 37.1693L262.138 47.4514L249.689 35.0018L234.498 35.1041L225.599 18.1935L215.764 21.1438L210.021 14.4436L194.109 29.3613L171.317 8.5513L166.841 15.8039L156.027 23.2641L139.873 9.12887L119.103 16.052L104.441 11.2632L91.5741 26.999H73.6509L65.8825 18.2595L56.7524 23.276L42.8596 6.28473L34.1477 11.2224L22.8688 6.03925L11.9557 8.02345L2 5.30825V113.999H477.012L468.192 9.13882L454.807 11.0511L444.415 2.54843Z"
                      ></path>
                    </svg>
                    <svg
                      className="absolute -left-[28px] -bottom-[52px] h-[115px] w-[calc(100%+28px)] min-w-[480px]"
                      width="479"
                      height="115"
                      viewBox="0 0 479 115"
                      fill="none"
                    >
                      <path
                        className="fill-hero"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.09998 7.99901L23.1 9.99901L34.1 0.100006L44.1 19.999L58.1 27.999L67.1 22.999L74.1 18.999L89.1 34.999L106.1 41.999L136.1 17.999L143.1 26.999L151.1 24.1L159.1 19.999L166.1 27.999H178.1L196.1 39.999L207.1 35.999L216.1 45.999L228.1 33.999L243.1 34.999L252.1 16.999L262.1 19.999L268.1 12.999L284.1 27.999L304.1 24.1L312.1 15.999L322.1 21.999L338.1 7.99901L359.1 14.999L374.1 10.999L387.1 25.999H404.1L412.1 16.999L422.1 21.999L435.1 4.99901L444.1 10.999L456.1 4.99901L467.1 6.99901L478.1 3.99901V114.999H0.0999756L9.09998 7.99901Z"
                      ></path>
                      <path
                        className="fill-hero-600"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.1 9.99901L9.09998 7.99901L0.0999756 114.999H478.1V3.99901L467.1 6.99901L456.1 4.99901L444.1 10.999L435.1 4.99901L422.1 21.999L412.1 16.999L404.1 25.999H387.1L374.1 10.999L359.1 14.999L338.1 7.99901L322.1 21.999L312.1 15.999L304.1 24.1L284.1 27.999L268.1 12.999L262.1 19.999L252.1 16.999L243.1 34.999L228.1 33.999L216.1 45.999L207.1 35.999L196.1 39.999L178.1 27.999H166.1L159.1 19.999L151.1 24.1L143.1 26.999L136.1 17.999L106.1 41.999L89.1 34.999L74.1 18.999L67.1 22.999L58.1 27.999L44.1 19.999L34.1 0.100006L23.1 9.99901ZM33.4897 3.33977L23.7428 12.1111L10.9153 10.2786L2.27526 112.999H476.1V6.61751L467.189 9.0479L456.398 7.086L443.956 13.3069L435.55 7.70281L422.684 24.5273L412.576 19.4733L404.998 27.999H386.187L373.407 13.2536L359.036 17.0859L338.555 10.2587L322.32 24.4637L312.419 18.5226L305.089 25.9449L283.478 30.1578L268.258 15.8883L262.772 22.2886L253.137 19.398L244.294 37.083L228.872 36.0549L216.024 48.9038L206.516 38.3396L195.833 42.2244L177.494 29.999H165.192L158.623 22.491L151.9 25.9374L142.414 29.3748L135.766 20.8274L106.429 44.2973L87.9375 36.6833L73.721 21.519L68.0818 24.7415L58.0861 30.2946L42.5839 21.4362L33.4897 3.33977Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="col-span-9">
                  <div className="relative flex min-h-[220px] flex-wrap bg-white dark:bg-gray-800 shadow-3xl overflow-hidden">
                    <div className="relative flex-1 basis-full px-6 pt-8 pb-11 md:p-11 md:pr-14 md:basis-auto">
                      <h3 className="text-2xl font-bold text-primary dark:text-white md:text-3xl mb-6 lg:mb-10 xl:mb-12 lg:text-3.5xl lg:tracking-tight">
                        Top Video
                      </h3>
                      <ul className="flex flex-wrap">
                        <li className="flex-1">
                          <div className="text-1.5xl font-bold leading-tight tracking-tight text-primary dark:text-white mb-1">
                            5.3M
                          </div>
                          <div className="text-sm leading-tight text-primary dark:text-white">
                            Views
                          </div>
                        </li>
                        <li className="flex-1">
                          <div className="text-1.5xl font-bold leading-tight tracking-tight text-primary dark:text-white mb-1">
                            870K
                          </div>
                          <div className="text-sm leading-tight text-primary dark:text-white">
                            Likes
                          </div>
                        </li>
                        <li className="flex-1">
                          <div className="text-1.5xl font-bold leading-tight tracking-tight text-primary dark:text-white mb-1">
                            419K
                          </div>
                          <div className="text-sm leading-tight text-primary dark:text-white">
                            Comments
                          </div>
                        </li>
                      </ul>
                      <div className="absolute -left-[39px] -bottom-[46px] h-[90px] w-[calc(100%+39px)] bg-bars-gray dark:bg-dark-bars-gray bg-[length:576px_90px] bg-repeat-x"></div>
                      <div className="absolute -left-[39px] -bottom-[55px] h-[81px] w-[calc(100%+39px)] bg-bars-hero bg-[length:576px_81px] bg-repeat-x"></div>
                      <div className="absolute -left-[27px] -bottom-[46px] h-[72px] w-[calc(100%+27px)] bg-bars-hero-200 bg-[length:539px_79px] bg-repeat-x"></div>
                    </div>
                    <div className="basis-full md:basis-[45%] overflow-hidden">
                      <a
                        href="https://www.youtube.com/watch?v=XE0fU9PCrWE"
                        className="glightbox group relative block h-full overflow-hidden bg-gray-900"
                      >
                        {/* <img className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-75"
                    src="assets/img/yt1/samples/about-featured-cover.jpg" alt=""/> */}
                        <span className="absolute top-1/2 left-1/2 flex aspect-square w-[60px] -translate-x-2/4 -translate-y-2/4 items-center justify-center rounded-full bg-hero">
                          <svg
                            role="img"
                            className="mr-[-3px] h-[22px] w-[18px] fill-white"
                          >
                            <use xlink="https://valkivid.dan-fisher.dev/assets/img/yt1/sprite.svg#play"></use>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-full grid grid-cols-2 lg:col-span-3 gap-7 md:gap-[30px]">
                <div className="col-span-full sm:col-span-1 lg:col-span-full">
                  <div className="relative overflow-hidden shadow-3xl bg-white dark:bg-gray-800 min-h-[130px] pl-6 xl:pl-10 py-6">
                    <div className="font-bold text-primary dark:text-white text-2xl leading-none xl:text-[26px] tracking-tighter mb-2 uppercase flex items-start gap-x-3">
                      <span>16.925</span>
                      <span className="inline-flex items-center gap-1">
                        <svg role="img" className="h-4 w-4 fill-info">
                          <use xlink="https://valkivid.dan-fisher.dev/assets/img/yt1/sprite.svg#plus-circle"></use>
                        </svg>
                        <span className="font-bold text-primary dark:text-white text-xs leading-none tracking-normal">
                          1.4%
                        </span>
                      </span>
                    </div>
                    <hgroup>
                      <h5 className="text-primary dark:text-white text-lg lg:text-base dark:lg:text-white xl:text-lg tracking-tighter">
                        Subscribers
                      </h5>
                      <p className="text-sm lg:text-xs xl:text-sm">
                        last month
                      </p>
                    </hgroup>
                    <svg
                      className="absolute -right-[80px] -bottom-6 w-[244px] h-[182px]"
                      width="244"
                      height="182"
                      viewBox="0 0 244 182"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-hero"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.10003 179.999C3.10003 179.999 13.096 130.04 75.094 128.119C134.669 126.273 149.037 97.856 149.1 65.999C150.99 33.213 182.535 1.99899 241.1 1.99899L233.1 179.999H3.10003Z"
                      ></path>
                      <path
                        className="fill-hero-600"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M151.1 66.0594C151.059 82.2392 147.386 97.8874 135.845 109.71C124.299 121.539 105.222 129.186 75.156 130.118C44.7753 131.059 27.3108 143.73 17.4056 156.034C12.43 162.214 9.33429 168.338 7.4848 172.913C6.65149 174.974 6.07304 176.715 5.6906 177.999H231.188L239.008 4.01248C182.512 4.74355 152.919 35.0769 151.1 66.0594ZM3.10003 179.999L1.1389 179.607L0.660217 181.999H235.012L243.192 -0.00100708H241.1C181.861 -0.00100708 149.074 31.6937 147.103 65.8839L147.1 65.9394L147.1 65.995C147.069 81.6522 143.523 96.1183 132.983 106.916C122.435 117.722 104.541 125.206 75.0321 126.12C43.4147 127.1 24.8822 140.369 14.2899 153.525C9.01683 160.075 5.73864 166.56 3.77644 171.413C2.79466 173.841 2.14004 175.867 1.72872 177.295C1.52299 178.01 1.37795 178.576 1.28315 178.969C1.23575 179.165 1.2009 179.319 1.17729 179.426C1.16549 179.48 1.15649 179.522 1.15015 179.552L1.1426 179.588L1.14027 179.6L1.13947 179.604C1.13947 179.604 1.1389 179.607 3.10003 179.999Z"
                      ></path>
                      <path
                        className="fill-white dark:fill-gray-700"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M76.999 120.02C81.414 120.02 84.992 123.601 84.992 128.019C84.992 132.436 81.414 136.017 76.999 136.017C72.585 136.017 69.006 132.436 69.006 128.019C69.006 123.601 72.585 120.02 76.999 120.02Z"
                      ></path>
                      <path
                        className="fill-hero-600"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M76.999 122.02C73.6909 122.02 71.006 124.704 71.006 128.019C71.006 131.333 73.6907 134.017 76.999 134.017C80.3081 134.017 82.992 131.333 82.992 128.019C82.992 124.704 80.308 122.02 76.999 122.02ZM67.006 128.019C67.006 122.498 71.4792 118.02 76.999 118.02C82.5201 118.02 86.992 122.498 86.992 128.019C86.992 133.539 82.5199 138.017 76.999 138.017C71.4793 138.017 67.006 133.539 67.006 128.019Z"
                      ></path>
                      <path
                        className="fill-white dark:fill-gray-700"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M149.994 59.013C154.409 59.013 157.987 62.594 157.987 67.01C157.987 71.428 154.409 75.009 149.994 75.009C145.58 75.009 142.001 71.428 142.001 67.01C142.001 62.594 145.58 59.013 149.994 59.013Z"
                      ></path>
                      <path
                        className="fill-hero-600"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M148.994 61.013C145.686 61.013 143.001 63.6976 143.001 67.01C143.001 70.3247 145.686 73.009 148.994 73.009C152.303 73.009 154.987 70.3249 154.987 67.01C154.987 63.6974 152.303 61.013 148.994 61.013ZM139.001 67.01C139.001 61.4904 143.474 57.013 148.994 57.013C154.515 57.013 158.987 61.4906 158.987 67.01C158.987 72.5311 154.515 77.009 148.994 77.009C143.474 77.009 139.001 72.5313 139.001 67.01Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-1 lg:col-span-full">
                  <div className="relative overflow-hidden shadow-3xl bg-white dark:bg-gray-800 min-h-[130px] pl-6 xl:pl-10 py-6">
                    <div className="font-bold text-primary dark:text-white text-2xl leading-none xl:text-[26px] tracking-tighter mb-2 uppercase flex items-start gap-x-3">
                      <span>365K</span>
                      <span className="inline-flex items-center gap-1">
                        <svg role="img" className="h-4 w-4 fill-danger">
                          <use xlink="https://valkivid.dan-fisher.dev/assets/img/yt1/sprite.svg#minus-circle"></use>
                        </svg>
                        <span className="font-bold text-primary dark:text-white text-xs leading-none tracking-normal">
                          0.3%
                        </span>
                      </span>
                    </div>
                    <hgroup>
                      <h5 className="text-primary dark:text-white text-lg lg:text-base dark:lg:text-white xl:text-lg tracking-tighter">
                        Subscribers
                      </h5>
                      <p className="text-sm lg:text-xs xl:text-sm">last year</p>
                    </hgroup>
                    <svg
                      className="absolute -right-[80px] -bottom-6 w-[244px] h-[182px]"
                      width="244"
                      height="182"
                      viewBox="0 0 244 182"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-gray-150 dark:fill-gray-700"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.10003 179.999C3.10003 179.999 13.096 130.04 75.094 128.119C134.669 126.273 149.037 97.856 149.1 65.999C150.99 33.213 182.535 1.99899 241.1 1.99899L233.1 179.999H3.10003Z"
                      ></path>
                      <path
                        className="fill-gray-180 dark:fill-gray-900"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M151.1 66.0594C151.059 82.2392 147.386 97.8874 135.845 109.71C124.299 121.539 105.222 129.186 75.156 130.118C44.7753 131.059 27.3108 143.73 17.4056 156.034C12.43 162.214 9.33429 168.338 7.4848 172.913C6.65149 174.974 6.07304 176.715 5.6906 177.999H231.188L239.008 4.01248C182.512 4.74355 152.919 35.0769 151.1 66.0594ZM3.10003 179.999L1.1389 179.607L0.660217 181.999H235.012L243.192 -0.00100708H241.1C181.861 -0.00100708 149.074 31.6937 147.103 65.8839L147.1 65.9394L147.1 65.995C147.069 81.6522 143.523 96.1183 132.983 106.916C122.435 117.722 104.541 125.206 75.0321 126.12C43.4147 127.1 24.8822 140.369 14.2899 153.525C9.01683 160.075 5.73864 166.56 3.77644 171.413C2.79466 173.841 2.14004 175.867 1.72872 177.295C1.52299 178.01 1.37795 178.576 1.28315 178.969C1.23575 179.165 1.2009 179.319 1.17729 179.426C1.16549 179.48 1.15649 179.522 1.15015 179.552L1.1426 179.588L1.14027 179.6L1.13947 179.604C1.13947 179.604 1.1389 179.607 3.10003 179.999Z"
                      ></path>
                      <path
                        className="fill-white dark:fill-gray-700"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M76.999 120.02C81.414 120.02 84.992 123.601 84.992 128.019C84.992 132.436 81.414 136.017 76.999 136.017C72.585 136.017 69.006 132.436 69.006 128.019C69.006 123.601 72.585 120.02 76.999 120.02Z"
                      ></path>
                      <path
                        className="fill-gray-180 dark:fill-gray-900"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M76.999 122.02C73.6909 122.02 71.006 124.704 71.006 128.019C71.006 131.333 73.6907 134.017 76.999 134.017C80.3081 134.017 82.992 131.333 82.992 128.019C82.992 124.704 80.308 122.02 76.999 122.02ZM67.006 128.019C67.006 122.498 71.4792 118.02 76.999 118.02C82.5201 118.02 86.992 122.498 86.992 128.019C86.992 133.539 82.5199 138.017 76.999 138.017C71.4793 138.017 67.006 133.539 67.006 128.019Z"
                      ></path>
                      <path
                        className="fill-white dark:fill-gray-700"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M149.994 59.013C154.409 59.013 157.987 62.594 157.987 67.01C157.987 71.428 154.409 75.009 149.994 75.009C145.58 75.009 142.001 71.428 142.001 67.01C142.001 62.594 145.58 59.013 149.994 59.013Z"
                      ></path>
                      <path
                        className="fill-gray-180 dark:fill-gray-900"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M148.994 61.013C145.686 61.013 143.001 63.6976 143.001 67.01C143.001 70.3247 145.686 73.009 148.994 73.009C152.303 73.009 154.987 70.3249 154.987 67.01C154.987 63.6974 152.303 61.013 148.994 61.013ZM139.001 67.01C139.001 61.4904 143.474 57.013 148.994 57.013C154.515 57.013 158.987 61.4906 158.987 67.01C158.987 72.5311 154.515 77.009 148.994 77.009C143.474 77.009 139.001 72.5313 139.001 67.01Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-1 lg:col-span-full">
                  <div className="relative overflow-hidden shadow-3xl bg-white dark:bg-gray-800 min-h-[130px] pl-6 xl:pl-10 py-6">
                    <div className="font-bold text-primary dark:text-white text-2xl leading-none xl:text-[26px] tracking-tighter mb-2 uppercase flex items-start gap-x-3">
                      <span>721.362</span>
                      <span className="inline-flex items-center gap-1">
                        <svg role="img" className="h-4 w-4 fill-info">
                          <use xlink="https://valkivid.dan-fisher.dev/assets/img/yt1/sprite.svg#plus-circle"></use>
                        </svg>
                        <span className="font-bold text-primary dark:text-white text-xs leading-none tracking-normal">
                          2.1%
                        </span>
                      </span>
                    </div>
                    <hgroup>
                      <h5 className="text-primary dark:text-white text-lg lg:text-base dark:lg:text-white xl:text-lg tracking-tighter">
                        Views
                      </h5>
                      <p className="text-sm lg:text-xs xl:text-sm">
                        last month
                      </p>
                    </hgroup>
                    <svg
                      className="absolute -right-[80px] -bottom-6 w-[244px] h-[182px]"
                      width="244"
                      height="182"
                      viewBox="0 0 244 182"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-hero"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.10003 179.999C3.10003 179.999 13.096 130.04 75.094 128.119C134.669 126.273 149.037 97.856 149.1 65.999C150.99 33.213 182.535 1.99899 241.1 1.99899L233.1 179.999H3.10003Z"
                      ></path>
                      <path
                        className="fill-hero-600"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M151.1 66.0594C151.059 82.2392 147.386 97.8874 135.845 109.71C124.299 121.539 105.222 129.186 75.156 130.118C44.7753 131.059 27.3108 143.73 17.4056 156.034C12.43 162.214 9.33429 168.338 7.4848 172.913C6.65149 174.974 6.07304 176.715 5.6906 177.999H231.188L239.008 4.01248C182.512 4.74355 152.919 35.0769 151.1 66.0594ZM3.10003 179.999L1.1389 179.607L0.660217 181.999H235.012L243.192 -0.00100708H241.1C181.861 -0.00100708 149.074 31.6937 147.103 65.8839L147.1 65.9394L147.1 65.995C147.069 81.6522 143.523 96.1183 132.983 106.916C122.435 117.722 104.541 125.206 75.0321 126.12C43.4147 127.1 24.8822 140.369 14.2899 153.525C9.01683 160.075 5.73864 166.56 3.77644 171.413C2.79466 173.841 2.14004 175.867 1.72872 177.295C1.52299 178.01 1.37795 178.576 1.28315 178.969C1.23575 179.165 1.2009 179.319 1.17729 179.426C1.16549 179.48 1.15649 179.522 1.15015 179.552L1.1426 179.588L1.14027 179.6L1.13947 179.604C1.13947 179.604 1.1389 179.607 3.10003 179.999Z"
                      ></path>
                      <path
                        className="fill-white dark:fill-gray-700"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M76.999 120.02C81.414 120.02 84.992 123.601 84.992 128.019C84.992 132.436 81.414 136.017 76.999 136.017C72.585 136.017 69.006 132.436 69.006 128.019C69.006 123.601 72.585 120.02 76.999 120.02Z"
                      ></path>
                      <path
                        className="fill-hero-600"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M76.999 122.02C73.6909 122.02 71.006 124.704 71.006 128.019C71.006 131.333 73.6907 134.017 76.999 134.017C80.3081 134.017 82.992 131.333 82.992 128.019C82.992 124.704 80.308 122.02 76.999 122.02ZM67.006 128.019C67.006 122.498 71.4792 118.02 76.999 118.02C82.5201 118.02 86.992 122.498 86.992 128.019C86.992 133.539 82.5199 138.017 76.999 138.017C71.4793 138.017 67.006 133.539 67.006 128.019Z"
                      ></path>
                      <path
                        className="fill-white dark:fill-gray-700"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M149.994 59.013C154.409 59.013 157.987 62.594 157.987 67.01C157.987 71.428 154.409 75.009 149.994 75.009C145.58 75.009 142.001 71.428 142.001 67.01C142.001 62.594 145.58 59.013 149.994 59.013Z"
                      ></path>
                      <path
                        className="fill-hero-600"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M148.994 61.013C145.686 61.013 143.001 63.6976 143.001 67.01C143.001 70.3247 145.686 73.009 148.994 73.009C152.303 73.009 154.987 70.3249 154.987 67.01C154.987 63.6974 152.303 61.013 148.994 61.013ZM139.001 67.01C139.001 61.4904 143.474 57.013 148.994 57.013C154.515 57.013 158.987 61.4906 158.987 67.01C158.987 72.5311 154.515 77.009 148.994 77.009C143.474 77.009 139.001 72.5313 139.001 67.01Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-1 lg:col-span-full">
                  <div className="relative overflow-hidden shadow-3xl bg-white dark:bg-gray-800 min-h-[130px] pl-6 xl:pl-10 py-6">
                    <div className="font-bold text-primary dark:text-white text-2xl leading-none xl:text-[26px] tracking-tighter mb-2 uppercase flex items-start gap-x-3">
                      <span>1.3M</span>
                      <span className="inline-flex items-center gap-1">
                        <svg role="img" className="h-4 w-4 fill-danger">
                          <use xlink="https://valkivid.dan-fisher.dev/assets/img/yt1/sprite.svg#minus-circle"></use>
                        </svg>
                        <span className="font-bold text-primary dark:text-white text-xs leading-none tracking-normal">
                          1.7%
                        </span>
                      </span>
                    </div>
                    <hgroup>
                      <h5 className="text-primary dark:text-white text-lg lg:text-base dark:lg:text-white xl:text-lg tracking-tighter">
                        Views
                      </h5>
                      <p className="text-sm lg:text-xs xl:text-sm">last year</p>
                    </hgroup>
                    <svg
                      className="absolute -right-[80px] -bottom-6 w-[244px] h-[182px]"
                      width="244"
                      height="182"
                      viewBox="0 0 244 182"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-gray-150 dark:fill-gray-700"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.10003 179.999C3.10003 179.999 13.096 130.04 75.094 128.119C134.669 126.273 149.037 97.856 149.1 65.999C150.99 33.213 182.535 1.99899 241.1 1.99899L233.1 179.999H3.10003Z"
                      ></path>
                      <path
                        className="fill-gray-180 dark:fill-gray-900"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M151.1 66.0594C151.059 82.2392 147.386 97.8874 135.845 109.71C124.299 121.539 105.222 129.186 75.156 130.118C44.7753 131.059 27.3108 143.73 17.4056 156.034C12.43 162.214 9.33429 168.338 7.4848 172.913C6.65149 174.974 6.07304 176.715 5.6906 177.999H231.188L239.008 4.01248C182.512 4.74355 152.919 35.0769 151.1 66.0594ZM3.10003 179.999L1.1389 179.607L0.660217 181.999H235.012L243.192 -0.00100708H241.1C181.861 -0.00100708 149.074 31.6937 147.103 65.8839L147.1 65.9394L147.1 65.995C147.069 81.6522 143.523 96.1183 132.983 106.916C122.435 117.722 104.541 125.206 75.0321 126.12C43.4147 127.1 24.8822 140.369 14.2899 153.525C9.01683 160.075 5.73864 166.56 3.77644 171.413C2.79466 173.841 2.14004 175.867 1.72872 177.295C1.52299 178.01 1.37795 178.576 1.28315 178.969C1.23575 179.165 1.2009 179.319 1.17729 179.426C1.16549 179.48 1.15649 179.522 1.15015 179.552L1.1426 179.588L1.14027 179.6L1.13947 179.604C1.13947 179.604 1.1389 179.607 3.10003 179.999Z"
                      ></path>
                      <path
                        className="fill-white dark:fill-gray-700"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M76.999 120.02C81.414 120.02 84.992 123.601 84.992 128.019C84.992 132.436 81.414 136.017 76.999 136.017C72.585 136.017 69.006 132.436 69.006 128.019C69.006 123.601 72.585 120.02 76.999 120.02Z"
                      ></path>
                      <path
                        className="fill-gray-180 dark:fill-gray-900"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M76.999 122.02C73.6909 122.02 71.006 124.704 71.006 128.019C71.006 131.333 73.6907 134.017 76.999 134.017C80.3081 134.017 82.992 131.333 82.992 128.019C82.992 124.704 80.308 122.02 76.999 122.02ZM67.006 128.019C67.006 122.498 71.4792 118.02 76.999 118.02C82.5201 118.02 86.992 122.498 86.992 128.019C86.992 133.539 82.5199 138.017 76.999 138.017C71.4793 138.017 67.006 133.539 67.006 128.019Z"
                      ></path>
                      <path
                        className="fill-white dark:fill-gray-700"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M149.994 59.013C154.409 59.013 157.987 62.594 157.987 67.01C157.987 71.428 154.409 75.009 149.994 75.009C145.58 75.009 142.001 71.428 142.001 67.01C142.001 62.594 145.58 59.013 149.994 59.013Z"
                      ></path>
                      <path
                        className="fill-gray-180 dark:fill-gray-900"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M148.994 61.013C145.686 61.013 143.001 63.6976 143.001 67.01C143.001 70.3247 145.686 73.009 148.994 73.009C152.303 73.009 154.987 70.3249 154.987 67.01C154.987 63.6974 152.303 61.013 148.994 61.013ZM139.001 67.01C139.001 61.4904 143.474 57.013 148.994 57.013C154.515 57.013 158.987 61.4906 158.987 67.01C158.987 72.5311 154.515 77.009 148.994 77.009C143.474 77.009 139.001 72.5313 139.001 67.01Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="grid grid-cols-12 gap-x-5 gap-y-10 md:gap-x-6 lg:gap-x-[30px]">
        <div className="col-span-full">
          <hgroup className="flex flex-col-reverse gap-y-2 md:gap-y-3 mb-6 md:mb-28">
            <h2 className="text-2xl font-bold leading-none text-primary dark:text-white md:text-3xl lg:text-4xl lg:tracking-tighter xl:text-5xl">
              My Mission
            </h2>
            <p className="leading-tight tracking-tighter text-primary dark:text-white xl:text-2xl">
              Learn about
            </p>
          </hgroup>
        </div>
        <div className="col-span-full sm:col-span-6 md:col-span-4 gap-y-8">
          <div className="flex flex-col gap-y-6 md:gap-y-8">
            <div>
              <svg role="img" className="h-12 w-12 fill-primary dark:fill-white">
                <use xlink="https://valkivid.dan-fisher.dev/assets/img/yt1/sprite.svg#book">
                </use>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white md:text-2xl lg:mb-3 lg:text-3.5xl lg:leading-none lg:tracking-tight">
              Educating
              <br/>
              the Consumers
            </h3>
            <div className="lg:text-lg lg:leading-8 lg:tracking-tighter">
              Duis aute irure dolor in reprehenderit in uptate velit esse cillum dolore
              eu fugiat pariatur excepteur sint occaecat.
            </div>
          </div>
        </div>
        <div className="col-span-full sm:col-span-6 md:col-span-4 gap-y-8">
          <div className="flex flex-col gap-y-6 md:gap-y-8">
            <div>
              <svg role="img" className="h-12 w-12 fill-primary dark:fill-white">
                <use xlink="https://valkivid.dan-fisher.dev/assets/img/yt1/sprite.svg#piggy">
                </use>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white md:text-2xl lg:mb-3 lg:text-3.5xl lg:leading-none lg:tracking-tight">
              Make you
              <br/>
              Save Money
            </h3>
            <div className="lg:text-lg lg:leading-8 lg:tracking-tighter">
              Duis aute irure dolor in reprehenderit in uptate velit esse cillum dolore
              eu fugiat pariatur excepteur sint occaecat.
            </div>
          </div>
        </div>
        <div className="col-span-full sm:col-span-6 md:col-span-4 gap-y-8">
          <div className="flex flex-col gap-y-6 md:gap-y-8">
            <div>
              <svg role="img" className="h-12 w-12 fill-primary dark:fill-white">
                <use xlink="https://valkivid.dan-fisher.dev/assets/img/yt1/sprite.svg">
                </use>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white md:text-2xl lg:mb-3 lg:text-3.5xl lg:leading-none lg:tracking-tight">
              Honest Item
              <br/>
              Reviews
            </h3>
            <div className="lg:text-lg lg:leading-8 lg:tracking-tighter">
              Duis aute irure dolor in reprehenderit in uptate velit esse cillum dolore
              eu fugiat pariatur excepteur sint occaecat.
            </div>
          </div>
        </div>
      </section> */}
        </div>
      </div>
    </main>
  );
}
