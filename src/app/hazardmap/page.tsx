"use client"
import Map from "@/components/client/MapsPage/Map"
import { DataLayersSort } from "@/components/client/MapsPage/DataLayers"
import HazardInfo from "@/components/client/MapsPage/HazardInfo"
export default function Page(){
    return(
        <div className=" mt-18 gap-10 items-center flex flex-col">
            <h1 className="text-4xl text-center pb-2 w-[15rem] border-b-3 border-blue-300/70 font-semibold mt-10">
            CoastGuard+ Hazard Map</h1>
            <div className="min-h-screen flex gap-5">
            
            <div className="bg-gray-300 w-[15vw] h-[38rem] rounded-2xl p-10 mb-5 ml-5">
                <DataLayersSort/>
            </div>
            <div className="w-[60vw] h-[38rem] rounded-2xl p-5 bg-gray-300 mb-5">
                <Map/>
            </div>
            <div className="w-[20vw] h-[38rem] overflow-y-scroll flex justify-center rounded-2xl p-5 mr-5 bg-gray-300 mb-5" style={{scrollbarWidth: "none"}}>
                <HazardInfo/>
            </div>
            
        </div>
        </div>
        
        
    )
}