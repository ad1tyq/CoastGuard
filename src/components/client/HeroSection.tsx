"use client"
import Image from "next/image"
import Link from "next/link"
export default function HeroSection(){
    return(
        <div className="min-h-[65vh] pl-20 pr-10 pt-20 flex justify-between items-center -z-10 bg-blue-200/70">
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-bold text-black">Real-Time Ocean Hazard Reporting</h1>
                <p className="w-[45%] text-lg font-light">Stay informed with up-to-the-minute updates on ocean conditions and hazards. Join our mission to build resilience and protect our oceans.</p>
                <Link href="/about">
                <button className="bg-blue-400 hover:bg-blue-500 transition-all duration-300 w-[8rem] rounded-4xl text-white cursor-pointer px-5 py-2">Learn More</button></Link>
            </div>
            <div className="flex justify-center items-center">
                <Image src="/bg/bg.png" width={550} height={550} alt="hero bg"/>
            </div>
        </div>
        
    )
}