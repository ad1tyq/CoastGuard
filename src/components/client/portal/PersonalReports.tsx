// Enhanced PersonalReports.tsx - Trust Score Integration
import { PersonalReportData } from "../../../../data/PersonalReportData"

export default function PersonalReports() {
    const getReportStatus = (report: string) => {
        if (report.includes('week ago') || report.includes('weeks ago')) return 'verified'
        if (report.includes('days ago')) return 'pending'
        return 'processing'
    }

    const getReportIcon = (report: string) => {
        if (report.toLowerCase().includes('hazard')) return '🚧'
        if (report.toLowerCase().includes('feedback')) return '💬'
        if (report.toLowerCase().includes('cleanup')) return '🏖️'
        if (report.toLowerCase().includes('flood')) return '🌊'
        return '📝'
    }

    return (
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-fit">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">My Reports</h2>
                <div className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
                    {PersonalReportData.length} Reports
                </div>
            </div>

            {/* Trust Score Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-sm text-gray-600">Trust Score</div>
                        <div className="text-xl font-bold text-blue-600">4.8⭐</div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-gray-600">Rank</div>
                        <div className="text-xl font-bold text-green-600">#47</div>
                    </div>
                </div>
            </div>
            
            <div className="space-y-3 max-h-64 overflow-y-auto pr-2" style={{scrollbarWidth: "thin"}}>
                {PersonalReportData.map((PR) => {
                    const status = getReportStatus(PR.pr)
                    const statusStyles = {
                        verified: "bg-green-50 border-green-200 text-green-800",
                        pending: "bg-yellow-50 border-yellow-200 text-yellow-800",
                        processing: "bg-blue-50 border-blue-200 text-blue-800"
                    }

                    return (
                        <div key={PR.id} className={`${statusStyles[status]} border rounded-lg p-3 cursor-pointer hover:shadow-md transition-all`}>
                            <div className="flex items-start gap-3">
                                <span className="text-lg">{getReportIcon(PR.pr)}</span>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">{PR.pr}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-xs font-semibold">
                                            {status === 'verified' && '✅ Verified'}
                                            {status === 'pending' && '⏳ Under Review'}
                                            {status === 'processing' && '🔄 Processing'}
                                        </span>
                                        {status === 'verified' && (
                                            <span className="text-xs text-green-600">+5 Trust Points</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex justify-between text-xs text-gray-600">
                    <span>Verification Rate: 91%</span>
                    <span>Impact Score: +156</span>
                </div>
            </div>
        </div>
    )
}