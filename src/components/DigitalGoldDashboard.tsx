import React, { useState } from "react";
import {
  UserIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ClockIcon,
  ChartBarIcon,
  SparklesIcon,
  InformationCircleIcon,
  ArrowPathIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

interface User {
  name: string;
  mobile: string;
  kycStatus: "Verified" | "Pending" | "Not Verified";
  email: string;
}

interface Investment {
  invested: number;
  bought: number;
  sold: number;
  realized: number;
}

interface Transaction {
  id: string;
  date: string;
  type: "Buy" | "Sell";
  amount: string;
  value: string;
  status: "Completed" | "Pending" | "Failed";
}

const Dashboard: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const user: User = {
    name: "Chinnu Chowdary",
    mobile: "+91 98****4321",
    kycStatus: "Verified",
    email: "chinnu@example.com",
  };

  const goldBalance: number = 2.345;
  const goldPrice: number = 6500;
  const currentValue: number = goldBalance * goldPrice;
  const profitLoss: number = currentValue - 12000;
  const profitLossPercent: string = ((profitLoss / 12000) * 100).toFixed(2);

  const investment: Investment = {
    invested: 12000,
    bought: 3.1,
    sold: 0.755,
    realized: 4800,
  };

  const recentTransactions: Transaction[] = [
    {
      id: "TXN001",
      date: "28 Jan 2026",
      type: "Buy",
      amount: "0.5 g",
      value: "₹3,250",
      status: "Completed",
    },
    {
      id: "TXN002",
      date: "15 Jan 2026",
      type: "Sell",
      amount: "0.3 g",
      value: "₹1,950",
      status: "Completed",
    },
    {
      id: "TXN003",
      date: "05 Jan 2026",
      type: "Buy",
      amount: "1.0 g",
      value: "₹6,500",
      status: "Completed",
    },
  ];

  const handleRefresh = (): void => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  const handleBuyClick = (): void => {
    // Navigate to Buy Gold screen
    console.log("Navigate to Buy Gold");
  };

  const handleSellClick = (): void => {
    // Navigate to Sell Gold screen
    console.log("Navigate to Sell Gold");
  };

  return (

    <div className="h-screen flex items-center justify-center bg-red-500 text-white text-3xl">
  Tailwind Working
</div>



    // <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
    //   {/* Header */}
    //   <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-6 shadow-lg">
    //     <div className="max-w-6xl mx-auto">
    //       <div className="flex items-center justify-between mb-4">
    //         <div className="flex items-center gap-3">
    //           <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
    //             <SparklesIcon className="h-6 w-6" />
    //           </div>
    //           <div>
    //             <h1 className="text-2xl font-bold">Digital Gold</h1>
    //             <p className="text-yellow-100 text-sm">Invest in 24K Pure Gold</p>
    //           </div>
    //         </div>

    //         <div className="flex items-center gap-4">
    //           <button
    //             onClick={handleRefresh}
    //             className="p-2 hover:bg-white/20 rounded-full transition"
    //             disabled={isRefreshing}
    //           >
    //             <ArrowPathIcon
    //               className={`h-5 w-5 ${isRefreshing ? "animate-spin" : ""}`}
    //             />
    //           </button>
    //           <button className="p-2 hover:bg-white/20 rounded-full transition relative">
    //             <BellIcon className="h-5 w-5" />
    //             <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
    //           </button>
    //           <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
    //             <UserIcon className="h-5 w-5" />
    //             <div className="text-right">
    //               <p className="font-medium text-sm">{user.name}</p>
    //               <div className="flex items-center gap-1 text-xs text-yellow-100">
    //                 <ShieldCheckIcon className="h-3 w-3" />
    //                 <span>KYC {user.kycStatus}</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Live Price Banner */}
    //       <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between">
    //         <div>
    //           <p className="text-yellow-100 text-sm">Live Gold Price (24K)</p>
    //           <p className="text-3xl font-bold">
    //             ₹{goldPrice.toLocaleString()}/g
    //           </p>
    //         </div>
    //         <div className="text-right">
    //           <p className="text-yellow-100 text-sm">Last Updated</p>
    //           <div className="flex items-center gap-1 text-sm">
    //             <ClockIcon className="h-4 w-4" />
    //             <span>2 mins ago</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Main Content */}
    //   <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
    //     {/* Portfolio Value Card */}
    //     <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 rounded-2xl shadow-xl p-6 text-white">
    //       <div className="flex items-start justify-between mb-4">
    //         <div>
    //           <p className="text-yellow-100 text-sm font-medium mb-1">
    //             Your Gold Holdings
    //           </p>
    //           <p className="text-5xl font-bold mb-2">{goldBalance} g</p>
    //           <p className="text-yellow-100 text-sm">
    //             Worth ₹{currentValue.toLocaleString()}
    //           </p>
    //         </div>
    //         <div className="text-right">
    //           <div
    //             className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
    //               profitLoss >= 0 ? "bg-green-500" : "bg-red-500"
    //             }`}
    //           >
    //             {profitLoss >= 0 ? "+" : ""}
    //             {profitLossPercent}%
    //           </div>
    //           <p className="text-sm text-yellow-100 mt-2">
    //             {profitLoss >= 0 ? "↑" : "↓"} ₹
    //             {Math.abs(profitLoss).toLocaleString()}
    //           </p>
    //         </div>
    //       </div>

    //       {/* Action Buttons */}
    //       <div className="grid grid-cols-2 gap-3 mt-6">
    //         <button
    //           onClick={handleBuyClick}
    //           className="bg-white hover:bg-yellow-50 text-yellow-600 py-3 px-4 rounded-xl font-semibold shadow-md transition flex items-center justify-center gap-2 group"
    //         >
    //           <ArrowTrendingUpIcon className="h-5 w-5 group-hover:scale-110 transition" />
    //           Buy Gold
    //         </button>
    //         <button
    //           onClick={handleSellClick}
    //           className="bg-yellow-600/30 hover:bg-yellow-600/40 backdrop-blur-sm text-white py-3 px-4 rounded-xl font-semibold shadow-md transition flex items-center justify-center gap-2 group"
    //         >
    //           <ArrowTrendingDownIcon className="h-5 w-5 group-hover:scale-110 transition" />
    //           Sell Gold
    //         </button>
    //       </div>
    //     </div>

    //     {/* Investment Summary */}
    //     <div className="bg-white rounded-2xl shadow-lg p-6">
    //       <div className="flex items-center gap-2 mb-5">
    //         <ChartBarIcon className="h-6 w-6 text-amber-600" />
    //         <h2 className="text-xl font-bold text-gray-800">
    //           Investment Overview
    //         </h2>
    //       </div>

    //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    //         <StatCard
    //           label="Total Invested"
    //           value={`₹${investment.invested.toLocaleString()}`}
    //           bgColor="bg-blue-50"
    //           textColor="text-blue-700"
    //         />
    //         <StatCard
    //           label="Gold Bought"
    //           value={`${investment.bought} g`}
    //           bgColor="bg-green-50"
    //           textColor="text-green-700"
    //         />
    //         <StatCard
    //           label="Gold Sold"
    //           value={`${investment.sold} g`}
    //           bgColor="bg-orange-50"
    //           textColor="text-orange-700"
    //         />
    //         <StatCard
    //           label="Realized Profit"
    //           value={`₹${investment.realized.toLocaleString()}`}
    //           bgColor="bg-purple-50"
    //           textColor="text-purple-700"
    //         />
    //       </div>
    //     </div>

    //     {/* Recent Transactions */}
    //     <div className="bg-white rounded-2xl shadow-lg p-6">
    //       <h2 className="text-xl font-bold text-gray-800 mb-4">
    //         Recent Transactions
    //       </h2>

    //       <div className="space-y-3">
    //         {recentTransactions.length > 0 ? (
    //           recentTransactions.map((txn) => (
    //             <div
    //               key={txn.id}
    //               className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer"
    //             >
    //               <div className="flex items-center gap-4">
    //                 <div
    //                   className={`p-2 rounded-lg ${
    //                     txn.type === "Buy" ? "bg-green-100" : "bg-orange-100"
    //                   }`}
    //                 >
    //                   {txn.type === "Buy" ? (
    //                     <ArrowTrendingUpIcon className="h-5 w-5 text-green-600" />
    //                   ) : (
    //                     <ArrowTrendingDownIcon className="h-5 w-5 text-orange-600" />
    //                   )}
    //                 </div>
    //                 <div>
    //                   <p className="font-semibold text-gray-800">
    //                     {txn.type} • {txn.amount}
    //                   </p>
    //                   <p className="text-sm text-gray-500">{txn.date}</p>
    //                 </div>
    //               </div>
    //               <div className="text-right">
    //                 <p className="font-semibold text-gray-800">{txn.value}</p>
    //                 <span
    //                   className={`inline-block px-2 py-1 text-xs rounded-full ${
    //                     txn.status === "Completed"
    //                       ? "bg-green-100 text-green-700"
    //                       : txn.status === "Pending"
    //                       ? "bg-yellow-100 text-yellow-700"
    //                       : "bg-red-100 text-red-700"
    //                   }`}
    //                 >
    //                   {txn.status}
    //                 </span>
    //               </div>
    //             </div>
    //           ))
    //         ) : (
    //           <div className="text-center py-8 text-gray-500">
    //             <p>No transactions yet</p>
    //             <p className="text-sm mt-1">
    //               Start investing in gold to see your transactions here
    //             </p>
    //           </div>
    //         )}
    //       </div>
    //     </div>

    //     {/* Info Cards */}
    //     <div className="grid md:grid-cols-3 gap-4">
    //       <InfoCard
    //         icon={<ShieldCheckIcon className="h-5 w-5" />}
    //         text="24K pure gold in insured vaults"
    //       />
    //       <InfoCard
    //         icon={<InformationCircleIcon className="h-5 w-5" />}
    //         text="3% GST on buy transactions"
    //       />
    //       <InfoCard
    //         icon={<ClockIcon className="h-5 w-5" />}
    //         text="Sell settlement in 48-72 hours"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

// StatCard Component
const StatCard: React.FC<{
  label: string;
  value: string;
  bgColor: string;
  textColor: string;
}> = ({ label, value, bgColor, textColor }) => (
  <div className={`${bgColor} rounded-xl p-4 border border-gray-100`}>
    <p className="text-sm text-gray-600 mb-1">{label}</p>
    <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
  </div>
);

// InfoCard Component
const InfoCard: React.FC<{
  icon: React.ReactNode;
  text: string;
}> = ({ icon, text }) => (
  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4 flex items-start gap-3 border border-amber-100">
    <div className="text-amber-600 mt-0.5">{icon}</div>
    <p className="text-sm text-gray-700">{text}</p>
  </div>
);

export default Dashboard;