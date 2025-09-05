"use client"
import { MissionData } from "../../../data/MissionData"
import Image from "next/image"
interface type{
    image: string,
    title: string,
    mission: string,
}
const MissionCard = ({image, title, mission}: type) => {
    // individual card
    return(
        <>
        <div className="w-[85vw] flex flex-col items-center justify-center -mt-5 lg:md-0 shadow-lg rounded-lg overflow-x-hidden overflow-y-scroll h-auto bg-gray-100 p-5 pt-3" style={{scrollbarWidth:"none"}}>
            <Image src={image} width={100} height={100} alt="user testimonial"
            className="ml-2 my-4 rounded-xl object-cover"/>
            <h3 className="mx-[0.3rem] text-center text-2xl font-bold w-[98%] my-2">{title}</h3>
            <h3 className="mx-[0.3rem] text-center text-[clamp(0.8rem,1vw,1rem)] w-[98%] my-2">{mission}</h3>
        </div>
        </>
    )
}
export default function MissionContainer(){
    return(
        <>
        {/* entire component */}
        <div className="flex flex-col">
            <h1 className="text-[2rem] mt-8 ml-[3.7rem] font-semibold">Our Mission</h1>
            {/* card container */}
            <div className="lg:flex mx-4 rounded-lg py-[3rem] overflow-x-scroll w-[97%] gap-10 sm:grid px-[clamp(0rem,3vw,3rem)]"
            style={{scrollbarWidth: 'none'}}>
                {/* mapping array data for each card */}
                {MissionData.map((card) => (
                    <MissionCard key={card.id} image={card.image} title={card.title} mission={card.mission}/>
                ))}
            </div>
        </div>
        </>
    )
}