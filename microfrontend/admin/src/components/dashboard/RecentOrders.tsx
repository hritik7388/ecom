"use client"

import { useState } from "react"

const orders = [
    { product: "Neptune Longsleeve", customer: "Leslie Alexander", id: "1452", qty: "X1", price: "$138", status: "Delivered" },
    { product: "Ribbed Tank Top", customer: "Jacob Jones", id: "1453", qty: "X1", price: "$108", status: "Pending" },
    { product: "Ribbed Modal T-shirt", customer: "Devon Lane", id: "1454", qty: "X2", price: "$125", status: "Delivered" },
    { product: "Oversized Motif T-shirt", customer: "Esther Howard", id: "1455", qty: "X1", price: "$98", status: "Cancelled" },
    { product: "V-neck Linen T-shirt", customer: "Cody Fisher", id: "1456", qty: "X1", price: "$158", status: "Delivered" },
    { product: "Classic Cotton Tee", customer: "Wade Warren", id: "1457", qty: "X1", price: "$120", status: "Delivered" },
    { product: "Slim Fit Shirt", customer: "Bessie Cooper", id: "1458", qty: "X2", price: "$140", status: "Pending" },
]

export default function TopSales() {

    const pageSize = 5
    const [page, setPage] = useState(1)

    const totalPages = Math.ceil(orders.length / pageSize)

    const paginatedOrders = orders.slice(
        (page - 1) * pageSize,
        page * pageSize
    )

    return (

        <div className="bg-white p-6 rounded-xl shadow-sm h-full">

            <h3 className="font-semibold text-gray-900 mb-6">
                Recent Orders
            </h3>

            <div className="overflow-x-auto">

                <table className="w-full text-sm">

                    <thead className="text-gray-500 border-b">

                        <tr>
                            <th className="text-left py-3 text-gray-900">Product</th>
                            <th className="text-left text-gray-900">Customer</th>
                            <th className="text-center text-gray-900">Product ID</th>
                            <th className="text-center text-gray-900">Quantity</th>
                            <th className="text-center text-gray-900">Price</th>
                            <th className="text-center text-gray-900">Status</th>
                        </tr>

                    </thead>

                    <tbody>

                        {paginatedOrders.map((o, i) => (

                            <tr key={i} className="border-b hover:bg-gray-50">

                                <td className="py-4 flex text-gray-900 items-center gap-3">
                                    <img
                                        src="https://picsum.photos/40"
                                        className="w-10 h-10 rounded-md"
                                    />
                                    {o.product}
                                </td>

                                <td className="text-gray-900">
                                    {o.customer}
                                </td>

                                <td className="text-center text-gray-900">
                                    {o.id}
                                </td>

                                <td className="text-center text-gray-900">
                                    {o.qty}
                                </td>

                                <td className="text-center text-gray-900">
                                    {o.price}
                                </td>

                                <td className="text-center text-gray-900">

                                    <span
                                        className={`px-3 py-1 text-xs rounded-full
                                        ${o.status === "Delivered" && "bg-green-100 text-green-600"}
                                        ${o.status === "Pending" && "bg-yellow-100 text-yellow-600"}
                                        ${o.status === "Cancelled" && "bg-red-100 text-red-600"}
                                    `}
                                    >
                                        {o.status}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* PAGINATION */}

            {/* PAGINATION */}

            <div className="flex items-center text-gray-900 justify-between mt-6">

                <p className="text-sm text-gray-900">
                    Showing {(page - 1) * pageSize + 1}–
                    {Math.min(page * pageSize, orders.length)} of {orders.length}
                </p>

                <div className="flex items-center text-gray-900 gap-2">

                    {/* LEFT */}

                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 disabled:opacity-40"
                    >
                        ‹
                    </button>

                    {/* PAGE NUMBERS */}

                    {[...Array(totalPages)].map((_, i) => {

                        const pageNumber = i + 1

                        return (
                            <button
                                key={i}
                                onClick={() => setPage(pageNumber)}
                                className={`w-9 h-9 flex items-center justify-center text-gray-900 rounded-full text-sm
          ${page === pageNumber
                                        ? "bg-[#ff7a45] text-white"
                                        : "bg-gray-100 text-gray-900"
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        )
                    })}

                    {/* RIGHT */}

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                        className="w-9 h-9 flex items-center text-gray-900 justify-center rounded-full bg-gray-100 disabled:opacity-40"
                    >
                        ›
                    </button>

                </div>

            </div>
        </div>

    )
}