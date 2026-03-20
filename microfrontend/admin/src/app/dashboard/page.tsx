// src/app/dashboard/page.tsx
"use client";

import StatsCard from "@/src/components/dashboard/StatsCard";
import RevenueChart from "@/src/components/dashboard/RevenueChart";
import PromotionalChart from "@/src/components/dashboard/PromotionalChart";
import TopSales from "@/src/components/dashboard/TopSales";
import RecentOrders from "@/src/components/dashboard/RecentOrders";
import UserLocation from "@/src/components/dashboard/UserLocation";

import {
  FaDollarSign,
  FaShoppingBag,
  FaUser,
  FaWallet
} from "react-icons/fa";

const chartData = [
  { value: 10 },
  { value: 40 },
  { value: 20 },
  { value: 60 },
  { value: 50 }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatsCard
          title="Total Earnings"
          value={334945}
          percent={1.56}
          color="#22c55e"
          icon={<FaDollarSign />}
          data={chartData}
        />

        <StatsCard
          title="Total Orders"
          value={2802}
          percent={0.89}
          color="#ff6a00"
          icon={<FaShoppingBag />}
          data={chartData}
        />

        <StatsCard
          title="Customers"
          value={4945}
          percent={2.1}
          color="#8b5cf6"
          icon={<FaUser />}
          data={chartData}
        />

        <StatsCard
          title="My Balance"
          value={4945}
          percent={1.2}
          color="#3b82f6"
          icon={<FaWallet />}
          data={chartData}
        />

      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-6">
          <RevenueChart />
        </div>

        <div className="xl:col-span-3">
          <PromotionalChart />
        </div>

        <div className="xl:col-span-3">
          <TopSales />
        </div>

      </div>

      {/* TABLE + MAP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        <div className="lg:col-span-8 overflow-x-auto">
          <RecentOrders />
        </div>

        <div className="lg:col-span-4">
          <UserLocation />
        </div>

      </div>

    </div>
  );
}