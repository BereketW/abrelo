import ApexChart from "@/components/admin/ApexChart";
import Orders from "@/components/admin/Orders";
import ProductsList from "@/components/admin/ProductsList";
import StatusCard from "@/components/admin/StatusCard";
import React from "react";

export default function page() {
  return (
    <div className="p-10  full w-full">
      <div className=" lg:flex lg:flex-row md:flex-row items-start flex md:flex flex-col gap-4">
        <div className="lg:w-1/2 w-full text-[#5d7186] max-sm:justify-center md:w-1/2 flex gap-2 flex-wrap items-start">
          <StatusCard />
          <StatusCard />
          <StatusCard />
          <StatusCard />
        </div>
        <ApexChart />
      </div>
      <Orders />
      <ProductsList />
    </div>
  );
}
