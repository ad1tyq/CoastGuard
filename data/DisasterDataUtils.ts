// DisasterDataUtils.ts
import { Cyclone } from './CycloneData';
import { FloodDataPoint } from './FloodData';
import { TsunamiData } from './TsunamiData';
import { Disaster, CycloneDisaster, FloodDisaster, TsunamiDisaster } from './DisasterTypes';

export const convertCycloneToDisaster = (cyclone: Cyclone): CycloneDisaster => ({
  id: cyclone.id,
  name: cyclone.cycloneName,
  type: 'cyclone',
  locationName: cyclone.locationName,
  latitude: cyclone.latitude,
  longitude: cyclone.longitude,
  date: cyclone.date,
  year: cyclone.year,
  estimatedDeaths: cyclone.estimatedDeaths,
  economicDamageINRCrores: cyclone.economicDamageINRCrores,
  intensityLevel: cyclone.intensityLevel,
  minPressureHPa: cyclone.minPressureHPa,
});

export const convertFloodToDisaster = (flood: FloodDataPoint): FloodDisaster => ({
  id: flood.id, // Using streamOrder as ID since it's unique in your data
  name: flood.floodName,
  type: 'flood',
  locationName: flood.placeHit,
  latitude: flood.latitude,
  longitude: flood.longitude,
  date: flood.eventDate,
  year: new Date(flood.eventDate).getFullYear(),
  estimatedDeaths: flood.estimatedDeaths,
  economicDamageINRCrores: flood.economicLossCrores,
  peakDischarge: flood.peakDischarge,
  affectedPopulation: flood.affectedPopulation,
});

export const convertTsunamiToDisaster = (tsunami: TsunamiData): TsunamiDisaster => ({
  id: tsunami.id,
  name: tsunami.tsunamiName || 'Unknown Tsunami',
  type: 'tsunami',
  locationName: tsunami.locationName || 'Unknown Location',
  latitude: tsunami.latitude || 0,
  longitude: tsunami.longitude || 0,
  date: tsunami.date || 'Unknown Date',
  year: tsunami.year || 0,
  estimatedDeaths: tsunami.estimatedDeaths || 0,
  economicDamageINRCrores: tsunami.economicDamageINRCrores || 0,
  intensityLevel: tsunami.intensityLevel || 'Unknown',
  maxWaveHeightM: tsunami.maxWaveHeightM || 0,
});

// Combine all disasters
import { cycloneData } from './CycloneData';
import { floodData } from './FloodData';
import { tsunamiData } from './TsunamiData';

export const allDisasters: Disaster[] = [
  ...cycloneData.map(convertCycloneToDisaster),
  ...floodData.map(convertFloodToDisaster),
  ...tsunamiData.map(convertTsunamiToDisaster),
];