"use client";

import { useState } from "react";
import WalletCard from "@/components/client/reliefWallet/WalletCard";
import Triggers from "@/components/client/reliefWallet/Triggers";
import AuditLog from "@/components/client/reliefWallet/AuditLog";
import Transactions from "@/components/client/reliefWallet/Transactions";
import Sidebar from "@/components/client/reliefWallet/Sidebar";
import { AuditEntry, Transaction } from "../../../data/types/wallet";

export default function ReliefWalletPage() {
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
                    <Triggers triggerPayout={triggerPayout} pushAudit={pushAudit} />
                    <AuditLog auditLog={auditLog} />
                </div>

                <Transactions transactions={transactions} />
            </main>

            {/* SIDEBAR */}
            <Sidebar pool={pool} setPool={setPool} pushAudit={pushAudit} />
        </div>
    );
}
