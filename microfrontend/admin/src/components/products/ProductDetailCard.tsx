// src/components/products/ProductDetailCard.tsx
"use client"

type Props = {
  product: any
}

export default function ProductDetailCard({ product }: Props) {

  return (
    <div className="bg-white p-6 rounded shadow w-full max-w-md">
      <img src="https://picsum.photos/200" className="rounded mb-4 w-full h-48 object-cover"/>
      <p><span className="font-semibold">Name:</span> {product.name}</p>
      <p><span className="font-semibold">Price:</span> ${product.price.toFixed(2)}</p>
      <p><span className="font-semibold">Quantity:</span> {product.qty}</p>
      <p><span className="font-semibold">Stock:</span> {product.stock}</p>
      <p><span className="font-semibold">Start Date:</span> {product.date}</p>
    </div>
  )
}
