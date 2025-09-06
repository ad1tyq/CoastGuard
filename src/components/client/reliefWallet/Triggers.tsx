"use client";

interface Props {
  triggerPayout: (reason: string, amount: number) => void;
  pushAudit: (event: string) => void;
}

export default function Triggers({ triggerPayout, pushAudit }: Props) {
  return (
    <div className="bg-blue-100 borde p-4 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Trigger Conditions (Parametric)</h2>
      <ul className="space-y-2 text-sm">
        <li className="flex justify-between">
          🌊 Wave height &gt; 3m → ₹5,000
          <button
            className="bg-purple-400 text-white hover:scale-103 hover:bg-purple-500 transition-all duration-300
             px-3 py-1 rounded-lg font-semibold cursor-pointer"
            onClick={() => triggerPayout("Wave > 3m", 5000)}
          >
            Simulate
          </button>
        </li>
        <li className="flex justify-between">
          ☀️ Rainfall &lt; 20mm (10d) → ₹2,000
          <button
            className="bg-purple-400 text-white hover:scale-103 hover:bg-purple-500 transition-all duration-300
             px-3 py-1 rounded-lg font-semibold cursor-pointer"
            onClick={() => triggerPayout("Drought Risk", 2000)}
          >
            Simulate
          </button>
        </li>
        <li className="flex justify-between">
          🌪 Cyclone windspeed &gt; 150km/h → ₹10,000
          <button
            className="bg-purple-400 text-white hover:scale-103 hover:bg-purple-500 transition-all duration-300
             px-3 py-1 rounded-lg font-semibold cursor-pointer h-[2rem]"
            onClick={() => triggerPayout("Cyclone >150km/h", 10000)}
          >
            Simulate
          </button>
        </li>
      </ul>
    </div>
  );
}
