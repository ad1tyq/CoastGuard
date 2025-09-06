// Enhanced page.tsx - Integrated Citizen Portal
import ReportForm from "@/components/client/portal/Reports"
import FeedbackForm from "@/components/client/portal/Feedback"
import CommunityAlerts from "@/components/client/portal/CommunityAlerts"
import PersonalReports from "@/components/client/portal/PersonalReports"
import FileUploader from "@/components/client/portal/fileUploader"
import QuickStats from "@/components/client/portal/QuickStats"

export default function Page() {
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