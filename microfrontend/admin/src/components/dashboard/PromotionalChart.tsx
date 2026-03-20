"use client"

import { useState } from "react"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Sector,
  PieProps
} from "recharts"

type ChartData = {
  name: string
  value: number
}

const data: ChartData[] = [
  { name: "Social Media", value: 45 },
  { name: "Website", value: 35 },
  { name: "Store", value: 20 }
]

const COLORS = ["#ff7a45", "#3b82f6", "#8b5cf6"]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill
  } = props

  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius + 10}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
    />
  )
}

export default function PromotionalChart() {

  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleMouseEnter = (_: ChartData, index: number) => {
    setActiveIndex(index)
  }

  return (

    <div className="bg-white p-6 rounded-xl shadow-sm h-full">

      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-900">
          Promotional Sales
        </h3>

        <select className="border rounded px-2 py-1 bg-gray-100 text-sm text-gray-500">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      <p className="text-gray-500 text-sm">Visitors</p>

      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl text-gray-900 font-bold">7,802</h2>
        <span className="text-green-500 text-sm font-semibold">↑ 0.56%</span>
      </div>

      <div className="h-[220px] relative">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              {...({
                data,
                innerRadius: 70,
                outerRadius: 95,
                paddingAngle: 2,
                dataKey: "value",
                activeIndex,
                activeShape: renderActiveShape,
                onMouseEnter: handleMouseEnter
              } as PieProps)}
            >

              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                  style={{ cursor: "pointer" }}
                />
              ))}

            </Pie>

          </PieChart>

        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-gray-900 text-sm">Website</p>
          <p className="font-bold text-gray-900 text-lg">1,016</p>
          <span className="text-blue-500 text-sm font-semibold">↑ 2.1%</span>
        </div>

      </div>

      <div className="flex justify-center gap-6 mt-6 text-sm">

        <div className="flex text-gray-900 items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff7a45]" />
          Social Media
        </div>

        <div className="flex text-gray-900 items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#3b82f6]" />
          Website
        </div>

        <div className="flex text-gray-900 items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
          Store
        </div>

      </div>

    </div>

  )
}