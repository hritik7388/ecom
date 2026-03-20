"use client"

import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"

const data = [
  { month: "Jan", revenue: 120, order: 40 },
  { month: "Feb", revenue: 80, order: 60 },
  { month: "Mar", revenue: 150, order: 70 },
  { month: "Apr", revenue: 110, order: 50 },
  { month: "May", revenue: 60, order: 55 },
  { month: "Jun", revenue: 220, order: 90 },
  { month: "Jul", revenue: 190, order: 65 },
  { month: "Aug", revenue: 90, order: 45 },
  { month: "Sep", revenue: 140, order: 70 },
  { month: "Oct", revenue: 170, order: 40 },
  { month: "Nov", revenue: 200, order: 95 },
  { month: "Dec", revenue: 240, order: 75 },
]

export default function RevenueChart() {

  return (

    <div className="bg-white p-6 rounded-xl shadow-sm h-full">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-4">

        <h3 className="font-semibold text-gray-900">
          Revenue
        </h3>

        <select className="border rounded px-2 py-1 bg-gray-100 text-sm text-gray-500">
          <option>Yearly</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>

      </div>


      {/* STATS */}

      <div className="flex gap-8 mb-6">

        <div>
          <p className="text-sm text-gray-700 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff7a45]"></span>
            Revenue
          </p>

          <div className="flex items-center gap-2">
            <h4 className="text-xl text-gray-900 font-bold">$37,802</h4>
            <span className="text-green-500 text-sm">↑ 0.56%</span>
          </div>
        </div>


        <div>
          <p className="text-sm text-gray-700 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#8b5cf6]"></span>
            Order
          </p>

          <div className="flex items-center gap-2">
            <h4 className="text-xl text-gray-900  font-bold">$28,305</h4>
            <span className="text-green-500 text-sm">↑ 0.56%</span>
          </div>
        </div>

      </div>


      {/* CHART */}

      <ResponsiveContainer width="100%" height={280}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          {/* ORANGE BARS */}

          <Bar
            dataKey="revenue"
            fill="#ff7a45"
            radius={[4, 4, 0, 0]}
            barSize={18}
          />

          {/* PURPLE LINE */}

          <Line
            type="monotone"
            dataKey="order"
            stroke="#8b5cf6"
            strokeWidth={3}
            dot={{ r: 4 }}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  )

}