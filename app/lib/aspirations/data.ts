import { apiClient } from '@/app/api/client';
import { mapToAspirationsArray } from './mappings';

export async function fetchAspirations() {
  try {
    const rawData = await apiClient.get('aspirations/');

    if (!rawData) {
      throw new Error('No data received from API');
    }

    const dataToValidate = Array.isArray(rawData) ? rawData : rawData.data;
    const data = await mapToAspirationsArray(dataToValidate);

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch aspirations: ${error.message}`);
    }
    throw new Error('Failed to fetch aspirations');
  }
}
