import Link from "next/link";
import React from "react";

export default function Channel() {
  return (
    
      <section className="relative ">
        <div className="relative isolate overflow-hidden pb-8 pt-16 after:absolute after:inset-x-0 after:top-0 after:bottom-16 after:-z-20 after:bg-gray-100 dark:after:bg-gray-800 sm:pb-10 sm:pt-20 after:sm:bottom-24 md:pb-12 md:pt-32 after:md:bottom-28 lg:pb-16 lg:pt-36 after:lg:bottom-44 xl:pt-48 xl:pb-20 after:xl:bottom-60">
          <div className="px-4 md:px-16 sm:px-8 lg:px-24 ">
            <div className="mb-12 flex flex-col flex-wrap gap-y-6 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 xl:gap-y-12 items-baseline justify-between sm:flex-row">
              <div className="flex flex-col-reverse gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6">
                <h2 className="dark:text-white leadin-none text-3xl font-bold tracking-tight text-primary sm:text-6xl md:text-6xl lg:text-6xl xl:text-8xl xl:leading-none">
                  The Channel
                </h2>
                <div className="text-sm uppercase  md:text-base text-primary-p">
                  Abrelo HD
                </div>
              </div>
            </div>
            <div className="mb-8  grid gap-5 sm:mb-16 md:mb-20 md:grid-cols-2 md:gap-[30px] xl:mb-28 xl:-mt-3">
              <div className="dark:text-white text-xl tracking-tighter text-primary md:text-2xl lg:text-3xl lg:leading-snug xl:text-3.5xl xl:leading-snug">
                Reacting to the funniest and trendiest videos out there!
              </div>
              <div className="tracking-tighter md:text-lg text-primary-p lg:pl-[70px] xl:leading-8">
                I’ll show you all the funniest trends and viral moments! From
                the latest laugh-out-loud videos to the hottest memes, get ready
                for a fun-filled ride. Stay tuned to see it all and keep your
                day hilarious!
              </div>
            </div>
            <div className="block  aspect-video">
              <Link
                href="https://youtu.be/ZKXE5PlfRko"
                className=" group relative block h-full overflow-hidden bg-gray-900"
              >
                <img
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-75"
                  src="/assets/channel-banner.jpg"
                  alt=""
                />
                <span className="absolute top-1/2 left-1/2 flex aspect-square w-14 -translate-x-2/4 -translate-y-2/4 items-center justify-center rounded-full bg-accent md:w-20">
                  <svg
                    className="mr-[-3px] h-14 w-14 rounded-full"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <rect width="24" height="24" fill="white"></rect>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.5963 10.3318C16.8872 11.0694 16.8872 12.9307 15.5963 13.6683L11.154 16.2068C9.9715 16.8825 8.5002 16.0287 8.5002 14.6667L8.5002 9.33339C8.5002 7.97146 9.9715 7.11762 11.154 7.79333L15.5963 10.3318Z"
                        fill="#f70202"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
                <div class="absolute left-8 top-10 hidden -rotate-[4deg] -skew-x-6 sm:block md:left-10 md:top-12 lg:left-16 lg:top-20">
                  <div class="w-fit bg-primary px-2 text-3xl font-bold uppercase leading-tight tracking-tighter text-white lg:px-3 lg:py-1 lg:text-3.5xl">
                    Welcome to my
                  </div>
                  <div class="w-fit bg-hero px-3 py-[1px] text-5xl font-bold uppercase leading-none tracking-tighter text-white lg:px-4 lg:text-6.5xl">
                    Reaction Channel!
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <svg
            className="js-vv-svg-diamond-bg pointer-events-none absolute left-1/2 -top-[315px] -z-10 fill-[black] dark:opacity-30"
            width="1060"
            height="1151"
            viewBox="0 0 1060 1151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="opacity-10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M695.514 361.776L630.777 426.513C624.819 432.471 615.157 432.471 609.199 426.513L544.462 361.776C538.503 355.817 538.503 346.156 544.462 340.197L609.199 275.461C615.157 269.501 624.819 269.501 630.777 275.461L695.514 340.197C701.473 346.156 701.473 355.817 695.514 361.776ZM695.514 181.776L630.777 246.513C624.819 252.471 615.157 252.471 609.199 246.513L544.462 181.776C538.503 175.818 538.503 166.156 544.462 160.197L609.199 95.461C615.157 89.502 624.819 89.502 630.777 95.461L695.514 160.197C701.473 166.156 701.473 175.818 695.514 181.776ZM605.514 91.776L540.777 156.512C534.819 162.471 525.157 162.471 519.199 156.512L454.462 91.776C448.503 85.817 448.503 76.156 454.462 70.197L519.199 5.46101C525.157 -0.49799 534.819 -0.49799 540.777 5.46101L605.514 70.197C611.473 76.156 611.473 85.817 605.514 91.776ZM515.514 160.197C521.473 166.156 521.473 175.818 515.514 181.776L450.777 246.513C444.819 252.471 435.157 252.471 429.199 246.513L364.462 181.776C358.503 175.818 358.503 166.156 364.462 160.197L429.199 95.461C435.157 89.502 444.819 89.502 450.777 95.461L515.514 160.197ZM425.514 91.776L360.777 156.512C354.819 162.471 345.157 162.471 339.199 156.512L274.462 91.776C268.503 85.817 268.503 76.156 274.462 70.197L339.199 5.46101C345.157 -0.49799 354.819 -0.49799 360.777 5.46101L425.514 70.197C431.473 76.156 431.473 85.817 425.514 91.776ZM274.462 250.197L339.199 185.461C345.157 179.502 354.819 179.502 360.777 185.461L425.514 250.197C431.473 256.156 431.473 265.817 425.514 271.776L360.777 336.513C354.819 342.471 345.157 342.471 339.199 336.513L274.462 271.776C268.503 265.817 268.503 256.156 274.462 250.197ZM274.462 430.197L339.199 365.461C345.157 359.502 354.819 359.502 360.777 365.461L425.514 430.197C431.473 436.156 431.473 445.817 425.514 451.776L360.777 516.512C354.819 522.472 345.157 522.472 339.199 516.512L274.462 451.776C268.503 445.817 268.503 436.156 274.462 430.197ZM364.462 520.197L429.199 455.461C435.157 449.502 444.819 449.502 450.777 455.461L515.514 520.197C521.473 526.156 521.473 535.817 515.514 541.776L450.777 606.513C444.819 612.471 435.157 612.471 429.199 606.513L364.462 541.776C358.503 535.817 358.503 526.156 364.462 520.197ZM515.514 361.776L450.777 426.513C444.819 432.471 435.157 432.471 429.199 426.513L364.462 361.776C358.503 355.817 358.503 346.156 364.462 340.197L429.199 275.461C435.157 269.501 444.819 269.501 450.777 275.461L515.514 340.197C521.473 346.156 521.473 355.817 515.514 361.776ZM454.462 451.776C448.503 445.817 448.503 436.156 454.462 430.197L519.199 365.461C525.157 359.502 534.819 359.502 540.777 365.461L605.514 430.197C611.473 436.156 611.473 445.817 605.514 451.776L540.777 516.512C534.819 522.472 525.157 522.472 519.199 516.512L454.462 451.776ZM544.462 520.197L609.199 455.461C615.157 449.502 624.819 449.502 630.777 455.461L695.514 520.197C701.473 526.156 701.473 535.817 695.514 541.776L630.777 606.513C624.819 612.471 615.157 612.471 609.199 606.513L544.462 541.776C538.503 535.817 538.503 526.156 544.462 520.197Z"
            ></path>
            <path
              className="opacity-10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M184.462 520.197L249.199 455.461C255.157 449.502 264.819 449.502 270.777 455.461L335.514 520.197C341.473 526.156 341.473 535.817 335.514 541.776L270.777 606.513C264.819 612.471 255.157 612.471 249.199 606.513L184.462 541.776C178.503 535.817 178.503 526.156 184.462 520.197Z"
            ></path>
            <path
              className="opacity-10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1055.51 361.776L990.777 426.513C984.819 432.471 975.157 432.471 969.199 426.513L904.462 361.776C898.503 355.817 898.503 346.156 904.462 340.197L969.199 275.461C975.157 269.501 984.819 269.501 990.777 275.461L1055.51 340.197C1061.47 346.156 1061.47 355.817 1055.51 361.776ZM1055.51 181.776L990.777 246.513C984.819 252.471 975.157 252.471 969.199 246.513L904.462 181.776C898.503 175.818 898.503 166.156 904.462 160.197L969.199 95.461C975.157 89.502 984.819 89.502 990.777 95.461L1055.51 160.197C1061.47 166.156 1061.47 175.818 1055.51 181.776ZM965.514 91.776L900.777 156.512C894.819 162.471 885.157 162.471 879.199 156.512L814.462 91.776C808.503 85.817 808.503 76.156 814.462 70.197L879.199 5.46101C885.157 -0.49799 894.819 -0.49799 900.777 5.46101L965.514 70.197C971.473 76.156 971.473 85.817 965.514 91.776ZM875.514 160.197C881.473 166.156 881.473 175.818 875.514 181.776L810.777 246.513C804.819 252.471 795.157 252.471 789.199 246.513L724.462 181.776C718.503 175.818 718.503 166.156 724.462 160.197L789.199 95.461C795.157 89.502 804.819 89.502 810.777 95.461L875.514 160.197ZM785.514 91.776L720.777 156.512C714.819 162.471 705.157 162.471 699.199 156.512L634.462 91.776C628.503 85.817 628.503 76.156 634.462 70.197L699.199 5.46101C705.157 -0.49799 714.819 -0.49799 720.777 5.46101L785.514 70.197C791.473 76.156 791.473 85.817 785.514 91.776ZM634.462 250.197L699.199 185.461C705.157 179.502 714.819 179.502 720.777 185.461L785.514 250.197C791.473 256.156 791.473 265.817 785.514 271.776L720.777 336.513C714.819 342.471 705.157 342.471 699.199 336.513L634.462 271.776C628.503 265.817 628.503 256.156 634.462 250.197ZM724.462 340.197L789.199 275.461C795.157 269.501 804.819 269.501 810.777 275.461L875.514 340.197C881.473 346.156 881.473 355.817 875.514 361.776L810.777 426.513C804.819 432.471 795.157 432.471 789.199 426.513L724.462 361.776C718.503 355.817 718.503 346.156 724.462 340.197ZM724.462 520.197L789.199 455.461C795.157 449.502 804.819 449.502 810.777 455.461L875.514 520.197C881.473 526.156 881.473 535.817 875.514 541.776L810.777 606.513C804.819 612.471 795.157 612.471 789.199 606.513L724.462 541.776C718.503 535.817 718.503 526.156 724.462 520.197ZM814.462 271.776C808.503 265.817 808.503 256.156 814.462 250.197L879.199 185.461C885.157 179.502 894.819 179.502 900.777 185.461L965.514 250.197C971.473 256.156 971.473 265.817 965.514 271.776L900.777 336.513C894.819 342.471 885.157 342.471 879.199 336.513L814.462 271.776ZM814.462 451.776C808.503 445.817 808.503 436.156 814.462 430.197L879.199 365.461C885.157 359.502 894.819 359.502 900.777 365.461L965.514 430.197C971.473 436.156 971.473 445.817 965.514 451.776L900.777 516.512C894.819 522.472 885.157 522.472 879.199 516.512L814.462 451.776ZM904.462 520.197L969.199 455.461C975.157 449.502 984.819 449.502 990.777 455.461L1055.51 520.197C1061.47 526.156 1061.47 535.817 1055.51 541.776L990.777 606.513C984.819 612.471 975.157 612.471 969.199 606.513L904.462 541.776C898.503 535.817 898.503 526.156 904.462 520.197Z"
            ></path>
            <path
              className="opacity-10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M695.514 901.776L630.777 966.512C624.819 972.472 615.157 972.472 609.199 966.512L544.462 901.776C538.503 895.817 538.503 886.156 544.462 880.197L609.199 815.46C615.157 809.502 624.819 809.502 630.777 815.46L695.514 880.197C701.473 886.156 701.473 895.817 695.514 901.776ZM695.514 721.776L630.777 786.512C624.819 792.471 615.157 792.471 609.199 786.512L544.462 721.776C538.503 715.817 538.503 706.156 544.462 700.197L609.199 635.46C615.157 629.502 624.819 629.502 630.777 635.46L695.514 700.197C701.473 706.156 701.473 715.817 695.514 721.776ZM605.514 631.776L540.777 696.513C534.819 702.471 525.157 702.471 519.199 696.513L454.462 631.776C448.503 625.818 448.503 616.156 454.462 610.197L519.199 545.461C525.157 539.501 534.819 539.501 540.777 545.461L605.514 610.197C611.473 616.156 611.473 625.818 605.514 631.776ZM515.514 700.197C521.473 706.156 521.473 715.817 515.514 721.776L450.777 786.512C444.819 792.471 435.157 792.471 429.199 786.512L364.462 721.776C358.503 715.817 358.503 706.156 364.462 700.197L429.199 635.46C435.157 629.502 444.819 629.502 450.777 635.46L515.514 700.197ZM425.514 631.776L360.777 696.513C354.819 702.471 345.157 702.471 339.199 696.513L274.462 631.776C268.503 625.818 268.503 616.156 274.462 610.197L339.199 545.461C345.157 539.501 354.819 539.501 360.777 545.461L425.514 610.197C431.473 616.156 431.473 625.818 425.514 631.776ZM274.462 790.197L339.199 725.461C345.157 719.502 354.819 719.502 360.777 725.461L425.514 790.197C431.473 796.156 431.473 805.817 425.514 811.776L360.777 876.513C354.819 882.471 345.157 882.471 339.199 876.513L274.462 811.776C268.503 805.817 268.503 796.156 274.462 790.197ZM274.462 970.197L339.199 905.461C345.157 899.502 354.819 899.502 360.777 905.461L425.514 970.197C431.473 976.156 431.473 985.817 425.514 991.776L360.777 1056.51C354.819 1062.47 345.157 1062.47 339.199 1056.51L274.462 991.776C268.503 985.817 268.503 976.156 274.462 970.197ZM364.462 1060.2L429.199 995.461C435.157 989.502 444.819 989.502 450.777 995.461L515.514 1060.2C521.473 1066.16 521.473 1075.82 515.514 1081.78L450.777 1146.51C444.819 1152.47 435.157 1152.47 429.199 1146.51L364.462 1081.78C358.503 1075.82 358.503 1066.16 364.462 1060.2ZM515.514 901.776L450.777 966.512C444.819 972.472 435.157 972.472 429.199 966.512L364.462 901.776C358.503 895.817 358.503 886.156 364.462 880.197L429.199 815.46C435.157 809.502 444.819 809.502 450.777 815.46L515.514 880.197C521.473 886.156 521.473 895.817 515.514 901.776ZM454.462 991.776C448.503 985.817 448.503 976.156 454.462 970.197L519.199 905.461C525.157 899.502 534.819 899.502 540.777 905.461L605.514 970.197C611.473 976.156 611.473 985.817 605.514 991.776L540.777 1056.51C534.819 1062.47 525.157 1062.47 519.199 1056.51L454.462 991.776ZM544.462 1060.2L609.199 995.461C615.157 989.502 624.819 989.502 630.777 995.461L695.514 1060.2C701.473 1066.16 701.473 1075.82 695.514 1081.78L630.777 1146.51C624.819 1152.47 615.157 1152.47 609.199 1146.51L544.462 1081.78C538.503 1075.82 538.503 1066.16 544.462 1060.2Z"
            ></path>
            <path
              className="opacity-10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1055.51 901.776L990.777 966.512C984.819 972.472 975.157 972.472 969.199 966.512L904.462 901.776C898.503 895.817 898.503 886.156 904.462 880.197L969.199 815.46C975.157 809.502 984.819 809.502 990.777 815.46L1055.51 880.197C1061.47 886.156 1061.47 895.817 1055.51 901.776ZM1055.51 721.776L990.777 786.512C984.819 792.471 975.157 792.471 969.199 786.512L904.462 721.776C898.503 715.817 898.503 706.156 904.462 700.197L969.199 635.46C975.157 629.502 984.819 629.502 990.777 635.46L1055.51 700.197C1061.47 706.156 1061.47 715.817 1055.51 721.776ZM965.514 631.776L900.777 696.513C894.819 702.471 885.157 702.471 879.199 696.513L814.462 631.776C808.503 625.818 808.503 616.156 814.462 610.197L879.199 545.461C885.157 539.501 894.819 539.501 900.777 545.461L965.514 610.197C971.473 616.156 971.473 625.818 965.514 631.776ZM875.514 880.197C881.473 886.156 881.473 895.817 875.514 901.776L810.777 966.512C804.819 972.472 795.157 972.472 789.199 966.512L724.462 901.776C718.503 895.817 718.503 886.156 724.462 880.197L789.199 815.46C795.157 809.502 804.819 809.502 810.777 815.46L875.514 880.197ZM785.514 811.776L720.777 876.513C714.819 882.471 705.157 882.471 699.199 876.513L634.462 811.776C628.503 805.817 628.503 796.156 634.462 790.197L699.199 725.461C705.157 719.502 714.819 719.502 720.777 725.461L785.514 790.197C791.473 796.156 791.473 805.817 785.514 811.776ZM785.514 631.776L720.777 696.513C714.819 702.471 705.157 702.471 699.199 696.513L634.462 631.776C628.503 625.818 628.503 616.156 634.462 610.197L699.199 545.461C705.157 539.501 714.819 539.501 720.777 545.461L785.514 610.197C791.473 616.156 791.473 625.818 785.514 631.776ZM634.462 970.197L699.199 905.461C705.157 899.502 714.819 899.502 720.777 905.461L785.514 970.197C791.473 976.156 791.473 985.817 785.514 991.776L720.777 1056.51C714.819 1062.47 705.157 1062.47 699.199 1056.51L634.462 991.776C628.503 985.817 628.503 976.156 634.462 970.197ZM724.462 1060.2L789.199 995.461C795.157 989.502 804.819 989.502 810.777 995.461L875.514 1060.2C881.473 1066.16 881.473 1075.82 875.514 1081.78L810.777 1146.51C804.819 1152.47 795.157 1152.47 789.199 1146.51L724.462 1081.78C718.503 1075.82 718.503 1066.16 724.462 1060.2ZM814.462 811.776C808.503 805.817 808.503 796.156 814.462 790.197L879.199 725.461C885.157 719.502 894.819 719.502 900.777 725.461L965.514 790.197C971.473 796.156 971.473 805.817 965.514 811.776L900.777 876.513C894.819 882.471 885.157 882.471 879.199 876.513L814.462 811.776ZM814.462 991.776C808.503 985.817 808.503 976.156 814.462 970.197L879.199 905.461C885.157 899.502 894.819 899.502 900.777 905.461L965.514 970.197C971.473 976.156 971.473 985.817 965.514 991.776L900.777 1056.51C894.819 1062.47 885.157 1062.47 879.199 1056.51L814.462 991.776ZM904.462 1060.2L969.199 995.461C975.157 989.502 984.819 989.502 990.777 995.461L1055.51 1060.2C1061.47 1066.16 1061.47 1075.82 1055.51 1081.78L990.777 1146.51C984.819 1152.47 975.157 1152.47 969.199 1146.51L904.462 1081.78C898.503 1075.82 898.503 1066.16 904.462 1060.2Z"
            ></path>
            <path
              className="opacity-10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.46199 340.197L69.199 275.461C75.157 269.501 84.819 269.501 90.777 275.461L155.514 340.197C161.473 346.156 161.473 355.817 155.514 361.776L90.777 426.513C84.819 432.471 75.157 432.471 69.199 426.513L4.46199 361.776C-1.49701 355.817 -1.49701 346.156 4.46199 340.197Z"
            ></path>
            <path
              className="opacity-10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M94.462 250.197L159.199 185.461C165.157 179.502 174.819 179.502 180.777 185.461L245.514 250.197C251.473 256.156 251.473 265.817 245.514 271.776L180.777 336.513C174.819 342.471 165.157 342.471 159.199 336.513L94.462 271.776C88.503 265.817 88.503 256.156 94.462 250.197Z"
            ></path>
            <path
              className="opacity-10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M454.462 69.197L519.199 4.46002C525.157 -1.49798 534.819 -1.49798 540.777 4.46002L605.514 69.197C611.473 75.155 611.473 84.817 605.514 90.776L540.777 155.512C534.819 161.471 525.157 161.471 519.199 155.512L454.462 90.776C448.503 84.817 448.503 75.155 454.462 69.197Z"
            ></path>
            <path
              className="opacity-10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M94.462 250.197L159.199 185.461C165.157 179.502 174.819 179.502 180.777 185.461L245.514 250.197C251.473 256.156 251.473 265.817 245.514 271.776L180.777 336.513C174.819 342.471 165.157 342.471 159.199 336.513L94.462 271.776C88.503 265.817 88.503 256.156 94.462 250.197Z"
            ></path>
            <path
              className="opacity-20"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M364.462 520.197L429.199 455.461C435.157 449.502 444.819 449.502 450.777 455.461L515.514 520.197C521.473 526.156 521.473 535.817 515.514 541.776L450.777 606.513C444.819 612.471 435.157 612.471 429.199 606.513L364.462 541.776C358.503 535.817 358.503 526.156 364.462 520.197Z"
            ></path>
            <path
              className="opacity-10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M634.462 250.197L699.199 185.461C705.157 179.502 714.819 179.502 720.777 185.461L785.514 250.197C791.473 256.156 791.473 265.817 785.514 271.776L720.777 336.513C714.819 342.471 705.157 342.471 699.199 336.513L634.462 271.776C628.503 265.817 628.503 256.156 634.462 250.197Z"
            ></path>
            <path
              className="opacity-20"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M634.462 790.197L699.199 725.461C705.157 719.502 714.819 719.502 720.777 725.461L785.514 790.197C791.473 796.156 791.473 805.817 785.514 811.776L720.777 876.513C714.819 882.471 705.157 882.471 699.199 876.513L634.462 811.776C628.503 805.817 628.503 796.156 634.462 790.197Z"
            ></path>
            <path
              className="opacity-10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M544.462 1060.2L609.199 995.461C615.157 989.502 624.819 989.502 630.777 995.461L695.514 1060.2C701.473 1066.16 701.473 1075.82 695.514 1081.78L630.777 1146.51C624.819 1152.47 615.157 1152.47 609.199 1146.51L544.462 1081.78C538.503 1075.82 538.503 1066.16 544.462 1060.2Z"
            ></path>
            <path
              className="opacity-10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.46199 70.197L70.199 5.46101C76.157 -0.49799 85.819 -0.49799 91.777 5.46101L156.514 70.197C162.473 76.156 162.473 85.817 156.514 91.776L91.777 156.512C85.819 162.471 76.157 162.471 70.199 156.512L5.46199 91.776C-0.497013 85.817 -0.497013 76.156 5.46199 70.197Z"
            ></path>
            <path
              className="opacity-10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M184.462 340.197L249.199 275.461C255.157 269.501 264.819 269.501 270.777 275.461L335.514 340.197C341.473 346.156 341.473 355.817 335.514 361.776L270.777 426.513C264.819 432.471 255.157 432.471 249.199 426.513L184.462 361.776C178.503 355.817 178.503 346.156 184.462 340.197Z"
            ></path>
          </svg>
        </div>
        <div className="flex items-center justify-center absolute top-0 left-1/2 z-10 aspect-square w-[122px] translate-x-[380px] -translate-y-[25px] rotate-45 rounded-2xl bg-hero">
          <svg
            className="ml-[6px] h-9 w-8 fill-white -rotate-45"
            fill="#000000"
            viewBox="-7 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>play</title>{" "}
              <path d="M0 6.688v18.906c0 0.344 0.156 0.625 0.469 0.813 0.125 0.094 0.344 0.125 0.5 0.125s0.281-0.031 0.438-0.125l16.375-9.438c0.313-0.219 0.5-0.5 0.5-0.844 0-0.313-0.188-0.594-0.5-0.813l-16.375-9.438c-0.563-0.406-1.406 0.094-1.406 0.813z"></path>{" "}
            </g>
          </svg>
        </div>
      </section>
  );
}
