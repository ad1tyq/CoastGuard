"use client"

import { ChartBarHorizontal } from "@/components/client/charts/Engagement"
import { ChartBarDefault } from "@/components/client/charts/Trends"
import { ChartPieLabel } from "@/components/client/charts/pieChart"
import { ChartLineMultiple } from "@/components/client/charts/Occurance"
import { LiveMetricsChart } from "@/components/client/charts/LiveMetricsChart"
import { TrustScoreDistribution } from "@/components/client/charts/TrustScoreDistribution"
import { ReliefWalletAnalytics } from "@/components/client/charts/ReliefWalletAnalytics"
import { HazardPredictionChart } from "@/components/client/charts/HazardPredictionChart"
import RealTimeStatus from "@/components/client/charts/RealTimeStatus"
import HazardCategoriesChart from "@/components/client/charts/HazardCategories"
import CoastalMetricsChart from "@/components/client/charts/CoastalMetricsChart"

export default function Page() {

    return (
        <div className="min-h-screen mt-10 bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-10">
            {/* Header */}
            <div className="text-center mb-8 px-4">
                <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 font-medium">Real-time Analytics • All Systems Operational</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-800 border-b-4 border-blue-400 inline-block pb-3 px-8 mb-4">
                    CoastGuard+ Analytics
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Comprehensive coastal safety analytics powered by AI, satellite data, and community intelligence
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 mb-8">
                <RealTimeStatus/>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column - Main Metrics */}
                    <div className="lg:col-span-8 space-y-8">
                        
                        {/* Coastal Metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <CoastalMetricsChart/>
                        </div>

                        {/* Hazard Categories */}
                        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                            <HazardCategoriesChart/>
                        </div>

                        {/* Charts Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:scale-105 transition-all duration-200">
                                <ChartBarHorizontal />
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:scale-105 transition-all duration-200">
                                <ChartPieLabel />
                            </div>
                        </div>

                        {/* Live Metrics Chart */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                            <LiveMetricsChart />
                        </div>
                    </div>

                    {/* Right Column - Secondary Charts & Info */}
                    <div className="lg:col-span-4 space-y-6">
                        
                        {/* Trust Score Distribution */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:scale-105 transition-all duration-200">
                            <TrustScoreDistribution />
                        </div>

                        {/* Relief Wallet Analytics */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:scale-105 transition-all duration-200">
                            <ReliefWalletAnalytics />
                        </div>

                        {/* Charts */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:scale-105 transition-all duration-200">
                            <ChartBarDefault />
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:scale-105 transition-all duration-200">
                            <ChartLineMultiple />
                        </div>

                        {/* Hazard Prediction */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                            <HazardPredictionChart />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}



