"use client"

import { useEffect, useState, useId } from "react"
import { ResponsiveContainer, AreaChart, Area } from "recharts"

type Props = {
  title: string
  value: number
  percent: number
  color: string
  icon: React.ReactNode
  data: { value: number }[]
}

export default function StatsCard({
  title,
  value,
  percent,
  color,
  icon,
  data
}: Props) {

  const [count, setCount] = useState(0)
  const [per, setPer] = useState(0)
  const [chartData, setChartData] = useState(data.map(d => ({ value: 0 })))
  const [range, setRange] = useState("Weekly")

  const gradientId = useId()

  useEffect(() => {

    let start = 0
    let startPer = 0

    const duration = 1200
    const step = value / (duration / 16)
    const stepPer = percent / (duration / 16)

    const timer = setInterval(() => {

      start += step
      startPer += stepPer

      if (start >= value) {
        start = value
        startPer = percent
        clearInterval(timer)
      }

      setCount(Math.floor(start))
      setPer(parseFloat(startPer.toFixed(2)))

    }, 16)

    return () => clearInterval(timer)

  }, [value, percent])


  useEffect(() => {

    let frame = 0
    const frames = 30

    const timer = setInterval(() => {

      frame++
      const progress = frame / frames

      setChartData(
        data.map(d => ({
          value: d.value * progress
        }))
      )

      if (frame >= frames) clearInterval(timer)

    }, 20)

    return () => clearInterval(timer)

  }, [data])


  const format = (num: number) => "$" + num.toLocaleString()

  return (

    <div className="bg-white p-6 rounded-xl shadow-sm">

      {/* HEADER */}

      <div className="flex justify-between items-start">

        {/* LEFT */}
        <div className="flex gap-4">

          {/* ICON */}
          <div className="relative w-14 h-14 flex items-center justify-center">

            <svg viewBox="0 0 100 100" className="absolute w-full h-full">
              <path
                d="M50 8 Q55 8 60 12 L82 25 Q90 30 90 40 L90 60 Q90 70 82 75 L60 88 Q55 92 50 92 Q45 92 40 88 L18 75 Q10 70 10 60 L10 40 Q10 30 18 25 L40 12 Q45 8 50 8 Z"
                fill={color}
              />
            </svg>

            <div className="relative text-white text-xl">
              {icon}
            </div>

          </div>


          {/* TEXT */}
          <div>

            <p className="text-gray-500 text-sm">
              {title}
            </p>

            <div className="flex items-center gap-3">

              <h2 className="text-2xl text-gray-900 font-bold">
                {format(count)}
              </h2>

              {/* % appears here only under 1280 */}
              <p className="text-green-500 text-sm font-semibold xl:hidden">
                ↑ {per}%
              </p>

            </div>

            {/* Weekly under value only on xl screens */}
            <select
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="text-xs text-gray-400 bg-transparent outline-none cursor-pointer mt-1 hidden xl:block"
            >
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="flex items-center gap-3">

          {/* Weekly top-right on smaller screens */}
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="text-xs text-gray-400 bg-transparent outline-none cursor-pointer xl:hidden"
          >
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>

          {/* % on large screens */}
          <p className="text-green-500 text-sm font-semibold hidden xl:block">
            ↑ {per}%
          </p>

        </div>

      </div>


      {/* CHART */}

      <div className="h-[80px] mt-4">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={chartData}>

            <defs>

              <linearGradient
                id={gradientId}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>

            </defs>

            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={3}
              fill={`url(#${gradientId})`}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>

  )

}