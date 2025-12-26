import { apiClient } from '@/app/api/client';
import { CollegeMajor } from '../definitions';
import { mapToCollegeMajorsArray } from './mappings';

export async function fetchCollegeMajors(): Promise<CollegeMajor[]> {
  try {
    const rawData = await apiClient.get('collegeMajors/');

    if (!rawData) {
      throw new Error('No data received from API');
    }

    const dataToValidate = Array.isArray(rawData) ? rawData : rawData.data;
    const data = await mapToCollegeMajorsArray(dataToValidate);

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch college majors: ${error.message}`);
    }
    throw new Error('Failed to fetch college majors');
  }
}
