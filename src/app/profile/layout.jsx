"use client";
import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import UserSidebar from "@/components/UserSidebar";
// import Loader from "@app/client/components/global/Loader";
// import Greeting from "@app/client/components/user/Greeting";
// import UserSidebar from "@app/client/components/user/UserSidebar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";

// import { FaUser } from "react-icons/fa";

export default function Layout({ children }) {
  const pathname = usePathname();
  return (
    <div>
      <Header className="lg:px-12 xl:px-24 md:px-16 sm:px-8 px-4"/>
      <div className="lg:px-16 px-8 mt-10 mb-12">
        <div className="ml-20">
          {" "}
          <BsPerson
            className="text-hero p-2 bg-color-primary rounded-full"
            size={70}
          />
          <h1 className="font-bold text-xl mt-4 flex items-center gap-1">
            Hello <Greeting name={true} />
          </h1>
          <span className="text-sm font-medium text-color-body">
            <Greeting email={true} />
          </span>
        </div>
        <div className="lg:flex md:flex gap-10 mt-10">
          <UserSidebar />
          <div className="w-full h-full  lg:px-16">{children}</div>
        </div>
      </div>
    </div>
  );
}
