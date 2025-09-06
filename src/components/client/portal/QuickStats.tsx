// Enhanced QuickStats.tsx - Dashboard Integration
export default function QuickStats() {
    const stats = [
        { label: "Active Users Today", value: "1,247", change: "+12%", color: "text-blue-600", bgColor: "bg-blue-50" },
        { label: "Reports Submitted", value: "89", change: "+23%", color: "text-green-600", bgColor: "bg-green-50" },
        { label: "Relief Distributed", value: "₹2.3L", change: "+45%", color: "text-purple-600", bgColor: "bg-purple-50" },
        { label: "Response Time", value: "2.1 min", change: "-15%", color: "text-orange-600", bgColor: "bg-orange-50" }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className={`${stat.bgColor} rounded-xl p-6 border border-gray-100`}>
                    <div className="text-center">
                        <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                            {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                        <div className={`text-xs font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                            {stat.change} vs last week
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}