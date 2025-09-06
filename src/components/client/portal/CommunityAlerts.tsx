// Enhanced CommunityAlerts.tsx - Better Integration
import { AlertData } from "../../../../data/AlertData"

export default function CommunityAlerts() {
    const getAlertSeverity = (alert: string) => {
        if (alert.toLowerCase().includes('flood')) return 'high'
        if (alert.toLowerCase().includes('power')) return 'medium'
        return 'low'
    }

    const getAlertIcon = (alert: string) => {
        if (alert.toLowerCase().includes('flood')) return '🌊'
        if (alert.toLowerCase().includes('power')) return '⚡'
        if (alert.toLowerCase().includes('cleanup')) return '🧹'
        return '⚠️'
    }

    return (
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-fit">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Community Alerts</h2>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 font-medium">Live Updates</span>
                </div>
            </div>
            
            <div className="space-y-3 max-h-64 overflow-y-auto pr-2" style={{scrollbarWidth: "thin"}}>
                {AlertData.map((alert) => {
                    const severity = getAlertSeverity(alert.alert)
                    const severityStyles = {
                        high: "bg-red-50 border-l-red-500 text-red-800",
                        medium: "bg-yellow-50 border-l-yellow-500 text-yellow-800", 
                        low: "bg-green-50 border-l-green-500 text-green-800"
                    }

                    return (
                        <div key={alert.id} className={`${severityStyles[severity]} border-l-4 rounded-r-lg p-4 cursor-pointer hover:shadow-md transition-all`}>
                            <div className="flex items-start gap-3">
                                <span className="text-lg">{getAlertIcon(alert.alert)}</span>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">{alert.alert}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                                            severity === 'high' ? 'bg-red-100 text-red-700' :
                                            severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-green-100 text-green-700'
                                        }`}>
                                            {severity.toUpperCase()}
                                        </span>
                                        <span className="text-xs text-gray-500">📍 Your Area</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100">
                <button className="w-full hover:scale-102 cursor-pointer transition-all duration-300 text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View All Alerts →
                </button>
            </div>
        </div>
    )
}