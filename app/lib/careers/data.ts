import { apiClient } from '@/app/api/client';
import { Career } from '../definitions';
import { mapToCareersArray } from './mappings';

export async function fetchCareers(): Promise<Career[]> {
  try {
    const rawData = await apiClient.get('careers/');

    if (!rawData) {
      throw new Error('No data received from API');
    }

    const dataToValidate = Array.isArray(rawData) ? rawData : rawData.data;
    const data = await mapToCareersArray(dataToValidate);

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch careers: ${error.message}`);
    }
    throw new Error('Failed to fetch careers');
  }
}
