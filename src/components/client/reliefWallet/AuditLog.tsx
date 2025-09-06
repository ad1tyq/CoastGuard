"use client";

import { AuditEntry } from "../../../../data/types/wallet";

interface Props {
  auditLog: AuditEntry[];
}

export default function AuditLog({ auditLog }: Props) {
  return (
    <div className="bg-blue-100 border p-4 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Transparency & Audit</h2>
      <div className="max-h-40 overflow-y-auto text-xs space-y-1 font-mono bg-white/60
      backdrop-blur-lg rounded-lg p-2">
        {auditLog.length === 0 && <p className="text-slate-500">No audit entries yet</p>}
        {auditLog.map((a) => (
          <div key={a.id} className="border-b border-slate-800 pb-1">
            <span className="text-blue-700 font-bold">{a.ts}</span> — {a.event}
          </div>
        ))}
      </div>
    </div>
  );
}
