import { apiClient } from '@/app/api/client';
import { Hobby } from '../definitions';
import { mapToHobbiesArray } from './mappings';

export async function fetchHobbies(): Promise<Hobby[]> {
  try {
    const rawData = await apiClient.get('hobbies/');

    if (!rawData) {
      throw new Error('No data received from API');
    }

    const dataToValidate = Array.isArray(rawData) ? rawData : rawData.data;
    const data = await mapToHobbiesArray(dataToValidate);

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch hobbies: ${error.message}`);
    }
    throw new Error('Failed to fetch hobbies');
  }
}
