import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsTiktok,
  BsTwitterX,
} from "react-icons/bs";
export default function SocialLinks({className}){
	return(
	<div className={`${className} `}>
        <BsInstagram  className="lg:scale-[2.3] xl:scale-[2.6] z-50  md:scale-[2]:sm:scale=[1.6] scale-[1.3]" />
        <BsTwitterX className="lg:scale-[2.3] xl:scale-[2.6] md:scale-[2]:sm:scale=[1.6] scale-[1.3]" />
        <BsFacebook className="lg:scale-[2.3] xl:scale-[2.6] md:scale-[2]:sm:scale=[1.6] scale-[1.3]" />
        <BsTelegram className="lg:scale-[2.3] xl:scale-[2.6] md:scale-[2]:sm:scale=[1.6] scale-[1.3]" />
        <BsTiktok className="lg:scale-[2.3] xl:scale-[2.6] md:scale-[2]:sm:scale=[1.6] scale-[1.3]" />
      </div>
      )
}