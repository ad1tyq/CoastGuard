"use client";

import { Transaction } from "../../../../data/types/wallet";

interface Props {
  transactions: Transaction[];
}

export default function Transactions({ transactions }: Props) {
  return (
    <div className="bg-blue-100 p-4 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Transaction History</h2>
      <ul className="divide-y divide-slate-800 bg-white/60 backdrop-blur-lg rounded-md px-3 py-1 text-sm max-h-[10rem] overflow-y-scroll"
      style={{scrollbarWidth: "thin"}}>
        {transactions.length === 0 && (
          <li className="py-2 text-slate-500">No transactions yet</li>
        )}
        {transactions.map((t, idx) => (
          <li key={idx} className="py-2 flex justify-between">
            <div>
              <p className="font-semibold">{t.label}</p>
              <p className="text-xs text-slate-500">{t.details}</p>
            </div>
            <span className="font-bold text-blue-600">₹{t.amount.toLocaleString("en-IN")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
