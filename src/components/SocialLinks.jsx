import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsTiktok,
  BsTwitterX,
} from "react-icons/bs";
export default function SocialLinks({className, footer=false}){
	return(
	<div className={`${className} `}>
        <Link href={"https://www.instagram.com/abrelohd/"}  target="blank">
          <BsInstagram  className={!footer && "lg:scale-[2.3] xl:scale-[2.6] z-50  md:scale-[2]:sm:scale=[1.6] scale-[1.3]"} />
        </Link>
        <Link href={"https://x.com/iam_abrelo"} target="blank">
          <BsTwitterX className={!footer && "lg:scale-[2.3] xl:scale-[2.6] z-50  md:scale-[2]:sm:scale=[1.6] scale-[1.3]"} />
        </Link>
        <Link href={"https://facebook.com/AbreloHD"} target="blank">
          <BsFacebook className={!footer && "lg:scale-[2.3] xl:scale-[2.6] z-50  md:scale-[2]:sm:scale=[1.6] scale-[1.3]"} />
        </Link>
        <Link href={"https://t.me/AbreloHd"} target="blank">
          <BsTelegram className={!footer && "lg:scale-[2.3] xl:scale-[2.6] z-50  md:scale-[2]:sm:scale=[1.6] scale-[1.3]"} />
        </Link>
        <Link href={"https://tiktok.com/@abrelo_hd"} target="blank">
          <BsTiktok className={!footer && "lg:scale-[2.3] xl:scale-[2.6] z-50  md:scale-[2]:sm:scale=[1.6] scale-[1.3]"} />
        </Link>
      </div>
      )
}