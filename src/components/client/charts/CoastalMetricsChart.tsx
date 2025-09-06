import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CoastalMetrics } from "../../../../data/coastalMetric"
export default function CoastalMetricsChart() {
    return (
        <>
            {CoastalMetrics.map((metric) => (
                <div key={metric.id} className={`${metric.bgColor} rounded-xl p-6 shadow-lg border border-gray-100 hover:scale-105 transition-all duration-200`}>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-800">{metric.title}</h3>
                            <p className="text-sm text-gray-600">{metric.description}</p>
                        </div>
                        <div className={`w-12 h-12 ${metric.bgColor} rounded-full flex items-center justify-center`}>
                            <Image src={metric.image} alt="icon" width={24} height={24} />
                        </div>
                    </div>

                    <div className="flex items-end justify-between mb-4">
                        <div className={`text-3xl font-bold ${metric.color}`}>
                            {metric.count}
                        </div>
                        <div className={`text-sm font-semibold px-2 py-1 rounded-full ${metric.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                            {metric.change}
                        </div>
                    </div>

                    <Button
                        className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 hover:scale-102 transition-all cursor-pointer"
                    >
                        {metric.button}
                    </Button>
                </div>
            ))}
        </>
    )
}