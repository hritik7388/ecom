// src/components/products/productsTable.tsx
"use client"

import { useState } from "react"
import Link from "next/link"

const products = [
  { id: "#7712309", name: "Neptune Long-sleeve", price: 1452.5, qty: 1638, stock: "Out of stock", date: "08/24/2024" },
  { id: "#7712310", name: "Corduroy slim-fit", price: 1452.5, qty: 1638, stock: "In Stock", date: "08/24/2024" },
  { id: "#7712311", name: "Turtleneck knitted T-shirt", price: 1452.5, qty: 1638, stock: "In Stock", date: "08/24/2024" },
  { id: "#7712312", name: "Wool oversized T-shirt", price: 1452.5, qty: 1638, stock: "In Stock", date: "08/24/2024" },
]

type Props = {
  search: string
  statusFilter: string
  categoryFilter: string
}

export default function ProductTable({ search, statusFilter, categoryFilter }: Props) {

  const [page, setPage] = useState(1)
  const pageSize = 5
  const filtered = products.filter(p =>
    (p.id.includes(search) || p.name.toLowerCase().includes(search.toLowerCase())) &&
    (statusFilter === "All" || p.stock === statusFilter)
  )

  const totalPages = Math.ceil(filtered.length / pageSize)
  const paginated = filtered.slice((page-1)*pageSize, page*pageSize)

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-gray-700 border">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="p-2 text-left">Image</th>
            <th className="p-2 text-left">Product</th>
            <th className="p-2 text-center">Product ID</th>
            <th className="p-2 text-center">Price</th>
            <th className="p-2 text-center">Quantity</th>
            <th className="p-2 text-center">Stock</th>
            <th className="p-2 text-center">Start Date</th>
            <th className="p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((p, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-2">
                <img src={`https://picsum.photos/40?random=${i}`} className="rounded-md" />
              </td>
              <td className="p-2">{p.name}</td>
              <td className="p-2 text-center">{p.id}</td>
              <td className="p-2 text-center">${p.price.toFixed(2)}</td>
              <td className="p-2 text-center">{p.qty}</td>
              <td className="p-2 text-center">{p.stock}</td>
              <td className="p-2 text-center">{p.date}</td>
              <td className="p-2 text-center flex justify-center gap-2">
                <Link href={`/dashboard/products/details/${p.id}`} className="text-blue-500">View</Link>
                <Link href={`/dashboard/products/edit/${p.id}`} className="text-orange-500">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="flex justify-between items-center mt-4">
        <p>Showing {(page-1)*pageSize +1}–{Math.min(page*pageSize, filtered.length)} of {filtered.length}</p>
        <div className="flex gap-2">
          <button disabled={page===1} onClick={()=>setPage(page-1)} className="px-3 py-1 border rounded disabled:opacity-40">‹</button>
          {[...Array(totalPages)].map((_,i)=>(
            <button key={i} onClick={()=>setPage(i+1)} className={`px-3 py-1 border rounded ${page===i+1 ? "bg-orange-500 text-white":""}`}>{i+1}</button>
          ))}
          <button disabled={page===totalPages} onClick={()=>setPage(page+1)} className="px-3 py-1 border rounded disabled:opacity-40">›</button>
        </div>
      </div>
    </div>
  )
}