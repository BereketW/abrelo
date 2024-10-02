"use client";
import { getManyCategories } from "@/data/categories";
import { createProduct } from "@/data/products";
import { CloudUpload, Delete, DollarSign } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddProductDetail() {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [images, setImages] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [weight, setWeight] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [stockStatus, setStockStatus] = useState();
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  // Multi-select state for sizes and colors
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const sizes = ["S", "M", "XL", "XXL", "2XL", "3XL"];
  const colors = [
    "#040505",
    "#ff6c2f",
    "#22c55e",
    "#ef5f5f",
    "#4ecac2",
    "#323a46",
  ];

  useEffect(() => {
    async function fetchCategories() {

        const fetchedCategories = await getManyCategories();
        console.log("Fetched Categories:", fetchedCategories); // Check if you're receiving the correct data
        setCategories([...fetchedCategories]);
    }

    fetchCategories();
  }, []);

  const handleImageUpload = (e) => {
    setError("");
    const files = Array.from(e.target.files);

    if (files.length + images.length > 4) {
      setError("You can only upload a maximum of 4 images.");
      return;
    }

    files.forEach((file) => {
      if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
        setError("Only JPG, PNG, and GIF formats are allowed.");
        return;
      }
    });

    setImages((prevImages) => [...prevImages, ...files]);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };
  

  const toggleItem = (item, setSelected, selectedList) => {
    if (selectedList.includes(item)) {
      setSelected(selectedList.filter((i) => i !== item));
    } else {
      setSelected([...selectedList, item]);
    }
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (images.length < 4) {
      setError("Please upload at least 4 images.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("categorySlug", categorySlug);
    formData.append("stockStatus", stockStatus);
    formData.append("quantity", quantity);
    formData.append("sizes", selectedSizes.join(", "));
    formData.append("colors", selectedColors.join(", "));
    formData.append("brandName", brandName);

    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const res = await createProduct(formData);
      if (res.error) {
        setError(res.message);
      }
    } catch (error) {
      setError("An error occurred while creating the product.");
    } finally {
      setIsLoading(false);
    }
  }

 

  
  const isSubmitDisabled = images.length < 4;
  const finalPrice = price - (price * discount) / 100;

  return (
    <section className="flex items-start p-10 w-full gap-10">
      <div className="w-1/2 bg-white sticky top-20 p-10 rounded">
        {images.length > 0 && (
          <div className="h-1/2">
            <img
              src={imagePreviews[0]}
              alt=""
              className="w-full h-[300px] rounded object-cover"
            />
          </div>
        )}
        {images.length < 4 && (
          <p className="my-4 text-hero text-sm text-color-body">
            You need to add at least 4 images.
          </p>
        )}

        <div className="flex flex-wrap gap-4 mt-6">
          {imagePreviews.map((preview, index) => (
            <div key={index} className="relative">
              <img src={preview} alt="Preview" className="w-10 rounded h-10" />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="cursor-pointer  absolute -top-4 right-6 p-2 "
              >
                <Delete color="red" size={15} />
              </button>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-xl mt-4 text-[#313b5e]">
            {name}
            <span>{categories}</span>
          </h1>
          <h1 className="text-lg flex flex-col mt-4  text-[##313b5e]">
            Price:{" "}
            <span className="flex font-medium gap-4">
              <span className="line-through ">${price}</span>
              <span>${finalPrice}</span>
            </span>
          </h1>
          <h1 className="text-lg flex flex-col mt-4  text-[##313b5e]">
            Sizes:{" "}
            <span className="flex font-medium gap-4">
              {selectedSizes.map((size) => (
                <div
                  key={size}
                  className={`w-12 h-12 flex items-center bg-[#eef2f7] justify-center text-#323a46 p-4 rounded `}
                >
                  {size}
                </div>
              ))}
            </span>
          </h1>
          <h1 className="text-lg flex flex-col mt-4  text-[##313b5e]">
            Colors:{" "}
            <span className="flex flex-wrap font-medium gap-4">
              {selectedColors.map((color) => (
                <div
                  key={color}
                  className={`w-12 h-12 flex items-center bg-[#eef2f7] justify-center text-#323a46 p-4 rounded `}
                >
                  <div
                    style={{ backgroundColor: color }}
                    className={`  p-2 rounded-full`}
                  ></div>
                </div>
              ))}
            </span>
          </h1>
          <p className="text-sm mt-3 ">{description}</p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex-1 bg-white relative border-dashed border-2 rounded flex flex-col w-full items-center justify-center p-24 border-[#d8dfe7">
          <CloudUpload size={50} className="text-hero " />
          <h1 className="text-xl mt-3 font-semibold">
            Drop Your Images Here or,{" "}
            <span className="text-hero">Click to browse</span>
          </h1>
          <span className="text-sm mt-2 text-">
            1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
          </span>
          <input
            required
            onChange={handleImageUpload}
            name="images"
            type="file"
            multiple={true}
            className="w-full opacity-0 absolute inset-0 text-sm py-3 mb-9 px-7 h-full border-color-light text-color-body rounded-md border"
          />
        </div>

        <div className="mt-4 rounded shadow-md">
          <div className="bg-white border-b mt-4 p-4">Product Detail</div>
          <form onSubmit={onSubmit} className="w-full text-[#5d7186]">
            <div className="bg-white p-4">
              <div className="flex gap-10 items-center justify-between">
                <div className="flex flex-col w-1/2">
                  <label>Product Name</label>
                  <input
                    required
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-2 border"
                    placeholder="Product Name"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label>Product Categories</label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Categories" />
                    </SelectTrigger>
                    <SelectContent>
                     
                          <SelectItem  value="Electronics">
                           Electronics
                          </SelectItem>
                          <SelectItem  value="Clothes">
                           Clothes
                          </SelectItem>
                     
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex mt-4 gap-10 items-center justify-between">
                <div className="flex flex-col w-1/3">
                  <label>Brand Name</label>
                  <input
                    type="text"
                    onChange={(e) => setBrandName(e.target.value)}
                    className="px-4 py-2 border"
                    placeholder="Brand Name"
                  />
                </div>
                <div className="flex flex-col w-1/3">
                  <label>Weight</label>
                  <input
                    type="text"
                    className="px-4 py-2 border rounded"
                    placeholder="In gm & kg"
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-1/3">
                  <label>Stock Status</label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Stock Status" />
                    </SelectTrigger>
                    <SelectContent>
                     
                          <SelectItem  value="In Stock">
                           In Stock
                          </SelectItem>
                          <SelectItem  value="Out of Stock">
                           Out of Stock
                          </SelectItem>
                     
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-4 flex justify-between w-full">
                <div className="w-1/2">
                  <p>Size:</p>
                  <div className="flex gap-2 w-4/5 flex-wrap">
                    {sizes.map((size) => (
                      <label
                        key={size}
                        className={`${
                          selectedSizes.includes(size)
                            ? "bg-green-400"
                            : "bg-[#eef2f7]"
                        } w-12 h-12 flex items-center justify-center text-#323a46 p-4 rounded`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(size)}
                          onChange={() =>
                            toggleItem(size, setSelectedSizes, selectedSizes)
                          }
                          className="hidden"
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p>Color:</p>
                  <div className="flex gap-2 w-4/5 flex-wrap">
                    {colors.map((color) => (
                      <label
                        key={color}
                        className={`${
                          selectedColors.includes(color)
                            ? "border-2 border-green-400"
                            : "bg-[#eef2f7]"
                        } w-12 h-12 flex items-center justify-center text-#323a46 p-4 rounded`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color)}
                          onChange={() =>
                            toggleItem(color, setSelectedColors, selectedColors)
                          }
                          className="hidden"
                        />
                        <div
                          className="w-2 h-2 p-2"
                          style={{
                            backgroundColor: color,
                            borderRadius: "50%",
                          }}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="">Description</label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  className="border outline-none"
                ></textarea>
              </div>
            </div>

            <div className="p-4 mt-8 bg-white">
              <div className="py-4 border-b mb-4">Price Details</div>
              <div className="flex gap-20 items-center">
                <div className="flex w-1/4 flex-col">
                  <label>Price</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="border outline-none pl-10 px-4 py-2"
                    />
                    <DollarSign
                      size={30}
                      className="absolute top-1/2 -translate-y-1/2 left-2"
                    />
                  </div>
                </div>

                <div className="flex w-1/4 flex-col relative">
                  <label>Discount</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="border outline-none px-4 pl-10 py-2"
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                    <RiDiscountPercentLine
                      size={30}
                      className="absolute top-1/2 -translate-y-1/2 left-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 p-4 items-center">
              <div className="my-8">
                <input
                  type="submit"
                  value={isLoading ? "Loading..." : "Create Product"}
                  disabled={isSubmitDisabled || isLoading}
                  className={`px-4  rounded cursor-pointer py-2 m-auto bg-[#22c55e] text-white ${
                    isSubmitDisabled ? "cursor-not-allowed opacity-50" : ""
                  }`}
                />
              </div>
              <Link
                className="px-4 py-2 border-hero border text-hero rounded"
                href={"/admin/prodcts"}
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
