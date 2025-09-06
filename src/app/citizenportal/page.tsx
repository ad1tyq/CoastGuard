"use client"
// Enhanced page.tsx - Integrated Citizen Portal
import ReportForm from "@/components/client/portal/Reports"
import FeedbackForm from "@/components/client/portal/Feedback"
import CommunityAlerts from "@/components/client/portal/CommunityAlerts"
import PersonalReports from "@/components/client/portal/PersonalReports"
import FileUploader from "@/components/client/portal/fileUploader"
import QuickStats from "@/components/client/portal/QuickStats"
import Link from "next/link"
import { useSession } from "next-auth/react"

export default function Page() {
    const { data: session } = useSession();
    if (!session) {
        return (
            <div className="relative mt-20 flex size-full min-h-screen flex-col overflow-x-hidden text-[var(--text-primary)]">
                <div className="flex flex-col items-center">
                    <div className="shadow-lg bg-gray-200 mt-10 rounded-[10px] w-[auto]
            text-[clamp(0.9rem,1.1vw,1.1rem)] h-auto py-10 px-8 gap-5 flex flex-col justify-center">
                        <p><b>Session Logged Out</b></p>
                    </div>
                    <Link href="/"
                        className="rounded cursor-pointer transition-all duration-300 hover:scale-102 hover:bg-gray-400 hover:text-gray-700 px-5 py-[2px] font-semibold text-lg mt-5 text-gray-800 bg-gray-300">home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen mt-10 bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-10">
            {/* Enhanced Header with System Integration */}
            <div className="text-center mb-8 px-4">
                <h1 className="text-4xl font-bold text-gray-800 border-b-4 border-blue-400 inline-block pb-3 px-8 mb-4">
                    CoastGuard+ Citizen Portal
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Your integrated gateway to coastal safety, emergency reporting, and community resilience
                </p>
            </div>

            {/* Quick Stats Dashboard */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <QuickStats />
            </div>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">

                    {/* Left Column - Reports & Alerts */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <CommunityAlerts />
                            <PersonalReports />
                        </div>
                        <ReportForm />
                    </div>

                    {/* Right Column - File Upload */}
                    <div className="lg:col-span-1 flex justify-center">
                        <div className="w-full max-w-md">
                            <FileUploader />
                        </div>
                    </div>
                </div>

                {/* Full-width Feedback Section */}
                <div className="mb-8">
                    <FeedbackForm />
                </div>
            </div>
        </div>
    )
}