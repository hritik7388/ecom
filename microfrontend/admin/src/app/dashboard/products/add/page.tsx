"use client";

import { useState } from "react";

export default function AddProductPage() {

  // 3 default static images
  const defaultImages = [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  ];

  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (e: any) => {
    const files = Array.from(e.target.files);

    // total images = static + uploaded
    if (defaultImages.length + images.length + files.length > 5) {
      alert("You can upload maximum 5 images total");
      return;
    }

    setImages((prev: any) => [...prev, ...files]);
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl text-gray-900 font-bold mb-6">Add Product</h1>

      {/* IMAGE UPLOAD */}
      <div className="bg-white p-6 text-gray-900 rounded-xl shadow-sm mb-6">
        <p className="mb-3 font-semibold">Upload images</p>

        {/* DROP AREA */}
        <label className="border-2 border-dashed border-orange-400 rounded-xl h-[320px] flex flex-col items-center justify-center text-gray-500 cursor-pointer">

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

          <div className="flex flex-col items-center gap-5">
            <div className="text-9xl text-orange-500">☁️</div>
            <p>
              Drop your images here or{" "}
              <span className="text-orange-500 underline">click to browse</span>
            </p>
          </div>
        </label>

        {/* IMAGE PREVIEW */}
        <div className="flex gap-4 mt-6 flex-wrap">

          {/* Static Images */}
          {defaultImages.map((img, index) => (
            <div
              key={`static-${index}`}
              className="w-[140px] h-[140px] rounded-xl overflow-hidden border bg-gray-100"
            >
              <img
                src={img}
                alt="static"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Uploaded Images */}
          {images.map((file, index) => (
            <div
              key={`upload-${index}`}
              className="w-[140px] h-[140px] rounded-xl overflow-hidden border bg-gray-100"
            >
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

        </div>

        {/* NOTE TEXT */}
        <p className="text-sm text-gray-500 mt-4">
          You need to add at least 4 images. Pay attention to the quality of the pictures you add.
        </p>
      </div>

      {/* FORM */}
      {/* FORM */}
      <div className="bg-white p-6 rounded-xl shadow-sm">

        <div className="space-y-6">

          {/* PRODUCT TITLE */}
          <div>
            <p className="font-medium mb-2 text-gray-900">Product title <span className="text-orange-500">*</span></p>
            <input
              placeholder="Enter title"
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg"
            />
            <p className="text-xs text-gray-900 mt-1">
              Do not exceed 20 characters when entering the product name.
            </p>
          </div>

          {/* CATEGORY */}
          <div>
            <p className="font-medium mb-2 text-gray-900">Category <span className="text-orange-500">*</span></p>

            <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                <span className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm">✕ Women</span>
                <span className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm">✕ Dress</span>
              </div>
              <span>⌄</span>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-3 gap-6">

            {/* PRICE */}
            <div>
              <p className="mb-2 font-medium text-gray-900" >Price <span className="text-orange-500">*</span></p>
              <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-2">
                <span className="text-gray-900">$</span>
                <input placeholder="Price" className="bg-transparent text-gray-900 outline-none w-full" />
              </div>
            </div>

            {/* SALE PRICE */}
            <div>
              <p className="mb-2 text-gray-900 font-medium">Sale Price</p>
              <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-2">
                <span className="text-gray-900">$</span>
                <input placeholder="Sale Price" className="bg-transparent text-gray-900 outline-none w-full" />
              </div>
            </div>

            {/* SCHEDULE */}
            <div>
              <p className="mb-2 font-medium text-gray-900">Schedule</p>
              <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between">
                <input placeholder="dd/mm/yyyy" className="bg-transparent text-gray-900 outline-none w-full" />
                <span>📅</span>
              </div>
            </div>

            {/* BRAND */}
            <div>
              <p className="mb-2 font-medium text-gray-900">Brand <span className="text-orange-500">*</span></p>
              <input placeholder="Choose brand " className="bg-gray-100 p-3 text-gray-900 rounded-lg w-full" />
            </div>

            {/* COLOR */}
            <div>
              <p className="mb-2 font-medium text-gray-900">Color: <span className="text-gray-900">Orange</span></p>
              <div className="flex gap-3 items-center">
                <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-black"></div>
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
                <div className="w-6 h-6 rounded-full bg-black"></div>
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <div className="w-6 h-6 rounded-full bg-red-400"></div> 
              </div>
            </div>

            {/* SIZE */}
            <div>
              <p className="mb-2 font-medium text-gray-900">Size: <span className="text-gray-900">M</span></p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-gray-100 text-black rounded-lg">S</button>
                <button className="px-3 py-1 bg-orange-500 text-white rounded-lg">M</button>
                <button className="px-3 py-1 bg-gray-100 text-black rounded-lg">L</button>
                <button className="px-3 py-1 bg-gray-100 text-black rounded-lg">XL</button>
              </div>
            </div>

            {/* SKU */}
            <div>
              <p className="mb-2 font-medium text-gray-900">SKU</p>
              <input placeholder="Enter SKU" className="bg-gray-100 p-3 text-gray-900 rounded-lg w-full" />
            </div>

            {/* STOCK */}
            <div>
              <p className="mb-2 font-medium text-gray-900">Stock <span className="text-orange-500">*</span></p>
              <input placeholder="Enter Stock" className="bg-gray-100 text-gray-900 p-3 rounded-lg w-full" />
            </div>

            {/* TAGS */}
            <div>
              <p className="mb-2 text-gray-900 font-medium">Tags</p>
              <input placeholder="Enter a tag" className="bg-gray-100 p-3 text-gray-900 rounded-lg w-full" />
            </div>

          </div>

          {/* DESCRIPTION */}
          <div>
            <p className="mb-2  text-gray-900 font-medium">Description <span className="text-orange-500">*</span></p>
            <textarea
              placeholder="Short description about product"
              className="w-full text-gray-900 bg-gray-100 p-3 rounded-lg h-[150px]"
            />
              <p className="text-xs text-gray-900 mt-1">
              Do not exceed 500 characters when entering the product name.
            </p>
          </div>

        </div>

      </div>
      <div className="flex gap-4 mt-6">
        <button className="bg-orange-500 text-white px-18 py-1 rounded-lg">
          Add Product
        </button>

        <button className="border px-18 py-1 rounded-lg bg-gray-100 text-gray-900">
          Cancel
        </button>
      </div>
    </div>
  );
}