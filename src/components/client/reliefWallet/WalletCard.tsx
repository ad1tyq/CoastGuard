"use client";

interface Props {
  wallet: number;
  pool: number;
  pushAudit: (event: string) => void;
  setPool: React.Dispatch<React.SetStateAction<number>>;
}

export default function WalletCard({ wallet, pool, pushAudit, setPool }: Props) {
  const formatINR = (v: number) => "₹ " + v.toLocaleString("en-IN");

  return (
    <div className="bg-blue-100 border p-4 rounded-xl shadow-lg flex justify-between">
      <div>
        <p className="text-sm font-semibold">Relief Wallet Balance</p>
        <p className="text-2xl font-bold text-blue-600">{formatINR(wallet)}</p>
        <p className="text-sm font-semibold">Linked: Aadhaar ✔ • UPI ID: sample@upi</p>
      </div>
      <div className="text-right">
        <p className="text-sm mb-1 font-semibold">Community Pool</p>
        <span className="px-3 py-1 rounded-full bg-white/60 text-green-500 font-bold
         backdrop-blur-lg border text-sm">
          {formatINR(pool)} (District)
        </span>
        <div className="mt-2">
          <button
            onClick={() => {
              setPool((p) => p + 2000);
              pushAudit("Manual Pool Top-up: ₹2,000");
            }}
            className="px-3 py-1 rounded-lg bg-purple-400 text-white hover:scale-103 hover:bg-purple-500 transition-all duration-300 cursor-pointer font-semibold"
          >
            Top-up Pool
          </button>
        </div>
      </div>
    </div>
  );
}
