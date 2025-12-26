import { apiClient } from '@/app/api/client';
import { ZodiacSign } from '../definitions';
import { mapToZodiacSignsArray } from './mappings';

export async function fetchZodiacSigns(): Promise<ZodiacSign[]> {
  try {
    const rawData = await apiClient.get('zodiacSigns/');

    if (!rawData) {
      throw new Error('No data received from API');
    }

    const dataToValidate = Array.isArray(rawData) ? rawData : rawData.data;
    const data = await mapToZodiacSignsArray(dataToValidate);

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch zodiac signs: ${error.message}`);
    }
    throw new Error('Failed to fetch zodiac signs');
  }
}
