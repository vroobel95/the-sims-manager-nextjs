import { apiClient } from '@/app/api/client';
import { mapToAspiration, mapToAspirationsArray } from './mappings';
import { AspirationFormData } from './schemas';

export async function fetchAspirations() {
  try {
    const rawData = await apiClient.get('aspirations/');

    if (!rawData) {
      throw new Error('No data received from API');
    }

    // If the API returns { data: [...] }, extract the data property
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

export async function fetchAspirationById(id: string) {
  try {
    const data = await apiClient
      .get(`aspirations/${id}`)
      .then((data) => mapToAspiration(data));
    if (!data) {
      throw new Error('Failed to fetch aspiration.');
    }
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch aspiration.');
  }
}

export async function patchAspiration(
  id: string,
  formData: AspirationFormData
) {
  try {
    const data = await apiClient.put(`aspirations/${id}`, formData);
    if (!data) {
      throw new Error('Failed to fetch aspiration.');
    }
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch aspiration.');
  }
}
