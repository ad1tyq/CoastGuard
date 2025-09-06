import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";
import AuthProvider from "@/components/client/AuthProvider";
import { LegendProvider } from "@/contexts/LegendFilterContext";
import { ReportProvider } from "@/contexts/ReportContext";
import { PayoutProvider } from "@/contexts/PayoutContext";
import { NotifProvider } from "@/contexts/NotifContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoastGuard+",
  description: "Smarter alerts, faster relief.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PayoutProvider>
        <AuthProvider>
          <NotifProvider>
          <ReportProvider>
            <LegendProvider>
              
              <Navbar />
              {children}
              <Footer />
              
            </LegendProvider>
          </ReportProvider>
          </NotifProvider>
        </AuthProvider>
        </PayoutProvider>
      </body>
    </html>
  );
}
