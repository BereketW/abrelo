import React from "react";
import { RiDiscountPercentLine } from "react-icons/ri";

const DiscountStockForm = ({ discount, setDiscount, stockStatus, setStockStatus }) => {
  return (
    <div className="w-full">
      <label className="text-sm font-medium" htmlFor="discount">Discount</label>
      <div className="relative">
        <RiDiscountPercentLine className="absolute left-2 top-2" />
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          className="border w-full p-2 pl-8 mb-4 rounded"
        />
      </div>

      <label className="text-sm font-medium" htmlFor="stockStatus">Stock Status</label>
      <select
        value={stockStatus}
        onChange={(e) => setStockStatus(e.target.value)}
        className="border w-full p-2 mb-4 rounded"
      >
        <option value="">Select Stock Status</option>
        <option value="in-stock">In Stock</option>
        <option value="out-of-stock">Out of Stock</option>
      </select>
    </div>
  );
};

export default DiscountStockForm;
