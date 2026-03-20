// src/components/products/ProductForm.tsx
"use client"

import { useState } from "react"

type Props = {
  initialData?: any
  onSubmit: (data: any) => void
}

export default function ProductForm({ initialData, onSubmit }: Props) {

  const [name, setName] = useState(initialData?.name || "")
  const [price, setPrice] = useState(initialData?.price || "")
  const [qty, setQty] = useState(initialData?.qty || "")
  const [stock, setStock] = useState(initialData?.stock || "In Stock")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, price, qty, stock })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <div className="flex flex-col">
        <label className="text-sm text-gray-700">Product Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} className="border rounded px-3 py-2"/>
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-gray-700">Price</label>
        <input type="number" value={price} onChange={e=>setPrice(Number(e.target.value))} className="border rounded px-3 py-2"/>
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-gray-700">Quantity</label>
        <input type="number" value={qty} onChange={e=>setQty(Number(e.target.value))} className="border rounded px-3 py-2"/>
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-gray-700">Stock</label>
        <select value={stock} onChange={e=>setStock(e.target.value)} className="border rounded px-3 py-2">
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>
      <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
        {initialData ? "Update Product" : "Add Product"}
      </button>
    </form>
  )
}
