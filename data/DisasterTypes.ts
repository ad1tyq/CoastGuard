// DisasterTypes.ts
export interface BaseDisaster {
  id: number;
  name: string;
  type: 'cyclone' | 'flood' | 'tsunami';
  locationName: string;
  latitude: number;
  longitude: number;
  date: string;
  year: number;
  estimatedDeaths: number;
  economicDamageINRCrores: number;
}

export interface CycloneDisaster extends BaseDisaster {
  type: 'cyclone';
  intensityLevel: string;
  minPressureHPa: number;
}

export interface FloodDisaster extends BaseDisaster {
  type: 'flood';
  peakDischarge: number;
  affectedPopulation: number;
}

export interface TsunamiDisaster extends BaseDisaster {
  type: 'tsunami';
  intensityLevel: string;
  maxWaveHeightM: number;
}

export type Disaster = CycloneDisaster | FloodDisaster | TsunamiDisaster;