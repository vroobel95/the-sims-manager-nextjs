import { apiClient } from '@/app/api/client';
import { mapToAspiration, mapToAspirationsArray } from './mappings';
import { AspirationFormData } from './schemas';

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
