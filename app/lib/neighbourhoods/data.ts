import { apiClient } from '@/app/api/client';
import { Neighbourhood } from '../definitions';
import { mapToNeighbourhoodsArray } from './mappings';

export async function fetchNeighbourhoods(): Promise<Neighbourhood[]> {
  try {
    const rawData = await apiClient.get('neighbourhoods/');

    if (!rawData) {
      throw new Error('No data received from API');
    }

    const dataToValidate = Array.isArray(rawData) ? rawData : rawData.data;
    const data = await mapToNeighbourhoodsArray(dataToValidate);

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch neighbourhoods: ${error.message}`);
    }
    throw new Error('Failed to fetch neighbourhoods');
  }
}
