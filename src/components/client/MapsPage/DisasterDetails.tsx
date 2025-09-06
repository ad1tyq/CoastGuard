// DisasterDetails.tsx
import { Disaster } from "../../../../data/DisasterTypes";

interface DisasterDetailsProps {
  disaster: Disaster | null;
}

export default function DisasterDetails({ disaster }: DisasterDetailsProps) {
  if (!disaster) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-500">Select a disaster to view details</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{disaster.name}</h2>
      <p className="text-sm text-gray-600 mb-2">
        Type: <span className="font-medium capitalize">{disaster.type}</span>
      </p>
      <p className="text-sm text-gray-600 mb-2">
        Location: <span className="font-medium">{disaster.locationName}</span>
      </p>
      <p className="text-sm text-gray-600 mb-2">
        Date: <span className="font-medium">{disaster.date}</span>
      </p>
      <p className="text-sm text-gray-600 mb-2">
        Estimated Deaths: <span className="font-medium">{disaster.estimatedDeaths.toLocaleString()}</span>
      </p>
      <p className="text-sm text-gray-600 mb-2">
        Economic Damage: <span className="font-medium">₹{disaster.economicDamageINRCrores.toLocaleString()} Crores</span>
      </p>
      
      {/* Type-specific details */}
      {disaster.type === 'cyclone' && (
        <>
          <p className="text-sm text-gray-600 mb-2">
            Intensity: <span className="font-medium">{disaster.intensityLevel}</span>
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Minimum Pressure: <span className="font-medium">{disaster.minPressureHPa} hPa</span>
          </p>
        </>
      )}
      
      {disaster.type === 'flood' && (
        <>
          <p className="text-sm text-gray-600 mb-2">
            Peak Discharge: <span className="font-medium">{disaster.peakDischarge} m³/s</span>
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Affected Population: <span className="font-medium">{disaster.affectedPopulation.toLocaleString()}</span>
          </p>
        </>
      )}
      
      {disaster.type === 'tsunami' && (
        <>
          <p className="text-sm text-gray-600 mb-2">
            Intensity: <span className="font-medium">{disaster.intensityLevel}</span>
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Max Wave Height: <span className="font-medium">{disaster.maxWaveHeightM} m</span>
          </p>
        </>
      )}
    </div>
  );
}