import { apiClient } from '@/app/api/client';
import { Chemistry } from '../definitions';
import { mapToChemistriesArray } from './mappings';

export async function fetchChemistries(): Promise<Chemistry[]> {
  try {
    const rawData = await apiClient.get('chemistries/');

    if (!rawData) {
      throw new Error('No data received from API');
    }

    const dataToValidate = Array.isArray(rawData) ? rawData : rawData.data;
    const data = await mapToChemistriesArray(dataToValidate);

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch chemistries: ${error.message}`);
    }
    throw new Error('Failed to fetch chemistries');
  }
}
