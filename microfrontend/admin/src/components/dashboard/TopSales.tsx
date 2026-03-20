"use client";

const products = [
  { name: "Neptune Longsleeve", price: "$138", percent: 10 },
  { name: "Ribbed Tank Top", price: "$108", percent: 65 },
  { name: "Ribbed Modal T-shirt", price: "$125", percent: 55 },
  { name: "Oversized Motif T-shirt", price: "$98", percent: 45 },
  { name: "V-neck Linen T-shirt", price: "$158", percent: 75 },
];

export default function TopSales() {
  return (
    <div className="bg-white p-6 rounded-xl h-full shadow-sm">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-gray-900">Top Sale</h3>

        <select className="border rounded px-2 py-1 bg-gray-100 text-sm text-gray-500">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      {/* PRODUCTS */}
      <div className="flex flex-col gap-5">

        {products.map((p, i) => (

          <div key={i}>

            {/* product row */}
            <div className="flex items-center justify-between mb-2">

              <div className="flex items-center gap-3">

                <img
                  src={`https://picsum.photos/40?random=${i}`}
                  className="w-10 h-10 rounded-md"
                />

                <p className="text-sm font-medium text-gray-800">
                  {p.name}
                </p>

              </div>

              <p className="text-sm text-gray-500">
                {p.price}
              </p>

            </div>

            {/* progress bar */}
            <div className="w-full bg-gray-100 h-2 rounded-full">

              <div
                className="bg-[#ff7a45] h-2 rounded-full"
                style={{ width: `${p.percent}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}