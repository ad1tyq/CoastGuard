"use client";

interface Props {
  pool: number;
  setPool: React.Dispatch<React.SetStateAction<number>>;
  pushAudit: (event: string) => void;
}

export default function Sidebar({ pool, setPool, pushAudit }: Props) {
  return (
    <aside className="bg-blue-100 p-4 rounded-xl shadow-lg space-y-6">
      <div>
        <h3 className="font-semibold">Community Resilience Pool</h3>
        <p className="text-sm text-slate-900 mt-1">
          % of every payout funds district recovery (schools, clinics, boats).
        </p>
        <div className="mt-3">
          <p className="text-xl font-bold text-blue-600">
            ₹ {pool.toLocaleString("en-IN")}
          </p>
          <button
            onClick={() => {
              setPool((p) => p + 1000);
              pushAudit("NGO contributed ₹1,000 to pool");
            }}
            className="mt-2 px-3 py-1 rounded-lg cursor-pointer
            bg-purple-400 text-white hover:scale-103 hover:bg-purple-500 transition-all duration-300 font-semibold"
          >
            NGO Top-up
          </button>
        </div>
      </div>
    </aside>
  );
}
