import { ChevronUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsBagX } from "react-icons/bs";

export default function StatusCard() {
  return (
    <div className="w-[576px] text-[#5d7186] flex flex-wrap items-start">
      <div className="border flex flex-col gap-4 w-72 p-4 rounded border-black">
        <div className="flex items-center justify-between">
            <BsBagX size={40} className="text-hero"/>
            <div className="flex flex-col ">
                <h1>Total Orders</h1>
                <p className="text-[#313b5e] font-bold">13,000</p>
            </div>
        </div>
        <div className="flex justify-between items-center ">
            <p className="flex gap-1 items-center"><ChevronUp />2.3% last week</p>
            <Link href={"orders"} className="text-sm font-bold">View Detail</Link>
        </div>
      </div>
      
    </div>
  );
}
