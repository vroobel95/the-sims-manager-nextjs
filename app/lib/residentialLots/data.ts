import { apiClient } from '@/app/api/client';
import { mapToResidentialLotsArray } from './mappings';

export async function fetchResidentialLots() {
  try {
    const rawData = await apiClient.get('residentialLots/');

    if (!rawData) {
      return [];
    }

    const dataToValidate = Array.isArray(rawData) ? rawData : rawData.data;
    const data = await mapToResidentialLotsArray(dataToValidate);

    return data;
  } catch (error: unknown) {
    console.warn('Failed to fetch residential lots, continuing without data');
    return [];
  }
}
