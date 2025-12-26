import { apiClient } from '@/app/api/client';
import { LifetimeWant } from '../definitions';
import { mapToLifetimeWantsArray } from './mappings';

export async function fetchLifetimeWants(): Promise<LifetimeWant[]> {
  try {
    const rawData = await apiClient.get('lifetimeWants/');

    if (!rawData) {
      throw new Error('No data received from API');
    }

    const dataToValidate = Array.isArray(rawData) ? rawData : rawData.data;
    const data = await mapToLifetimeWantsArray(dataToValidate);

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch lifetime wants: ${error.message}`);
    }
    throw new Error('Failed to fetch lifetime wants');
  }
}
