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
	<div className={`${className}`}>
        <BsInstagram size={28} />
        <BsTwitterX size={28} />
        <BsFacebook size={28} />
        <BsTelegram size={28} />
        <BsTiktok size={28} />
      </div>
      )
}