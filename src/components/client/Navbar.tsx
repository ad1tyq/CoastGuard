"use client"
import Link from "next/link";
import { useSession, signIn } from "next-auth/react"
import SignOut from "./SignOut";
import CustomLink from "./CustomLink";

const LoggedInNavItems = [
    { name: 'Analytics', href: '/analytics' },
    { name: 'Citizen Portal', href: '/citizenportal' },
    { name: 'Hazard Map', href: '/hazardmap' },
    { name: 'Relief Wallet', href: '/reliefwallet' },
    { name: 'About', href: '/about' },
];
const PublicNavItems = [
    { name: 'About', href: '/about' },
];

export default function Navbar() {
    const { data: session } = useSession();
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100 backdrop-blur-md">
                <div className="mx-auto" style={{ paddingTop: '1px', paddingBottom: '1px' }}>
                    <div className="flex px-10 items-center justify-between">
                        {/* Logo Section - Pixel Palettes branding */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-3">
                                <h1 className="text-3xl font-bold my-6">Ocean Aware</h1>
                            </Link>
                        </div>
                        {/* Desktop Navigation Menu - Hidden on mobile */}
                        <div className="flex">
                            <div className="flex space-x-4">
                                {session ? (
                                    LoggedInNavItems.map((item, index) => (
                                        <CustomLink key={index} href={item.href}>{item.name}</CustomLink>
                                    ))
                                ) : (
                                    PublicNavItems.map((item, index) => (
                                        <CustomLink key={index} href={item.href}>{item.name}</CustomLink>
                                    ))
                                )}
                            </div>
                            <div className="ml-6 mt-[5px]">
                                {session ? (
                                    <div className="flex justify-center gap-5 items-center">
                                        <SignOut />
                                    </div>

                                ) : (
                                    < button className="bg-white border border-gray-400 text-black transition-all duration-200 hover:bg-white/20 p-[0.2rem] px-[1rem] rounded-md cursor-pointer"
                                    onClick={() => signIn()}>Sign In</button>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </nav >
        </>
    );
}