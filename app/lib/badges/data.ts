import { apiClient } from '@/app/api/client';
import { Badge } from '../definitions';
import { mapToBadgesArray } from './mappings';

export async function fetchBadges(): Promise<Badge[]> {
  try {
    const rawData = await apiClient.get('badges/');

    if (!rawData) {
      throw new Error('No data received from API');
    }

    const dataToValidate = Array.isArray(rawData) ? rawData : rawData.data;
    const data = await mapToBadgesArray(dataToValidate);

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch badges: ${error.message}`);
    }
    throw new Error('Failed to fetch badges');
  }
}
