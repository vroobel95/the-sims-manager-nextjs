import { Household } from '../definitions';
import { householdArraySchema, householdDetailSchema } from './schemas';

export async function mapToHouseholdsArray(
  data: unknown
): Promise<Household[]> {
  try {
    const validatedData = await householdArraySchema.parseAsync(data);
    return validatedData as Household[];
  } catch (error) {
    console.error('Error mapping households data:', error);
    throw new Error('Failed to map households data');
  }
}

export async function mapToHouseholdDetail(data: unknown) {
  try {
    const validatedData = await householdDetailSchema.parseAsync(data);
    return validatedData;
  } catch (error) {
    console.error('Error mapping household detail:', error);
    throw new Error('Failed to map household detail');
  }
}
