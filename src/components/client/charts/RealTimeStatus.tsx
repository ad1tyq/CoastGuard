import { RealtimeStats } from "../../../../data/realTimeStats"
export default function RealTimeStatus() {
    return (
        <>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {RealtimeStats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                            <div className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${stat.status === 'online' ? 'bg-green-100 text-green-800' :
                                    stat.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                                        stat.status === 'active' ? 'bg-purple-100 text-purple-800' :
                                            'bg-orange-100 text-orange-800'
                                }`}>
                                {stat.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}