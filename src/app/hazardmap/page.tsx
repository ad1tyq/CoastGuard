"use client"
import Map from "@/components/client/MapsPage/Map"
import { DataLayersSort } from "@/components/client/MapsPage/DataLayers"
import HazardInfo from "@/components/client/MapsPage/HazardInfo"
import { useSession } from "next-auth/react"
import Link from "next/link"
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
        <div className=" mt-28 gap-10 items-center flex flex-col">
            <h1 className="text-4xl font-bold text-gray-800 border-b-4 border-blue-400 inline-block pb-3 px-8 mb-4">
                CoastGuard+ Hazard Map</h1>
            <div className="min-h-screen flex gap-5">

                <div className="bg-gray-300 w-[15vw] h-[38rem] rounded-2xl p-10 mb-5 ml-5">
                    <DataLayersSort />
                </div>
                <div className="w-[60vw] h-[38rem] rounded-2xl p-5 bg-gray-300 mb-5">
                    <Map />
                </div>
                <div className="w-[20vw] h-[38rem] overflow-y-scroll flex justify-center rounded-2xl p-5 mr-5 bg-gray-300 mb-5" style={{ scrollbarWidth: "none" }}>
                    <HazardInfo />
                </div>

            </div>
        </div>


    )
}