import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Pagination from "./Pagination";

export default function Orders() {
  return (
    <div className="col w-full  my-8">
      <div className="card">
        <div className="p-6 mb-3 rounded bg-white">
          <div className="flex items-center justify-between">
            <h4 className="card-title">Recent Orders</h4>
            {/* <Link
              href="#!"
              className="text-sm p-2  text-hero rounded bg-opacity-35 bg-[#ff3d5430]"
            >
              <button>+ Create Order</button>
            </Link> */}
          </div>
        </div>

        <div className="table-responsive w-full overflow-scroll table-centered">
          <table className="table text-sm w-full  mb-0">
            <thead className="bg-light text-[#5d7186] text-sm bg-opacity-50">
              <tr className="p-2">
                <th className="p-2">Order ID.</th>
                <th className="p-2">Date</th>
                <th className="p-2">Product</th>
                <th className="p-2">Customer Name</th>
                <th className="p-2">Email ID</th>
                <th className="p-2">Phone No.</th>
                <th className="p-2">Address</th>
                <th className="p-2">Payment Type</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>

            <tbody className="text-[#8686a7]">
              {[
                {
                  id: "#RB5625",
                  date: "29 April 2024",
                  product: "product-1(1)",
                  customer: "Anna M. Hines",
                  email: "anna.hines@mail.com",
                  phone: "(+1)-555-1564-261",
                  address: "Burr Ridge/Illinois",
                  payment: "Credit Card",
                  status: "Completed",
                  statusIcon: "success",
                },
                {
                  id: "#RB9652",
                  date: "25 April 2024",
                  product: "product-4",
                  customer: "Judith H. Fritsche",
                  email: "judith.fritsche@mail.com",
                  phone: "(+57)-305-5579-759",
                  address: "SULLIVAN/Kentucky",
                  payment: "Credit Card",
                  status: "Completed",
                  statusIcon: "success",
                },
                {
                  id: "#RB5984",
                  date: "25 April 2024",
                  product: "product-5",
                  customer: "Peter T. Smith",
                  email: "peter.smith@mail.com",
                  phone: "(+33)-655-5187-93",
                  address: "Yreka/California",
                  payment: "Pay Pal",
                  status: "Completed",
                  statusIcon: "success",
                },
                {
                  id: "#RB3625",
                  date: "21 April 2024",
                  product: "product-6",
                  customer: "Emmanuel J. Delcid",
                  email: "emmanuel.delicid@mail.com",
                  phone: "(+30)-693-5553-637",
                  address: "Atlanta/Georgia",
                  payment: "Pay Pal",
                  status: "Processing",
                  statusIcon: "primary",
                },
                {
                  id: "#RB8652",
                  date: "18 April 2024",
                  product: "product-1(2)",
                  customer: "William J. Cook",
                  email: "william.cook@mail.com",
                  phone: "(+91)-855-5446-150",
                  address: "Rosenberg/Texas",
                  payment: "Credit Card",
                  status: "Processing",
                  statusIcon: "primary",
                },
              ].map((order) => (
                <tr key={order.id} className="border-b border-inherit bg-white">
                  <td className="px-2 py-3.5">
                    <a href="order-detail.html">{order.id}</a>
                  </td>
                  <td className="px-2 py-3.5">{order.date}</td>
                  <td className="px-2 py-3.5">
                    <img
                      src={`https://techzaa.getappui.com/larkon/admin/assets/images/products/${order.product}.png`}
                      alt={order.product}
                      className="max-w-full w-[2.25rem] h-[2.25rem]"
                    />
                  </td>
                  <td className="px-2 py-3.5">
                    <a href="#!">{order.customer}</a>
                  </td>
                  <td className="px-2 py-3.5">{order.email}</td>
                  <td className="px-2 py-3.5">{order.phone}</td>
                  <td className="px-2 py-3.5">{order.address}</td>
                  <td className="px-2 py-3.5">{order.payment}</td>
                  <td className="px-2 py-3.5">
                    <i
                      className={`bx bxs-circle text-${order.statusIcon} me-1`}
                    ></i>
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination />
      </div>
    </div>
  );
}
