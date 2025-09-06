"use client"
import { useState } from "react"
import Image from "next/image";
import { HazardCategories } from "../../../../data/hazardCategory";
export default function HazardCategoriesChart() {
    const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Coastal Hazard Categories</h2>
                <div className="flex items-center gap-2">
                    <select
                        value={selectedTimeframe}
                        onChange={(e) => setSelectedTimeframe(e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                    >
                        <option value="24h">Last 24 Hours</option>
                        <option value="7d">Last 7 Days</option>
                        <option value="30d">Last 30 Days</option>
                    </select>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                        View Details
                        <Image src="/assets/arrow-right.svg" alt="arrow" width={12} height={12} />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {HazardCategories.map((category) => (
                    <div key={category.id} className={`relative p-6 rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 ${category.severity === 'high' ? 'bg-red-100 hover:bg-red-200' :
                            category.severity === 'medium' ? 'bg-yellow-100 hover:bg-yellow-200' :
                                'bg-green-100 hover:bg-green-200'
                        }`}>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                                <Image src={category.image} alt="icon" width={32} height={32} />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-1">{category.title}</h3>
                            <div className="text-2xl font-bold text-gray-700 mb-1">{category.count}</div>
                            <div className={`text-xs px-2 py-1 rounded-full ${category.trend.startsWith('+') ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
                                }`}>
                                {category.trend}
                            </div>
                        </div>

                        {/* Severity indicator */}
                        <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${category.severity === 'high' ? 'bg-red-500' :
                                category.severity === 'medium' ? 'bg-yellow-500' :
                                    'bg-green-500'
                            }`}></div>
                    </div>
                ))}
            </div>
        </>
    )
}