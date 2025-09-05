import { ChartBarHorizontal } from "@/components/client/charts/Engagement"
import { ChartBarDefault } from "@/components/client/charts/Trends"
import { ChartPieLabel } from "@/components/client/charts/pieChart"
import { ChartLineMultiple } from "@/components/client/charts/Occurance"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const Data = [
    {
        id: 1,
        title: "Total Hazard",
        hazards: 256,
        image: "/assets/exclamation-triangle-fill.svg",
        button: "Report Hazard",
    },
    {
        id: 2,
        title: "Community",
        community: 14,
        image: "/assets/people-fill.svg",
        button: "Join Community",
    },
];
const Categories = [
    {
        id: 1,
        image: "/assets/drown.svg",
        title: "Fload",
    },
    {
        id: 2,
        image: "/assets/water.svg",
        title: "Drought",
    },
    {
        id: 3,
        image: "/assets/wind.svg",
        title: "Storms",
    },
    {
        id: 4,
        image: "/assets/fish.svg",
        title: "Marine Life",
    },
];

export default function Page() {
    return (
        <div className="min-h-screen pt-20 flex flex-col">
            <div className="flex justify-center">
                <h1 className="text-4xl text-center pb-2 w-[15rem] border-b-3 border-blue-300/70 font-semibold mt-10">Analytics</h1>
            </div>
            
            <div className="flex px-10">
                {/* column 1 */}
                <div className="flex flex-col items-center gap-10 m-10 w-[50vw]">
                    {/* Total Hazard & Community */}
                    <div className="flex gap-10">
                        {Data.map((data) => (
                            <div key={data.id} className="p-10 flex flex-col shadow-md gap-4 bg-gray-100 h-auto rounded-3xl">
                                <div className="flex gap-10">
                                    <div className="flex flex-col gap-1">
                                        <h1 className="font-bold text-xl">{data.title}</h1>
                                        {data.hazards ? (
                                            <h1 className="text-4xl">{data.hazards}</h1>
                                        ) : (
                                            <h1 className="text-4xl">{data.community}</h1>
                                        )}
                                    </div>
                                    <Image src={data.image} alt="icon" width={40} height={40} />
                                </div>
                                <Button type="submit" className="bg-blue-400 hover:bg-blue-500
                                cursor-pointer hover:scale-102 rounded-2xl w-auto">{data.button}</Button>
                            </div>
                        ))}
                    </div>

                    {/* Hazard Categories */}
                    <div className="p-10 flex flex-col shadow-md gap-6 bg-gray-100 h-auto rounded-3xl">
                        <div className="flex gap-10 justify-between items-center">
                            <h1 className="font-bold text-2xl">Hazard Categories</h1>
                            <div className="flex gap-2 cursor-pointer hover:font-semibold hover:scale-102
                            transition-all duration-100">
                                <p className="mt-1">View Details</p>
                                <Image src="/assets/arrow-right.svg" alt="right-arrow" width={15} height={15} />
                            </div>
                        </div>
                        <div className="flex gap-10 px-2">
                            {Categories.map((cat) => (
                                <div key={cat.id} className="p-4 bg-blue-300 flex gap-2 flex-col duration-200 transition-all
                            justify-center cursor-pointer hover:bg-blue-400 items-center w-[8rem] 
                            h-[8rem] hover:scale-105 rounded-xl">
                                    <Image src={cat.image} alt="icon" width={55} height={55}
                                        className="bg-white p-3 rounded-2xl" />
                                    <p className="font-bold text-white">{cat.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* charts row */}
                    <div className="flex gap-10">
                        <div className="p-10 bg-blue-100 hover:scale-105 transition-all duration-200 h-auto rounded-3xl">
                            <ChartBarHorizontal />
                        </div>
                        <div className="p-10 bg-blue-100 hover:scale-105 transition-all duration-200 h-auto rounded-3xl">
                            <ChartPieLabel />
                        </div>
                    </div>

                </div>

                {/* column 2 : charts column */}
                <div className="flex flex-col items-center gap-10 m-10 w-[50vw]">
                    <div className="flex gap-10">
                        <div className="p-10 bg-blue-100 hover:scale-105 transition-all duration-200 h-auto rounded-3xl">
                            <ChartBarDefault />
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="p-10 bg-blue-100 hover:scale-105 transition-all duration-200 h-auto rounded-3xl">
                            <ChartLineMultiple />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}