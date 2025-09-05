"use client"
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-blue-200/70 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-90 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-2xl">Ocean Aware</span>
            </div>
            <p className=" w-[20vw] text-sm">
              Your digital ally for safer seas — report, track, and build resilience with real-time ocean hazard insights.
            </p>
          </div>
          
          <div className="-ml-20 w-[12rem]">
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 ">
              <li><a href="#" className="hover:text-purple hover:text-white/80 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple hover:text-white/80 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-purple hover:text-white/80 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple hover:text-white/80 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="font-medium text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className=" hover:bg-white/50 p-2 duration-300 rounded-full hover:bg-purple transition-colors">
                <Image src="/socials/linkedin.svg" alt="linkedin" width={40} height={40}/>
              </Link>
              <Link href="#" className=" hover:bg-white/50 p-2 duration-300 rounded-full hover:bg-purple transition-colors">
                <Image src="/socials/instagram.svg" alt="instagram" width={40} height={40}/>
              </Link>
              <Link href="#" className=" hover:bg-white/50 p-2 duration-300 rounded-full hover:bg-purple transition-colors">
                <Image src="/socials/twitter-x.svg" alt="facebook" width={40} height={40}/>
              </Link>
              <Link href="#" className=" hover:bg-white/50 p-2 duration-300 rounded-full hover:bg-purple transition-colors">
                <Image src="/socials/envelope.svg" alt="mail" width={40} height={40}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;