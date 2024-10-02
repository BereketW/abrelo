import React from "react";

const ProductInfoForm = ({ name, setName, description, setDescription, price, setPrice, categorySlug, setCategorySlug, categories }) => {
  return (
    <div className="w-full">
      <label className="text-sm font-medium" htmlFor="name">Product Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border w-full p-2 mb-4 rounded"
        required
      />

      <label className="text-sm font-medium" htmlFor="category">Product Category</label>
      <select
        value={categorySlug}
        onChange={(e) => setCategorySlug(e.target.value)}
        className="border w-full p-2 mb-4 rounded"
        required
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>

      <label className="text-sm font-medium" htmlFor="price">Product Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border w-full p-2 mb-4 rounded"
        required
      />

      <label className="text-sm font-medium" htmlFor="description">Product Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border w-full p-2 mb-4 rounded"
        required
      />
    </div>
  );
};

export default ProductInfoForm;
