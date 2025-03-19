import { apiClient } from '@/app/api/client';
import { mapToAspirationsArray } from '../mappings/aspirationMapping';

export async function fetchAspirations() {
  try {
    const data = await apiClient
      .get('aspirations')
      .then((data) => mapToAspirationsArray(data));
    if (!data) {
      throw new Error('Failed to fetch aspirations.');
    }
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch aspirations.');
  }
}
