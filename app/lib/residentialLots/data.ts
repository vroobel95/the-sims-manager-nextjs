import { apiClient } from '@/app/api/client';
import { ResidentialLot } from '../definitions';
import { mapToResidentialLotsArray } from './mappings';

export async function fetchResidentialLots(): Promise<ResidentialLot[]> {
  try {
    const rawData = await apiClient.get('residentialLots/');

    if (!rawData) {
      return [];
    }

    const dataToValidate = Array.isArray(rawData) ? rawData : rawData.data;
    const data = await mapToResidentialLotsArray(dataToValidate);

    return data;
  } catch {
    console.warn('Failed to fetch residential lots, continuing without data');
    return [];
  }
}
