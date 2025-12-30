import { apiClient } from '@/app/api/client';
import { Household, HouseholdDetailResponse } from '../definitions';
import { mapToHouseholdDetail, mapToHouseholdsArray } from './mappings';

export async function fetchHouseholds(): Promise<Household[]> {
  try {
    const rawData = await apiClient.get('households/');

    if (!rawData) {
      throw new Error('No data received from API');
    }

    const dataToValidate = Array.isArray(rawData) ? rawData : rawData.data;
    const data = await mapToHouseholdsArray(dataToValidate);

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch households: ${error.message}`);
    }
    throw new Error('Failed to fetch households');
  }
}

export async function fetchHouseholdDetail(
  id: string
): Promise<HouseholdDetailResponse> {
  try {
    const rawData = await apiClient.get(`households/${id}`);

    if (!rawData) {
      throw new Error('No data received from API');
    }

    const data = await mapToHouseholdDetail(rawData);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch household detail: ${error.message}`);
    }
    throw new Error('Failed to fetch household detail');
  }
}

export async function updateHousehold(
  id: string,
  data: {
    name: string;
    round: number;
    funds: number;
    wealth: number;
    image_url?: string | null;
    houseId?: string;
  }
): Promise<HouseholdDetailResponse> {
  try {
    const rawData = await apiClient.put(`households/${id}`, data);

    if (!rawData) {
      throw new Error('No data received from API');
    }

    const updatedData = await mapToHouseholdDetail(rawData);
    return updatedData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to update household: ${error.message}`);
    }
    throw new Error('Failed to update household');
  }
}
