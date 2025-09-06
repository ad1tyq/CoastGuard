"use client";

import { useEffect, useState } from "react";
import WalletCard from "@/components/client/reliefWallet/WalletCard";
import Triggers from "@/components/client/reliefWallet/Triggers";
import AuditLog from "@/components/client/reliefWallet/AuditLog";
import Transactions from "@/components/client/reliefWallet/Transactions";
import Sidebar from "@/components/client/reliefWallet/Sidebar";
import { AuditEntry, Transaction } from "../../../data/types/wallet";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePayout } from "@/contexts/PayoutContext";

export default function ReliefWalletPage() {
    const { Payout, setPayout } = usePayout();
    const { data: session } = useSession();
    
    const [wallet, setWallet] = useState(0);
    const [pool, setPool] = useState(0);
    const [auditLog, setAuditLog] = useState<AuditEntry[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const pushAudit = (event: string) => {
        const entry: AuditEntry = {
            id: "blk_" + Math.random().toString(36).slice(2, 9),
            ts: new Date().toLocaleString(),
            event,
        };
        setAuditLog((prev) => [...prev, entry]);
    };

    const triggerPayout = (reason: string, amount: number) => {

        const poolContribution = Math.round(amount * 0.05);
        setPool((p) => p + poolContribution);
        setWallet((w) => w + amount);

        setTransactions((prev) => [
            ...prev,
            { label: `Payout - ${reason}`, amount, details: "auto via parametric" },
        ]);

        pushAudit(
            `Payout triggered: ${reason} → ₹${amount.toLocaleString("en-IN")} (pool +₹${poolContribution})`
        );
    };

    useEffect(()=>{
        if(Payout){
            const num = Math.random();
            if (num <= 0.33 ) triggerPayout("Wave > 3m", 5000)
            else if (num > 0.33 && num <= 0.66) triggerPayout("Drought Risk", 2000);
            else if(num > 0.66 && num < 1) triggerPayout("Cyclone >150km/h", 10000);
        }
        setPayout(false);
    }, [Payout])

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
        <div className="max-w-[1200px] mx-auto mt-22 text-black grid grid-cols-1 md:grid-cols-[1fr_380px] gap-6 p-6">
            {/* HEADER */}
            <header className="col-span-2 flex flex-col justify-between gap-4">
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-4xl font-bold text-gray-800 border-b-4 border-blue-400 inline-block pb-3 px-8 mb-4">
                        CoastGuard+ Relief Wallet</h1>
                    <button
                        onClick={() => pushAudit("Running full simulation")}
                        className="bg-cyan-500 hover:scale-103 transition-all duration-300 hover:bg-cyan-600
                        cursor-pointer px-4 py-2 rounded-lg text-white font-semibold"
                    >
                        Run Demo Simulation
                    </button>
                </div>
            </header>

            {/* MAIN */}
            <main className="space-y-4">
                <WalletCard wallet={wallet} pool={pool} pushAudit={pushAudit} setPool={setPool} />

                <div className="grid md:grid-cols-2 gap-4">
                    <Triggers triggerPayout={triggerPayout} />
                    <AuditLog auditLog={auditLog} />
                </div>

                <Transactions transactions={transactions} />
            </main>

            {/* SIDEBAR */}
            <Sidebar pool={pool} setPool={setPool} pushAudit={pushAudit} />
        </div>
    );
}
